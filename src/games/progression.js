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

const getQuestion = () => {
  const arreyWithSpace = getArrey();
  const randomSpace = _.random(0, arreyWithSpace.length - 1);
  arreyWithSpace[randomSpace] = '..';
  const result = arreyWithSpace.join(' ');
  return result;
};

const getAnswer = () => {
  const firstMassive = getArrey();
  const secondMassive = getQuestion();
  const line = secondMassive.split(' ');
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
