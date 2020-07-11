let isDark = false;

document.documentElement.style.setProperty("--zmienna", "wartość");
const button = document.querySelector(".dark-mode__button--js");

hamburger.addEventListener("click", () => {
  const nav = document.querySelector(".navigation--js");
  nav.classList.toggle("navigation--open");
});
