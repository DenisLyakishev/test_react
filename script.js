document .addEventListener("DOMContentLoaded", function() {
  const headerMobileButton = document.querySelector(".header__mobile-button");
  const mobileMenu = document.querySelector(".mobile-menu");
  const headerBurgerIcon = document.querySelector(".header__burger-icon");
  const headerCloseIcon = document.querySelector(".header__close-icon");
  const body = document.querySelector("body");

  const VISIBLE_CLASS = "visible";

  function openMobileMenu(){
    mobileMenu.classList.remove(VISIBLE_CLASS);
    headerBurgerIcon.classList.add(VISIBLE_CLASS);
    headerCloseIcon.classList.remove(VISIBLE_CLASS);
    body.classList.remove("hidden");
  }
  
  function closeMobileMenu(){
    mobileMenu.classList.add(VISIBLE_CLASS);
    headerBurgerIcon.classList.remove(VISIBLE_CLASS);
    headerCloseIcon.classList.add(VISIBLE_CLASS);
    body.classList.add("hidden");
  }

  headerMobileButton.addEventListener("click", function() {
    const isMoboleMenuVisible = mobileMenu.classList.contains(VISIBLE_CLASS);

    if (isMoboleMenuVisible) {
        openMobileMenu();
    } else {
        closeMobileMenu();
    }
  });
});