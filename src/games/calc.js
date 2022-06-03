import readlineSync from 'readline-sync';

const signs = ['+', '-', '*'];
const randomSign = signs[Math.floor(signs.length * Math.random())];

const randomNumber1 = String.Math.floor(Math.random() * 100);
const randomNumber2 = String.Math.floor(Math.random() * 100);
const randomNumber3 = String.Math.floor(Math.random() * 100);

const expression1 = 'Math.floor(Math.random() * 100)' + randomSign + 'Math.floor(Math.random() * 100)';
const expression2 = Math.floor(Math.random() * 100) + randomSign + Math.floor(Math.random() * 100);
const expression3 = Math.floor(Math.random() * 100) + randomSign + Math.floor(Math.random() * 100);