=== PART 8/29 ===

// Close button
win.querySelector(".window-close").addEventListener("click", () => win.remove());
}

// Desktop icons
document.querySelectorAll(".icon").forEach(icon => {
  icon.addEventListener("dblclick", () => openApp(icon.dataset.app));
});

// Start menu apps
document.querySelectorAll("#start-menu li").forEach(item => {
  item.addEventListener("click", () => {
    openApp(item.dataset.app);
    startMenu.classList.add("hidden");
  });
});
