const background = document.querySelector(`.background`);
const spiner = document.querySelector(`.spiner-ripple`);
window.addEventListener(`load`, () => {
  background.classList.toggle(`background_hide-for-load`);
  spiner.classList.toggle(`spiner-hide`);
  setTimeout(() => {
    spiner.classList.toggle(`spiner-hide`);
    background.classList.toggle(`background_hide-for-load`);
  }, 2000);
});
