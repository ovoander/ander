const sidebar = document.getElementById("sidebar");
const sidebarButton = document.getElementById("sidebar-button");
const themeButton = document.getElementById("theme-button");

const handleDocumentClick = (event) => {
  const isOpen = sidebar.classList.contains("open");
  const isOutsideClick =
    !event.target.closest("#header") && !event.target.closest("#sidebar");

  if (isOpen && isOutsideClick) {
    toggleSidebar();
  }
};

const toggleTheme = () => {
  const moonIcon = document.getElementById("moon-icon");
  const sunIcon = document.getElementById("sun-icon");

  document.body.classList.toggle("dark");
  moonIcon.classList.toggle("hidden");
  sunIcon.classList.toggle("hidden");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
};

const toggleSidebar = () => {
  const arrowIcon = document.getElementById("arrow-icon");

  sidebar.classList.toggle("open");
  arrowIcon.classList.toggle("rotated");
};

document.addEventListener("click", handleDocumentClick);
sidebarButton.addEventListener("click", toggleSidebar);
themeButton.addEventListener("click", toggleTheme);
