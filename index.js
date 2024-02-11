import { fadeArrow } from "./utils/fadeArrow.js";
import { handleDocumentClick } from "./utils/handleDocumentClick.js";
import { setThemeOnLoad } from "./utils/setThemeOnLoad.js";
import { toggleSidebar } from "./utils/toggleSidebar.js";
import { toggleTheme } from "./utils/toggleTheme.js";

const themeButton = document.getElementById("theme-button");
const sidebarButton = document.getElementById("sidebar-button");

document.addEventListener("click", handleDocumentClick);
document.addEventListener("DOMContentLoaded", setThemeOnLoad);
sidebarButton.addEventListener("click", toggleSidebar);
themeButton.addEventListener("click", toggleTheme);
window.addEventListener("scroll", fadeArrow);
