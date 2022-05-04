import readlineSync from 'readline-sync';

const username = () => {
    let name = readlineSync.question('May I have your name? ');
    let result = console.log(`Hello, ${name}!`);
    return result;
};

export default username;