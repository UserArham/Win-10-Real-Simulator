// Toggle start menu
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

  win.innerHTML = `
    <div class="window-header">
      <span>${appName}</span>
      <div class="window-close">✕</div>
    </div>
    <div class="window-body">
      <iframe src="apps/${appName}.html" style="width:100%; height:100%; border:none;"></iframe>
    </div>
  `;
  document.body.appendChild(win);

  // Dragging
  const header = win.querySelector(".window-header");
  let offsetX, offsetY, isDown = false;

  header.addEventListener("mousedown", e => {
    isDown = true;
    offsetX = e.clientX - win.offsetLeft;
    offsetY = e.clientY - win.offsetTop;
  });

  document.addEventListener("mouseup", () => isDown = false);
  document.addEventListener("mousemove", e => {
    if (isDown) {
      win.style.left = `${e.clientX - offsetX}px`;
      win.style.top = `${e.clientY - offsetY}px`;
    }
  });

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
