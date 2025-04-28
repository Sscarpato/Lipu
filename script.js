const menuToggle = document.querySelector('.menu-toggle');
const menuMobile = document.querySelector('.menu-mobile');

menuToggle.addEventListener('click', () => {
  if (menuMobile.style.maxHeight && menuMobile.style.maxHeight !== "0px") {
    menuMobile.style.maxHeight = "0px";
  } else {
    menuMobile.style.maxHeight = menuMobile.scrollHeight + "px";
  }
});
