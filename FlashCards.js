var BasicCard = require('./BasicCard.js');
var ClozeCard = require('./ClozeCard.js');

// basic first President card
var frontPresident = 'Who was the first president of the United States?';
var backPresident = 'George Washington';

//create a new basic card with President.
var questionBasic = new BasicCard(frontPresident, backPresident);
console.log(questionBasic.front);
console.log(questionBasic.back);

//close first President card
var answer = 'George Washington';
var statement = 'George Washington was the first president of the United States';

//create a new ClozeCard with president.
var questionCloze = new ClozeCard(answer, statement);
console.log(questionCloze.front);
console.log(questionCloze.back);



