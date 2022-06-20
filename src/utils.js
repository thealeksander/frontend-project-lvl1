const getRandomInt = (min, max) => {
  const minInt = Math.ceil(min);
  const maxInt = Math.floor(max);
  const result = Math.floor(Math.random() * (maxInt - minInt + 1) + minInt);
  return result;
};

export default getRandomInt;
