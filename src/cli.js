import readlineSync from 'readline-sync';

const getUsername = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  const result = console.log(`Hello, ${name}!`);
  return result;
};

export default getUsername;
