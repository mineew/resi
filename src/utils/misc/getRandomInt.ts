function getRandomInt(min: number, max: number) {
  return Math.floor(
    Math.random() * (Math.floor(max) - Math.ceil(min) + 1) + Math.ceil(min),
  );
}

export default getRandomInt;
