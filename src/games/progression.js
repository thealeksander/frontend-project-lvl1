import _ from 'lodash';
import logicBrainGames from '../index.js';

const rulesOfGame = 'What number is missing in the progression?';

const getArrey = () => {
  const arrey = [];
  let number = _.random(0, 50);
  const interval = _.random(1, 8);
  const length = _.random(5, 10);
  for (let i = 0; i < length; i += 1) {
    arrey.push(number);
    number += interval;
  }
  return arrey;
};

const generateRound = () => {
  const progression = getArrey();
  const randomSpace = _.random(0, progression.length - 1);
  const rightNumber = progression[randomSpace];
  progression[randomSpace] = '..';
  const question = progression.join(' ');
  const answer = String(rightNumber);
  return [question, answer];
};

const progressionGame = () => logicBrainGames(rulesOfGame, generateRound);

export default progressionGame;
