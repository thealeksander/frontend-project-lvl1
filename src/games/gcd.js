import logicBrainGames from '../index.js';

const rulesOfGame = 'Find the greatest common divisor of given numbers.';

const gcd = (numberFirst, numberSecond) => {
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
  const numberFirst = Math.floor(Math.random() * 100);
  const numberSecond = Math.floor(Math.random() * 100);
  const question = `${numberFirst}  ${numberSecond}`;
  const answer = String(gcd(numberFirst, numberSecond));
  return [question, answer];
};

const gcdGame = () => logicBrainGames(rulesOfGame, generateRound);

export default gcdGame;
