import { fadeArrow } from "./utils/fadeArrow.js";
import { handleDocumentClick } from "./utils/handleDocumentClick.js";
import { toggleSidebar } from "./utils/toggleSidebar.js";
import { toggleTheme } from "./utils/toggleTheme.js";

const themeButton = document.getElementById("theme-button");
const sidebarButton = document.getElementById("sidebar-button");

document.addEventListener("click", handleDocumentClick);
sidebarButton.addEventListener("click", toggleSidebar);
themeButton.addEventListener("click", toggleTheme);
window.addEventListener("scroll", fadeArrow);
