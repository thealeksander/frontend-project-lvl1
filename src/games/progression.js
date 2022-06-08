import _ from 'lodash';
import logicBrainGames from '../index.js';

const rulesOfGame = 'What number is missing in the progression?';

const getArrey = () => {
  const arrey = [];
  const number = _.random(0, 50); // if you'll get error, see here
  const interval = _.random(0, 8);
  const length = _.random(4, 10);
  for (let i = 0; i < length; i += 1) {
    arrey.push(number + interval);
  }
  return arrey;
};

const getQuestion = () => {
  const arreyWhithSpace = getArrey();
  const randomPlace = _.random(0, arreyWhithSpace.length - 1);
  let numberOfAnswer = arreyWhithSpace[randomPlace];
  numberOfAnswer = '..';
  return arreyWhithSpace;
};

const getAnswer = () => {
  
};

const generateRound = () => {
  const question = `${getQuestion()}`;
  const answer = String(gcd(number1, number2, number3, number4, number5));
  return [question, answer];
};

const gcdGame = () => logicBrainGames(rulesOfGame, generateRound);

export default gcdGame;
