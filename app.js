'use strict'

var userName;


askName();
function askName() {
  userName = prompt('Welcome to my page superstar, what is your name?');
  console.log('The user\'s name is' + name);
  alert('Nice to have you ' + name + '. My name is Chase and today I\'m going to ask you some questions so you can have the extraordinary opportunity to get to know me better. Let\'s get started!');
}

// Function 1 //

askQuestionOne();
function askQuestionOne() {
  var answerOne = prompt('In high I played the three major sports, but went on to play one at the collegiate level, was it basketball?').toLowerCase();
  while (answerOne !== 'yes' && answerOne !== 'no' && answerOne !== 'y' && answerOne !== 'n') {
    answerOne = prompt('Sorry about that, please answer yes or no');
  }
  if (answerOne === 'no' || answerOne === 'n') {
    // console.log('Correct! I loved basketball, but while I can shoot and could dunk for a short while, I\'m a bit too slow and short for hoops. I played college baseball for one season at Wofford College before transferring to Coastal Carolina University');
    alert('Correct! I loved basketball, but while I can shoot and could dunk for a short while, I\'m a bit too slow and short for hoops. I played college baseball for one season at Wofford College before transferring to Coastal Carolina University');
  } else if (answerOne === 'yes' || answerOne === 'y') {
    // console.log('I appreciate the optimism, but I was far too slow and short for college hoops, I played college baseball for one season at Wofford College before transferring to Coastal Carolina University');
    alert('I appreciate the optimism, but I was far too slow and short for college hoops, I played college baseball for one season at Wofford College before transferring to Coastal Carolina University');
  }
}

// Function 2 //

askQuestionTwo();
function askQuestionTwo() {
  var answerTwo = prompt('As a child I never liked playing the mud, but did I learn to enjoy it as an adult?').toLowerCase();
  while (answerTwo !== 'yes' && answerTwo !== 'no' && answerTwo !== 'y' && answerTwo !== 'n') {
    answerTwo = prompt('Sorry about that, please answer yes or no');
  }
  if (answerTwo === 'yes' || answerTwo === 'y') {
    // console.log('Correct! In college I took up mud runs');
    alert('Correct! In college, after baseball I took up running and started doing Tough Mudders and other various athletic runs');
  } else if (answerTwo === 'no' || answerTwo === 'n') {
    // console.log('Despite common opinion, running through the mud is fun! I started doing mud runs in college to try to stay active');
    alert('Despite common opinion, running through the mud is fun! I started doing mud runs in college to try to stay active');
  }
}

// Function 3 //

askQuestionThree();
function askQuestionThree() {
  var answerThree = prompt('I have an amazing pitbull named Maisie that hates baths, but she loves swimming, do you think she would like balancing her big head on a kayak too?').toLowerCase();
  while (answerThree !== 'yes' && answerThree !== 'no' && answerThree !== 'y' && answerThree !== 'n') {
    answerThree = prompt('Sorry about that, please answer yes or no');
  }
  if (answerThree === 'no' || answerThree === 'n') {
    // console.log('Surprise! This lil pupper loves doing anything with dad! The kayak is ok if she\'s with me and she get\'s to ride shotgun!');
    alert('Surprise! This lil pupper loves doing anything with dad! The kayak is ok if she\'s with me and she get\'s to ride shotgun!');
  } else if (answerThree === 'yes' || answerThree === 'y') {
    // console.log('You got it! As long as she is with me and riding shotgun, she is down for any activity. I love taking her out on the lake and paddling around while she barks at ducks, swans, and anyone that doesn\'t recognize her authority!');
    alert('You got it! As long as she is with me and riding shotgun, she is down for any activity. I love taking her out on the lake and paddling around while she barks at ducks, swans, and anyone that doesn\'t recognize her authority!');
  }
}

// Function 4 //

askQuestionFour();
function askQuestionFour() {
  var answerFour = prompt('While studying Recreation & Sport Management at Coastal Carolina, do you think I interned for the minor league baseball team Myrtle Beach Pelicans for two years?').toLowerCase();
  while (answerFour !== 'yes' && answerFour !== 'no' && answerFour !== 'y' && answerFour !== 'n') {
    answerFour = prompt('Sorry about that, please answer yes or no');
  }
  if (answerFour === 'no' || answerFour === 'n') {
    // console.log('Correct! I instead chose an internship at Myrtle Beach State Park');
    alert('Correct! I grew up with baseball and was looking for a different experience. Therefore, I did a two year internship working for the Interpretitive Center of Myrtle Beach State Park where we got to develop classes to teach visitors and school field trips about animals and features of the park!');
  } else if (answerFour === 'yes' || answerFour === 'y') {
    // console.log('Surprisingly, no I did an internship at Myrtle Beach State Park');
    alert('Surprisingly, no! I grew up with baseball and was looking for a different experience. Therefore, I did a two year internship working for the Interpretitive Center of Myrtle Beach State Park where we got to develop classes to teach visitors and school field trips about animals and features of the park!');
  }
}

// Function 5 //

askQuestionFive();
function askQuestionFive() {
  var answerFive = prompt('My first college summer I got a job as a jet-ski tour guide, do you think this is the best job ever?').toLowerCase();
  while (answerFive !== 'yes' && answerFive !== 'no' && answerFive !== 'y' && answerFive !== 'n') {
    answerFive = prompt('Sorry about that, please answer yes or no');
  }
  if (answerFive === 'no' || answerFive === 'n') {
    // console.log('No?! You don\'t think riding around 12 hours a day on a jet-ski is the best thing ever?');
    alert('No?! You don\'t think riding around 12 hours a day on a jet-ski is the best thing ever? It was by far the most fun I\'ve ever had for 10 weeks!');
  } else if (answerFive === 'yes' || answerFive === 'y') {
    // console.log('Correct! Obviously best job ever');
    alert('This one is a no brainer! Riding jet-skis around all day in the warm summer sun and getting paid? Argubly the best 10 weeks of my life!');
  }
}
