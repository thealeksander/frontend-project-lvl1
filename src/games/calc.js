import logicBrainGames from '../index.js';
import getRandomInt from '../utils.js';

const rulesOfGame = 'What is the result of the expression?';
const listOperators = ['+', '-', '*'];

const calc = (numberFirst, numberSecond, operator) => {
  switch (operator) {
    case '+':
      return numberFirst + numberSecond;
    case '-':
      return numberFirst - numberSecond;
    case '*':
      return numberFirst * numberSecond;
    default:
      throw new Error(`Wrong operator - '${operator}', use only '+', '-', '*'!`);
  }
};

const generateRound = () => {
  const numberFirst = getRandomInt(0, 100);
  const numberSecond = getRandomInt(0, 100);
  const operator = listOperators[Math.floor(listOperators.length * Math.random())];
  const question = `${numberFirst} ${operator} ${numberSecond}`;
  const answer = String(calc(numberFirst, numberSecond, operator));
  return [question, answer];
};

const startCalcGame = () => logicBrainGames(rulesOfGame, generateRound);

export default startCalcGame;
