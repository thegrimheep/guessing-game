'use strict';
//questionOne

var userName = prompt('What is your name');
alert('Welcome to my site, ' + userName);

//Question One

var yesOrNo = [
  'yes',
  'y',
  'no',
  'n'
];

function answerOne() {
  var userAnswer = prompt('Was I born in Washington?').toLowerCase();
  if (yesOrNo.indexOf(userAnswer) <= 1) {
    alert('Not true, I was born in Ohio!');
  } else if (yesOrNo.indexOf(userAnswer) >= 2) {
    alert('Correct, I was born in Ohio!');
    answerOne();
  }
}
answerOne();


var learnMore = [
  'yes',
  'y',
  'no',
  'n'
];

function answerTwo() {
  var userAnswer = prompt('Would you like to learn more about me?.').toLowerCase();
  if (learnMore.indexOf(userAnswer) <= 1) {
    alert('Great, please read on ' + userName);
  } else if (learnMore.indexOf(userAnswer) >= 2) {
    alert('That\'s cool, then please visit www.fu.com ' + userName);
    answerTwo();
  }
}
answerTwo();

//
// var answerTwo = prompt('Would you like to learn more about me?').toLowerCase();
//
// if (answerTwo === 'yes' || answerTwo === 'y') {
//   alert('Great, please read on ' + userName);
// } else if (answerTwo === 'no' || answerTwo === 'n') {
//   alert('Sucks for you, I typed it all so you better read on.');
// }
//
// var answerThree = prompt('Do you like my overused photo?').toLowerCase();
//
// if (answerThree === 'yes' || answerThree === 'y') {
//   alert('Thank you very much.  How you doing??!!');
// } else if (answerThree === 'no' || answerThree === 'n') {
//   alert('That\'s cool, I don\'t really like it either.');
// }
//
// var answerFour = prompt('Do you want to play some ping pong?').toLowerCase();
//
// if (answerFour === 'yes' || answerFour === 'y') {
//   alert('Meet me in 15 minutes near the kitchen.');
//
// } else if (answerFour === 'no' || answerFour === 'n') {
//   alert('Whatever, you would have won, I suck!');
// }

//Question Five

function answerFive() {
  var ageGuess = parseInt(prompt('Guess how old I am.'));
  var myAge = 40;
  console.log(ageGuess);
  if (ageGuess === 40) {
    alert('Wow!  How\'d you guess that!');
  } else if (ageGuess > myAge) {
    alert('Get out of here with that!  I don\'t look that old!');
    answerFive();
  } else if (ageGuess < myAge) {
    alert('Yeah, I know I look good but I\'m a little older.');
    answerFive();
  } else {
    alert('Age is a number, so enter one.');
    answerFive();
  }
}
answerFive();

//Question Six

var myCities = [
  'cleveland',
  'atlanta',
  'chattanooga',
  'augusta',
  'johnson city'
];

function answerSix() {
  var citiesResponse = prompt('Can you guess a city that I have lived in prior to Seattle, WA?').toLowerCase();
  if (myCities.indexOf(citiesResponse) > -1) {
    alert('Yes I have lived in ' + citiesResponse);
  } else {
    alert('Nope, never lived there.');
    answerSix();
  }
}
answerSix();

//Question Seven

function answerSeven() {
  var mySize = 14;
  var userResponse = parseInt(prompt('Guess my shoe size.'));
  console.log(userResponse);
  if (userResponse === mySize) {
    alert('You got it right!! Nice work!');
  } else if (userResponse > mySize) {
    alert('You are too high!');
    answerSeven();
  } else if (userResponse < mySize) {
    alert('You are too low!');
    answerSeven();
  } else {
    alert('Enter a number, dummy!');
    answerSeven();
  }
}
answerSeven();
