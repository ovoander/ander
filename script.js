const theme = "theme";
const themeButton = document.getElementById("theme-button");
const menuButton = document.getElementById("menu-button");
const moonIcon = document.getElementById("moon-icon");
const sunIcon = document.getElementById("sun-icon");

themeButton.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
    if (document.documentElement.classList.contains("dark")) {
        localStorage.setItem(theme, "dark");
        moonIcon.toggleAttribute("hidden");
        sunIcon.toggleAttribute("hidden");
    } else {
        localStorage.setItem(theme, "light");
        moonIcon.toggleAttribute("hidden");
        sunIcon.toggleAttribute("hidden");
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem(theme);
    if (savedTheme === "dark") {
        document.documentElement.classList.add("dark");
        moonIcon.removeAttribute("hidden");
        sunIcon.setAttribute("hidden", true);
    } else if (savedTheme === "light") {
        sunIcon.removeAttribute("hidden");
        moonIcon.setAttribute("hidden", true);
    } else {
        document.documentElement.classList.add("dark");
        moonIcon.removeAttribute("hidden");
        sunIcon.setAttribute("hidden", true);
    }
});

menuButton.addEventListener("click", () => {
    const sidebar = document.getElementById("sidebar");
    const sidebarWidth = sidebar.offsetWidth;
    if (sidebarWidth === 0) {
        sidebar.classList.replace("w-0", "w-48");
    } else {
        sidebar.classList.replace("w-48", "w-0");
    }
});

document.addEventListener("click", (event) => {
    if (!event.target.closest("#header") && !event.target.closest("#sidebar")) {
        const sidebar = document.getElementById("sidebar");
        const sidebarWidth = sidebar.offsetWidth;
        if (sidebarWidth !== 0) {
            sidebar.classList.replace("w-48", "w-0");
        }
    }
});
