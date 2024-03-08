const arrowIcon = document.getElementById("arrow-icon");
const themeButton = document.getElementById("theme-button");

const toggleTheme = () => {
  const moonIcon = document.getElementById("moon-icon");
  const sunIcon = document.getElementById("sun-icon");
  const isDark = document.body.classList.contains("dark");

  document.body.classList.toggle("dark");
  moonIcon.classList.toggle("hidden");
  sunIcon.classList.toggle("hidden");

  if (!isDark) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
};

themeButton.addEventListener("click", toggleTheme);
