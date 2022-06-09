import _ from 'lodash';
import logicBrainGames from '../index.js';

const rulesOfGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (randomNumber) => {
  let result = '';
  for (let i = 2; i < randomNumber; i += 1) {
    if (randomNumber % i === 0) {
      result = 'false';
    } else {
      result = 'true';
    }
  }
  return result;
};

const generateRound = () => {
  const randomNumber = _.random(2, 100);
  const question = String(randomNumber);
  const answer = (isPrime());
  return [question, answer];
};

const primeGame = () => logicBrainGames(rulesOfGame, generateRound);

export default primeGame;
