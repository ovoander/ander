const sidebar = document.getElementById("sidebar");
const sidebarButton = document.getElementById("sidebar-button");
const arrowIcon = document.getElementById("arrow-icon");

const toggleSidebar = () => {
  const sidebarWidth = sidebar.offsetWidth;
  if (sidebarWidth === 0) {
    arrowIcon.style.rotate = "180deg";
    sidebar.style.width = "200px";
  } else {
    arrowIcon.style.rotate = "0deg";
    sidebar.style.width = "0px";
  }
};

sidebarButton.addEventListener("click", toggleSidebar);
