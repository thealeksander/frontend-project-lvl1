import readlineSync from 'readline-sync';

const username = () => {
  const name = readlineSync.question('May I have your name? ');
  const result = console.log(`Hello, ${name}!`);
  return result;
};

export default username;
