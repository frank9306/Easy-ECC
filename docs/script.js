const button = document.querySelector(".copy-command");

button?.addEventListener("click", async () => {
  const label = button.querySelector(".copy-label");

  try {
    await navigator.clipboard.writeText(button.dataset.command);
    button.classList.add("copied");
    label.textContent = "已复制";
  } catch {
    label.textContent = "复制失败";
  }

  setTimeout(() => {
    button.classList.remove("copied");
    label.textContent = "复制";
  }, 1600);
});
