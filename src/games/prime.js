import _ from 'lodash';
import logicBrainGames from '../index.js';

const rulesOfGame = 'What number is missing in the progression?';

const generateRound = () => {
  const randomNumber = _.random(2, 100);
  const question = String(randomNumber);
  const answer = String(randomNumber);
  return [question, answer];
};

const primeGame = () => logicBrainGames(rulesOfGame, generateRound);

export default primeGame;
