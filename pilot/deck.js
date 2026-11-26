(() => {
  const slides = [...document.querySelectorAll(".slide")];
  const pad = (n) => String(n).padStart(2, "0");
  const $ = (id) => document.getElementById(id);
  const [prevBtn, nextBtn] = document.querySelectorAll(".ctrls .btn");
  let cur = -1;
  let lock = false;

  $("tot").textContent = pad(slides.length);

  function go(i) {
    i = Math.max(0, Math.min(slides.length - 1, i));
    if (i === cur || lock) return;
    const forward = i > cur;
    const prev = slides[cur];
    const next = slides[i];

    if (prev) {
      prev.classList.remove("on");
      prev.classList.add("leaving");
      setTimeout(() => prev.classList.remove("leaving"), 800);
    }
    // incoming slide wipes in from the bottom (forward) or top (back)
    next.classList.toggle("from-top", !forward);
    next.getBoundingClientRect(); // commit start state
    next.classList.add("on");
    next.classList.remove("from-top");

    cur = i;
    lock = true;
    setTimeout(() => (lock = false), 650);

    $("cur").textContent = pad(i + 1);
    $("name").textContent = next.dataset.title;
    $("bar").style.width = ((i + 1) / slides.length) * 100 + "%";
    document.body.classList.toggle("dark", next.classList.contains("invert"));
    prevBtn.disabled = i === 0;
    nextBtn.disabled = i === slides.length - 1;
    history.replaceState(null, "", "#" + (i + 1));
  }
  const step = (d) => go(cur + d);

  // keyboard
  addEventListener("keydown", (e) => {
    if (["ArrowRight", "ArrowDown", "PageDown", " "].includes(e.key)) { e.preventDefault(); step(1); }
    if (["ArrowLeft", "ArrowUp", "PageUp"].includes(e.key)) { e.preventDefault(); step(-1); }
    if (e.key === "Home") go(0);
    if (e.key === "End") go(slides.length - 1);
  });

  // wheel / trackpad: one gesture = one slide
  let wheelAcc = 0, wheelIdle;
  addEventListener("wheel", (e) => {
    e.preventDefault();
    clearTimeout(wheelIdle);
    wheelIdle = setTimeout(() => (wheelAcc = 0), 180);
    if (wheelAcc === null) return;
    wheelAcc += Math.abs(e.deltaY) > Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
    if (Math.abs(wheelAcc) > 40) {
      step(Math.sign(wheelAcc));
      wheelAcc = null; // ignore the rest of this gesture's inertia
    }
  }, { passive: false });

  // touch swipe (vertical or horizontal)
  let tx, ty;
  addEventListener("touchstart", (e) => { tx = e.touches[0].clientX; ty = e.touches[0].clientY; }, { passive: true });
  addEventListener("touchmove", (e) => e.preventDefault(), { passive: false });
  addEventListener("touchend", (e) => {
    const dx = e.changedTouches[0].clientX - tx;
    const dy = e.changedTouches[0].clientY - ty;
    const d = Math.abs(dx) > Math.abs(dy) ? -dx : -dy;
    if (Math.abs(d) > 40) step(Math.sign(d));
  });

  // buttons & click zones
  document.querySelectorAll("[data-dir]").forEach((b) => b.addEventListener("click", () => step(+b.dataset.dir)));
  document.querySelector(".edge.prev").addEventListener("click", () => step(-1));
  document.querySelector(".edge.next").addEventListener("click", () => step(1));
  document.querySelector("[data-go]").addEventListener("click", (e) => { e.preventDefault(); go(0); });

  const fromHash = () => {
    const n = parseInt(location.hash.slice(1), 10);
    return Number.isFinite(n) ? n - 1 : 0;
  };
  addEventListener("hashchange", () => go(fromHash()));
  go(fromHash());
})();
