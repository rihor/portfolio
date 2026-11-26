// One persistent three.js scene behind every tab: slow, dark-grey floating points on light grey.
// Created once on load; tab switches never touch it.
import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.170.0/build/three.module.min.js";

const canvas = document.getElementById("field");
const reduced = matchMedia("(prefers-reduced-motion: reduce)");

let renderer;
try {
  renderer = new THREE.WebGLRenderer({ canvas, antialias: false, alpha: false });
} catch {
  // No WebGL: the plain paper background stays.
}

if (renderer) {
  renderer.setClearColor(0xe6e6e3, 1); // --c-paper
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 100);
  camera.position.z = 14;

  const COUNT = innerWidth < 760 ? 1400 : 2600;
  const pos = new Float32Array(COUNT * 3);
  const seed = new Float32Array(COUNT); // per-point phase, size and brightness
  for (let i = 0; i < COUNT; i++) {
    // loose ellipsoidal cloud, denser toward the middle
    const r = 11 * Math.cbrt(Math.random());
    const th = Math.random() * Math.PI * 2;
    const ph = Math.acos(2 * Math.random() - 1);
    pos[i * 3] = r * Math.sin(ph) * Math.cos(th) * 1.6;
    pos[i * 3 + 1] = r * Math.sin(ph) * Math.sin(th) * 0.9;
    pos[i * 3 + 2] = r * Math.cos(ph);
    seed[i] = Math.random();
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
  geo.setAttribute("seed", new THREE.BufferAttribute(seed, 1));

  const mat = new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    uniforms: { uTime: { value: 0 }, uDpr: { value: 1 } },
    vertexShader: /* glsl */ `
      attribute float seed;
      uniform float uTime;
      uniform float uDpr;
      varying float vAlpha;
      void main() {
        vec3 p = position;
        // slow individual drift
        p.x += sin(uTime * 0.15 + seed * 40.0) * 0.35;
        p.y += cos(uTime * 0.12 + seed * 25.0) * 0.35;
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        gl_Position = projectionMatrix * mv;
        float size = mix(1.0, 3.2, pow(seed, 3.0));
        gl_PointSize = size * uDpr * (14.0 / -mv.z);
        // grey points, dimmer with depth, gently twinkling
        float depth = smoothstep(26.0, 4.0, -mv.z);
        vAlpha = mix(0.10, 0.45, seed) * depth * (0.75 + 0.25 * sin(uTime * 0.6 + seed * 60.0));
      }`,
    fragmentShader: /* glsl */ `
      varying float vAlpha;
      void main() {
        float d = length(gl_PointCoord - 0.5);
        if (d > 0.5) discard;
        float a = smoothstep(0.5, 0.1, d) * vAlpha;
        gl_FragColor = vec4(vec3(0.08), a); // near --c-ink
      }`,
  });
  const points = new THREE.Points(geo, mat);
  scene.add(points);

  // subtle pointer parallax
  const target = { x: 0, y: 0 };
  addEventListener("pointermove", (e) => {
    target.x = (e.clientX / innerWidth - 0.5) * 0.6;
    target.y = (e.clientY / innerHeight - 0.5) * 0.4;
  });

  function resize() {
    const dpr = Math.min(devicePixelRatio, 2);
    renderer.setPixelRatio(dpr);
    renderer.setSize(innerWidth, innerHeight, false);
    camera.aspect = innerWidth / innerHeight;
    camera.updateProjectionMatrix();
    mat.uniforms.uDpr.value = dpr;
    if (reduced.matches) renderer.render(scene, camera);
  }
  addEventListener("resize", resize);
  resize();

  const clock = new THREE.Clock();
  function frame() {
    const t = clock.getElapsedTime();
    mat.uniforms.uTime.value = t;
    points.rotation.y = t * 0.018;
    points.rotation.x = Math.sin(t * 0.05) * 0.08;
    camera.position.x += (target.x - camera.position.x) * 0.02;
    camera.position.y += (-target.y - camera.position.y) * 0.02;
    camera.lookAt(0, 0, 0);
    renderer.render(scene, camera);
  }

  // Reduced motion: draw one still frame, no loop.
  function start() {
    if (reduced.matches) { renderer.setAnimationLoop(null); renderer.render(scene, camera); }
    else renderer.setAnimationLoop(frame);
  }
  reduced.addEventListener("change", start);
  start();
}
