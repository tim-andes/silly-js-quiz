/*
This is a random quiz with Star Wars and LOTR questions.

Practicing: manipulating DOM elements, conditionals, variable assignments, incrementing, commenting.

Challenge presented by Team Treehouse.
*/

/* 
  1. Store correct answers
   - When quiz begins, no answers are correct
*/
let numCorrectAnswers = 0;

// 2. Store the rank of a player
let playerRank;

// 3. Select the <main> HTML element
selectMainElement = document.querySelector("main");

/*
  4. Ask at least 5 questions
   - Store each answer in a variable
   - Keep track of the number of correct answers
*/

// 1
const questionOnePlayerAnswer = prompt("What is Baby Yoda's real name?")
const questionOneAnswer = "Grogu";

if (questionOneAnswer.toUpperCase() === questionOnePlayerAnswer.toUpperCase()) {
  alert("That's Correct!");
  numCorrectAnswers++;
} else {
  alert(`Wrong! The correct answer is ${questionOneAnswer}!`);
}

// 2
const questionTwoPlayerAnswer = prompt("What is Bilbo's last name?")
const questionTwoAnswer = "Baggins";

if (questionTwoAnswer.toUpperCase() === questionTwoPlayerAnswer.toUpperCase()) {
  alert("That's Correct!");
  numCorrectAnswers++;
} else {
  alert(`Wrong! The correct answer is ${questionTwoAnswer}!`);
}

// 3
const questionThreePlayerAnswer = prompt("Who bit off Frodo's finger?")
const questionThreeAnswer = "Gollum";

if (questionThreeAnswer.toUpperCase() === questionThreePlayerAnswer.toUpperCase()) {
  alert("That's Correct!");
  numCorrectAnswers++;
} else {
  alert(`Wrong! The correct answer is ${questionThreeAnswer}!`);
}

// 4
const questionFourPlayerAnswer = prompt("What is the name of the white wizard in LOTR?")
const questionFourAnswer = "Gandalf";

if (questionFourAnswer.toUpperCase() === questionFourPlayerAnswer.toUpperCase()) {
  alert("That's Correct!");
  numCorrectAnswers++;
} else {
  alert(`Wrong! The correct answer is ${questionFourAnswer}!`);
}

// 5
const questionFivePlayerAnswer = prompt("Which is better? The LOTR Trilogy or The Hobbit Trilogy")
const questionFiveAnswer = "The LOTR Trilogy";

if (questionFiveAnswer.toUpperCase() === questionFivePlayerAnswer.toUpperCase()) {
  alert("That's Correct!");
  numCorrectAnswers++;
} else {
  alert(`Wrong! The correct answer is ${questionFiveAnswer}!`);
}

/*
  5. Rank player based on number of correct answers
   - 5 correct = Gold
   - 3-4 correct = Silver
   - 1-2 correct = Bronze
   - 0 correct = No crown
*/
if ( numCorrectAnswers === 5 ) {
  playerRank = "Gold";
} else if ( numCorrectAnswers === 4 || numCorrectAnswers === 3 ) {
  playerRank = "Silver";
} else if ( numCorrectAnswers === 2 || numCorrectAnswers === 1 ) {
  playerRank = "Bronze";
} else {
  playerRank = "No";
}


// 6. Output results to the <main> element
selectMainElement.innerHTML = `You got ${numCorrectAnswers} out of 5! You have earned a ${playerRank} crown!`;
