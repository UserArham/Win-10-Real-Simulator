=== PART 7/29 ===

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
