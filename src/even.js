import readlineSync from 'readline-sync';

export const randomNumber = Math.floor(Math.random * 100);
export const numbers = [randomNumber, randomNumber, randomNumber];

export const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);

export const answer = (text) => {
  const result = console.log(text);
  return result;
};
export const rightAnswerNo = console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`);
export const rightAnswerYes = console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${name}!`);

export const game = () => {
  /* eslint-disable-next-line */
  for (const number of numbers) {
    console.log(`Question: ${number}`);
    console.log(`Your answer: ${answer}`);
    if ((answer === 'no' || answer !== 'yes') && number % 2 === 0) {
      return rightAnswerYes;
    } if ((answer === 'yes' || answer !== 'no') && number % 2 !== 0) {
      return rightAnswerNo;
    }
    const correct = console.log('Correct!');
    return correct;
  }
  const victory = console.log(`Congratulations, ${name}!`);
  return victory;
};

console.log('Answer "yes" if the number is even, otherwise answer "no".');
game();
