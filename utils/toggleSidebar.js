const toggleSidebar = () => {
  const arrowIcon = document.getElementById("arrow-icon");
  const sidebar = document.getElementById("sidebar");
  arrowIcon.classList.toggle("open");
  sidebar.classList.toggle("open");
};

export { toggleSidebar };
