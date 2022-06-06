import logicBrainGames from '../index.js';

const rulesOfGame = 'What number is missing in the progression?';

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
  const number1 = Math.floor(Math.random() * 100);
  const number2 = Math.floor(Math.random() * 100);
  const number3 = Math.floor(Math.random() * 100);
  const number4 = Math.floor(Math.random() * 100);
  const number5 = Math.floor(Math.random() * 100);
  const question = `${number1} ${number2} ${number3} ${number4} ${number5}`;
  const answer = String(gcd(number1, number2, number3, number4, number5));
  return [question, answer];
};

const gcdGame = () => logicBrainGames(rulesOfGame, generateRound);

export default gcdGame;
