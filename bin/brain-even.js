import readlineSync from 'readline-sync';
import game from '../src/game.js';

const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');
game();
