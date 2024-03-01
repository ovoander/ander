const arrowIcon = document.getElementById("arrow-icon");
const sidebarButton = document.getElementById("sidebar-button");
const sidebar = document.getElementById("sidebar");

const toggleSidebar = () => {
  arrowIcon.classList.toggle("rotated");
  sidebar.classList.toggle("open");
};

sidebarButton.addEventListener("click", toggleSidebar);
