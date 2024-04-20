import getRandomInt from './getRandomInt';

function getRandomHEXColor() {
  const red = getRandomInt(0, 255).toString(16).toUpperCase();
  const green = getRandomInt(0, 255).toString(16).toUpperCase();
  const blue = getRandomInt(0, 255).toString(16).toUpperCase();

  const R = red.length === 1 ? red + red : red;
  const G = green.length === 1 ? green + green : green;
  const B = blue.length === 1 ? blue + blue : blue;

  return `#${R}${G}${B}`;
}

export default getRandomHEXColor;
