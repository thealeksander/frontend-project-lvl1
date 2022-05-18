import readlineSync from 'readline-sync';

const randomNumber = Math.floor(Math.random * 100);
const numbers = [randomNumber, randomNumber, randomNumber];

const game = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  /* eslint-disable-next-line */
  for (const number of numbers) {
    console.log(`Question: ${number}`);
    const useranswer = readlineSync.question('Your answer: ');
    const rightAnswerNo = console.log(`'${useranswer}' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`);
    const rightAnswerYes = console.log(`'${useranswer}' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${name}!`);
    if ((useranswer === 'no' || useranswer !== 'yes') && number % 2 === 0) {
      return rightAnswerYes;
    } if ((useranswer === 'yes' || useranswer !== 'no') && number % 2 !== 0) {
      return rightAnswerNo;
    }
    const correct = console.log('Correct!');
    return correct;
  }
  const victory = console.log(`Congratulations, ${name}!`);
  return victory;
};

export default game;
