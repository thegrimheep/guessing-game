var userName = prompt('What\'s your name?');
alert('Welcome to my site ' + userName);

var answerOne = prompt('Was I born in Washington?').toLowerCase;

if (answerOne === 'no'  || answerOne === 'n') {
  alert('Correct, I was born in Ohio!')
} else if (answerOne === 'yes'  || answerOne === 'y') {
  alert('Not true, I was born in Ohio!')
} else {

}

var answerTwo = prompt('Would you like to learn more about me?').toLowerCase;

  if (answerTwo === 'yes'  || answerTwo === 'y') {
    alert('Great, please read on ' + userName);
  } else if (answerTwo === 'no'  || answerTwo === 'n'){
    alert('Sucks for you, I typed it all so you better read on.')
  }

  var answerThree = prompt('Do you like my overused photo?').toLowerCase;

    if (answerThree === 'yes'  || answerThree === 'y'){
    alert('Thank you very much.  How you doing??!!');
  } else if (answerThree === 'no'  || answerThree === 'n'){
    alert('That\'s cool, I don\'t really like it either.')
  }

  var answerFour = prompt('Do you want to play some ping pong?').toLowerCase;

  if (answerFour === 'yes'  || answerFour === 'y') {
    alert('Meet me in 15 minutes near the kitchen.');

  } else if (answerFour === 'no'  || answerFour === 'n'){
    alert('Whatever, you would have won, I suck!')
  }
