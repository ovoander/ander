const arrowIcon = document.getElementById("arrow-icon");
const sidebar = document.getElementById("sidebar");
const sidebarButton = document.getElementById("sidebar-button");

function toggleSidebar() {
  arrowIcon.classList.toggle("open");
  sidebar.classList.toggle("open");
}

function handleDocumentClick(event) {
  const isOpen = sidebar.classList.contains("open");
  const isOutsideClick =
    !event.target.closest("#header") && !event.target.closest("#sidebar");

  if (isOpen && isOutsideClick) {
    toggleSidebar();
  }
}

document.addEventListener("click", handleDocumentClick);
sidebarButton.addEventListener("click", toggleSidebar);
