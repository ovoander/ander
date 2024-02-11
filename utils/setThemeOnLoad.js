const setThemeOnLoad = () => {
  const moonIcon = document.getElementById("moon-icon");
  const sunIcon = document.getElementById("sun-icon");
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

export { setThemeOnLoad };
