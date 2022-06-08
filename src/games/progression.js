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
  const arreyWhithSpace = getArrey();
  const randomSpace = _.random(0, arreyWhithSpace.length - 1);
  arreyWhithSpace[randomSpace] = '..';
  const result = arreyWhithSpace.join(' ');
  return result;
};

const getAnswer = () => {
  const irr = getQuestion();
  const line = irr.split(' ');
  const result = line.indexOf('..');
  return result;
};

const generateRound = () => {
  const question = `${getQuestion()}`;
  const answer = String(getAnswer());
  return [question, answer];
};

const gcdGame = () => logicBrainGames(rulesOfGame, generateRound);

export default gcdGame;
