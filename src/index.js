const count = 10;
const colorButton = document.getElementById(`colorButton`);
const greyButton = document.getElementById(`greyButton`);
const color = document.getElementById(`color`);
const grey = document.getElementById(`grey`);
const create = function (color) {
  const fragment = new DocumentFragment();
  let colorArray;

  if (color) {
    colorArray = randomColor({
      count,
    });
  } else {
    colorArray = randomColor({
      count,
      hue: `monochrome`,
    });
  }

  for (let i = 0; i < count; i++) {
    const span = document.createElement(`span`);
    span.style.color = colorArray[i];
    span.innerText = `${i}`;
    fragment.append(span);
  }

  return fragment;
};
const handler = function (e) {
  const target = e.target.id;
  if (target === `greyButton`) {
    const res = create(false);
    grey.innerHTML = ``;
    grey.append(res);
  } else if (target === `colorButton`) {
    const res = create(true);
    color.innerHTML = ``;
    color.append(res);
  }
};

if (colorButton) {
  colorButton.addEventListener(`click`, handler);
} else if (greyButton) {
  greyButton.addEventListener(`click`, handler);
}

console.log(process.env.PHRASE);
