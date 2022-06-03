

const randomNumber1 = Math.floor(Math.random() * 100);
const randomNumber2 = Math.floor(Math.random() * 100);
const randomNumber3 = Math.floor(Math.random() * 100);
const numbers = [randomNumber1, randomNumber2, randomNumber3];

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
  for (const randomNumber of numbers) {
    console.log(`Question: ${randomNumber}`);
    const useranswer = readlineSync.question('Your answer: ');
    if (useranswer === 'no' && isEven(randomNumber) === 'yes') {
      return console.log(`'${useranswer}' is wrong answer ;(. Correct answer was ${isEven(randomNumber)}.\nLet's try again, ${name}!`);
    } if (useranswer === 'yes' && isEven(randomNumber) === 'no') {
      return console.log(`'${useranswer}' is wrong answer ;(. Correct answer was ${isEven(randomNumber)}.\nLet's try again, ${name}!`);
    } if (useranswer !== 'yes' && useranswer !== 'no') {
      return console.log(`'${useranswer}' is wrong answer ;(. Correct answer was ${isEven(randomNumber)}.\nLet's try again, ${name}!`);
    }
    console.log('Correct!');
  }
  const victory = console.log(`Congratulations, ${name}!`);
  return victory;
};

export default game;
