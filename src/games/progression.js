import startLogicGames from '../index.js';
import getRandomInt from '../utils.js';

const rulesOfGame = 'What number is missing in the progression?';

const generateProgression = () => {
  const arrey = [];
  let number = getRandomInt(0, 50);
  const interval = getRandomInt(1, 8);
  const length = getRandomInt(5, 10);
  for (let i = 0; i < length; i += 1) {
    arrey.push(number);
    number += interval;
  }
  return arrey;
};

const generateRound = () => {
  const progression = generateProgression();
  const randomSpace = getRandomInt(0, progression.length - 1);
  const rightNumber = progression[randomSpace];
  progression[randomSpace] = '..';
  const question = progression.join(' ');
  const answer = String(rightNumber);
  return [question, answer];
};

const startProgressionGame = () => startLogicGames(rulesOfGame, generateRound);

export default startProgressionGame;
