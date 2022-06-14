import logicBrainGames from '../index.js';
import getRandomInt from '../utils.js';

const rulesOfGame = 'Find the greatest common divisor of given numbers.';

const getgcd = (numberFirst, numberSecond) => {
  let maxGcd = 0;
  for (let i = 1; i <= numberFirst || i <= numberSecond; i += 1) {
    if (numberFirst % i === 0 && numberSecond % i === 0) {
      if (i > maxGcd) {
        maxGcd = i;
      }
    }
  }
  return maxGcd;
};

const generateRound = () => {
  const numberFirst = getRandomInt(0, 100);
  const numberSecond = getRandomInt(0, 100);
  const question = `${numberFirst} ${numberSecond}`;
  const answer = String(getgcd(numberFirst, numberSecond));
  return [question, answer];
};

const getGcdGame = () => logicBrainGames(rulesOfGame, generateRound);

export default getGcdGame;
