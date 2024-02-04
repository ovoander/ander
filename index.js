const sidebar = document.getElementById("sidebar");
const sidebarButton = document.getElementById("sidebar-button");
const arrowIcon = document.getElementById("arrow-icon");

// const toggleSidebar = () => {
//   const sidebarWidth = sidebar.offsetWidth;
//   if (sidebarWidth === 0) {
//     arrowIcon.style.rotate = "180deg";
//     sidebar.style.width = "200px";
//   } else {
//     arrowIcon.style.rotate = "0deg";
//     sidebar.style.width = "0px";
//   }
// };

const toggleSidebar = () => {
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
