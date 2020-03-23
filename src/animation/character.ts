import { Illustration, Ellipse, RoundedRect, Shape, TAU } from "zdog";

export default (elementIdentifier: string) => {
  let isSpinning = true;
  let rotatesClockwide = true;
  const hipX = 3;
  const armSize = 6;

  // COLORS
  const colors = {
    skin: "#ffc83d",
    shirt: "#1d9ed1",
    pants: "#9e732e",
    shoe: "#a16308",
  };

  function animate(illustration: Illustration): void {
    if (illustration.rotate.y >= 1) {
      rotatesClockwide = false;
    }

    if (illustration.rotate.y <= -1) {
      rotatesClockwide = true;
    }

    if (rotatesClockwide) {
      illustration.rotate.y += isSpinning ? 0.01 : 0;
    } else {
      illustration.rotate.y -= isSpinning ? 0.01 : 0;
    }

    illustration.updateRenderGraph();
    requestAnimationFrame(() => animate(illustration));
  }

  const illustration = new Illustration({
    element: elementIdentifier,
    zoom: 5,
    translate: { y: 2 }, // to really center
    dragRotate: true,
    onDragStart: () => {
      isSpinning = false;
    },
    onDragEnd: () => {
      isSpinning = true;
    },
  });

  const hips = new Shape({
    addTo: illustration,
    path: [{ x: -hipX }, { x: hipX }],
    stroke: 4,
    color: colors.pants,
  });

  const chest = new Shape({
    addTo: hips,
    path: [{ x: -1.5 }, { x: 1.5 }],
    translate: { y: -6.5 }, // -(hips.stroke + chest.stroke) / 2
    stroke: 9,
    color: colors.shirt,
  });

  // left leg
  const leg = new Shape({
    addTo: hips,
    path: [{ y: 0 }, { y: 12 }],
    translate: { x: -hipX },
    rotate: { z: 0.05 },
    color: colors.pants,
    stroke: 4,
  });

  // left foot
  new RoundedRect({
    addTo: leg,
    width: 2,
    height: 4,
    cornerRadius: 1,
    translate: { y: 14, z: 2 }, // y: past leg end, z: scootch toward front
    rotate: { x: TAU / 4 }, // rotate 90° along x-axis
    color: colors.shoe,
    fill: true,
    stroke: 4,
  });

  // right leg and right foot
  leg.copyGraph({
    translate: { x: hipX },
    rotate: { z: -0.05 },
  });

  const rightUpperArm = new Shape({
    addTo: chest,
    path: [{ y: 0 }, { y: armSize }],
    translate: { x: -5, y: -2 },
    rotate: { z: 1 },
    color: colors.shirt,
    stroke: 4,
  });

  const rightForeArm = new Shape({
    addTo: rightUpperArm,
    path: [{ y: 0 }, { y: armSize }],
    translate: { y: armSize },
    rotate: { z: 1.7 },
    color: colors.skin,
    stroke: 4,
  });

  // right hand
  new Shape({
    addTo: rightForeArm,
    // connect to end of forearm
    // scootch toward front a bit
    translate: { y: armSize, z: 1 },
    stroke: 6,
    color: colors.skin,
  });

  const leftUpperArm = rightUpperArm.copy({
    translate: { x: 5, y: -2 },
    rotate: { z: -1 },
  });

  // left fore arm
  rightForeArm.copyGraph({
    addTo: leftUpperArm,
  });

  const head = new Shape({
    addTo: chest,
    stroke: 12,
    translate: { y: -9.5 }, // above chest
    color: colors.skin,
  });

  // right eye
  const eye = new Ellipse({
    addTo: head,
    diameter: 2.5,
    quarters: 2, // semi-circle
    translate: { x: -2, y: 0, z: TAU - 1 },
    // rotate semi-circle to point up
    rotate: { z: -TAU / 4 },
    color: "#000",
    stroke: 0.5,
  });

  // left eye
  eye.copy({
    translate: { x: 2, y: 0, z: TAU - 1 },
  });

  // mouth
  new Ellipse({
    addTo: head,
    diameter: 3,
    quarters: 2,
    translate: { y: 2.5, z: TAU - 1 },
    rotate: { z: TAU / 4 },
    closed: true,
    color: "#fff",
    stroke: 0.5,
    fill: true,
  });

  animate(illustration);
};
