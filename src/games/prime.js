import _ from 'lodash';
import logicBrainGames from '../index.js';

const rulesOfGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (randomNumber) => {
  for (let i = 2; i < randomNumber; i += 1) {
    if (randomNumber % i === 0) {
      return false;
    }
  }
  return true;
};

const generateRound = () => {
  const randomNumber = _.random(1, 100);
  const question = String(randomNumber);
  const answer = isPrime(randomNumber) ? 'yes' : 'no';
  return [question, answer];
};

const primeGame = () => logicBrainGames(rulesOfGame, generateRound);

export default primeGame;
