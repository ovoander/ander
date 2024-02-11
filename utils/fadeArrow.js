const fadeArrow = () => {
  const scrollPosition = window.scrollY || document.documentElement.scrollTop;
  const navArrow = document.getElementById("nav-arrow");

  if (scrollPosition > 100) {
    navArrow.style.opacity = 0;
  } else {
    navArrow.style.opacity = 1;
  }
};

export { fadeArrow };
