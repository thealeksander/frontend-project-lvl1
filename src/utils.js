const getRandomInt = (min, max) => {
  const minInt = Math.ceil(min);
  const maxInt = Math.floor(max);
  const result = Math.floor(Math.random() * (maxInt - minInt) + minInt);
  return result;
};

export default getRandomInt;
