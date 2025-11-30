=== PART 6/29 ===

/* script.js */

const startBtn = document.getElementById("start-btn");
const startMenu = document.getElementById("start-menu");

startBtn.addEventListener("click", () => {
  startMenu.classList.toggle("hidden");
});

// Live clock
setInterval(() => {
  const now = new Date();
  document.getElementById("taskbar-clock").textContent =
    now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}, 1000);

// Open apps
function openApp(appName) {
  const win = document.createElement("div");
  win.className = "window";
