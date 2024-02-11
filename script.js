const arrowIcon = document.getElementById("arrow-icon");
const moonIcon = document.getElementById("moon-icon");
const sunIcon = document.getElementById("sun-icon");
const sidebar = document.getElementById("sidebar");
const sidebarButton = document.getElementById("sidebar-button");
const themeButton = document.getElementById("theme-button");

const toggleTheme = () => {
  document.body.classList.toggle("dark");
  moonIcon.classList.toggle("hidden");
  sunIcon.classList.toggle("hidden");
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
};

const setThemeOnLoad = () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    document.body.classList.remove("dark");
    sunIcon.classList.remove("hidden");
  } else if (savedTheme === "dark") {
    moonIcon.classList.remove("hidden");
    document.body.classList.add("dark");
  } else {
    document.body.classList.add("dark");
    moonIcon.classList.remove("hidden");
  }
};

const toggleSidebar = () => {
  arrowIcon.classList.toggle("open");
  sidebar.classList.toggle("open");
};

const handleDocumentClick = (event) => {
  const isOpen = sidebar.classList.contains("open");
  const isOutsideClick =
    !event.target.closest("#header") && !event.target.closest("#sidebar");

  if (isOpen && isOutsideClick) {
    toggleSidebar();
  }
};

const fadeArrow = () => {
  const scrollPosition = window.scrollY || document.documentElement.scrollTop;
  const navArrow = document.getElementById("nav-arrow");

  if (scrollPosition > 100) {
    navArrow.style.opacity = 0;
  } else {
    navArrow.style.opacity = 1;
  }
};

document.addEventListener("DOMContentLoaded", setThemeOnLoad);
document.addEventListener("click", handleDocumentClick);
sidebarButton.addEventListener("click", toggleSidebar);
themeButton.addEventListener("click", toggleTheme);
window.addEventListener("scroll", fadeArrow);
