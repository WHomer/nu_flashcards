var BasicCard = require('./BasicCard.js');

// First President card
frontPresident = 'Who was the first president of the United States?';
backPresident = 'George Washington';

//create a new basic card with President.
var questionOne = new BasicCard(frontPresident, backPresident);
console.log(questionOne.front);
console.log(questionOne.back);


