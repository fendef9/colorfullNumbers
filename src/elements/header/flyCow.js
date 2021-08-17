const epic = document.querySelector(`.epic`);
const audio = document.getElementById(`myAudio`);
const cow = document.querySelector(`.cow`);
const header = document.querySelector(`.menu`);
const main = document.querySelector(`.main`);
const footer = document.querySelector(`.footer`);
const background = document.querySelector(`.background`);

epic.addEventListener(`click`, () => {
  audio.play();
  background.classList.toggle(`background_borders`);
  header.classList.toggle(`hide`);
  main ? main.classList.toggle(`hide`) : null;
  footer.classList.toggle(`hide`);
  cow.classList.toggle(`cow_hiden`);
  cow.classList.toggle(`cow_move`);
});

audio.addEventListener(`ended`, () => {
  background.classList.toggle(`background_borders`);
  cow.classList.toggle(`cow_move`);
  cow.classList.toggle(`cow_hiden`);
  header.classList.toggle(`hide`);
  main ? main.classList.toggle(`hide`) : null;
  footer.classList.toggle(`hide`);
});
