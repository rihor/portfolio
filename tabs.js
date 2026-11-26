// Tabs swap content in place. The page never scrolls; the background canvas is untouched.
(() => {
  const tabs = [...document.querySelectorAll('[role="tab"]')];
  const ids = tabs.map((t) => t.dataset.tab);

  function show(id, focus) {
    if (!ids.includes(id)) id = ids[0];
    tabs.forEach((t) => {
      const on = t.dataset.tab === id;
      t.setAttribute("aria-selected", on);
      t.tabIndex = on ? 0 : -1;
      if (on && focus) t.focus();
    });
    document.querySelectorAll(".panel").forEach((p) => p.classList.toggle("on", p.id === id));
    if (location.hash.slice(1) !== id) history.replaceState(null, "", "#" + id);
  }

  tabs.forEach((t) => t.addEventListener("click", () => show(t.dataset.tab)));

  // Arrow keys move between tabs (standard tablist pattern), from anywhere on the page.
  addEventListener("keydown", (e) => {
    const i = ids.indexOf(location.hash.slice(1));
    if (e.key === "ArrowRight") show(ids[(i + 1) % ids.length], true);
    if (e.key === "ArrowLeft") show(ids[(i - 1 + ids.length) % ids.length], true);
  });

  document.querySelector(".mark").addEventListener("click", (e) => { e.preventDefault(); show("about"); });
  addEventListener("hashchange", () => show(location.hash.slice(1)));
  show(location.hash.slice(1));
})();
