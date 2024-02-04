const sidebarButton = document.getElementById("sidebar-button");

const toggleSidebar = () => {
  const arrowIcon = document.getElementById("arrow-icon");
  const sidebar = document.getElementById("sidebar");
  const isOpen = sidebar.classList.contains("open");
  if (!isOpen) {
    arrowIcon.style.rotate = "180deg";
    sidebar.classList.add("open");
  } else {
    arrowIcon.style.rotate = "0deg";
    sidebar.classList.remove("open");
  }
};

const handleDocumentClick = (event) => {
  if (!event.target.closest("#header") && !event.target.closest("#sidebar")) {
    const sidebarWidth = sidebar.offsetWidth;
    if (sidebarWidth !== 0) {
      sidebar.style.width = "0px";
    }
  }
};

document.addEventListener("click", handleDocumentClick);
sidebarButton.addEventListener("click", toggleSidebar);
