import getRandomInt from '../utils.js';
import startLogicGames from '../index.js';

const rulesOfGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const number = getRandomInt(0, 100);
  const question = `${number}`;
  const answer = isEven(number) ? 'yes' : 'no';
  return [question, answer];
};

const startGameEven = () => startLogicGames(rulesOfGame, generateRound);

export default startGameEven;
