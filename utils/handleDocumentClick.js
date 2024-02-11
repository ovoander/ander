import { toggleSidebar } from "./toggleSidebar.js";

const handleDocumentClick = (event) => {
  const sidebar = document.getElementById("sidebar");
  const isOpen = sidebar.classList.contains("open");
  const isOutsideClick =
    !event.target.closest("#header") && !event.target.closest("#sidebar");

  if (isOpen && isOutsideClick) {
    toggleSidebar();
  }
};

export { handleDocumentClick };
