import _ from 'lodash';
import logicBrainGames from '../index.js';

const rulesOfGame = 'What number is missing in the progression?';

const getArrey = () => {
  const arrey = [];
  let number = _.random(0, 50); // if you'll get error, see here!
  const interval = _.random(1, 8);
  const length = _.random(5, 10);
  for (let i = 0; i < length; i += 1) {
    arrey.push(number);
    number += interval;
  }
  return arrey;
};

const firstMassive = getArrey();

const getQuestion = () => {
  const randomSpace = _.random(0, firstMassive.length - 1);
  firstMassive[randomSpace] = '..';
  const result = firstMassive.join(' ');
  return result;
};

const getAnswer = () => {
  const irr = getQuestion();
  const line = irr.split(' ');
  const index = line.indexOf('..');
  const result = firstMassive[index];
  return result;
};

const generateRound = () => {
  const question = `${getQuestion()}`;
  const answer = String(getAnswer());
  return [question, answer];
};

const progressionGame = () => logicBrainGames(rulesOfGame, generateRound);

export default progressionGame;
