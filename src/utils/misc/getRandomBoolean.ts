import getRandomInt from './getRandomInt';

function getRandomBoolean() {
  return getRandomInt(0, 1) > 0;
}

export default getRandomBoolean;
