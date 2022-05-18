import readlineSync from 'readline-sync';

const randomNumber = Math.floor(Math.random() * 100);
const numbers = [randomNumber, randomNumber, randomNumber];

const isEven = (even) => {
  if (even % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const game = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  /* eslint-disable-next-line */
  for (const number of numbers) {
    console.log(`Question: ${number}`);
    const useranswer = readlineSync.question('Your answer: ');
    const correctAnswer = console.log(`'${useranswer}' is wrong answer ;(. Correct answer was ${isEven(number)}.\nLet's try again, ${name}!`);
    if (useranswer === 'no' && isEven(number) === 'yes') {
      return correctAnswer;
    } if (useranswer === 'yes' && isEven(number) === 'no') {
      return correctAnswer;
    }
    console.log('Correct!');
  }
  const victory = console.log(`Congratulations, ${name}!`);
  return victory;
};

export default game;
