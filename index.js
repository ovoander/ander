const arrowIcon = document.getElementById("arrow-icon");
const sidebar = document.getElementById("sidebar");
const sidebarButton = document.getElementById("sidebar-button");

const toggleSidebar = () => {
  const isOpen = sidebar.classList.contains("open");
  if (!isOpen) {
    arrowIcon.classList.add("open");
    sidebar.classList.add("open");
  } else {
    arrowIcon.classList.remove("open");
    sidebar.classList.remove("open");
  }
};

const handleDocumentClick = (event) => {
  if (!event.target.closest("#header") && !event.target.closest("#sidebar")) {
    const isOpen = sidebar.classList.contains("open");
    if (isOpen) {
      arrowIcon.classList.remove("open");
      sidebar.classList.remove("open");
    }
  }
};

document.addEventListener("click", handleDocumentClick);
sidebarButton.addEventListener("click", toggleSidebar);
