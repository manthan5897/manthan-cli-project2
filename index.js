var readlineSync = require('readline-sync');
var userName = readlineSync.question("Hello, please give your name. ");
var welcomeUser = "Namaste, " + userName + ". Welcome to the game: 'How well do you know about CRICKET?'"
console.log(welcomeUser);
console.log("--------------------");
var score = 0;

console.log("Type your answer in uppercase/capital letters or numbers only.")
console.log(" ")

function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer === answer) {
    console.log("Correct answer!");
    score = score + 1
  } else {
    console.log("Incorrect answer!")
  }
  console.log("Your current score is: ", score);
  console.log("----------")
}

var q1 = {
  question: "How many World Cups did Indian Cricket Team win till date? ",
  answer: "3"
}
var q2 = {
  question: "What is the name of Indian Cricket Board?  ",
  answer: "BCCI"
}
var q3 = {
  question: "Who has scored the most hundreds in the history of cricket in all formats? ",
  answer: "SACHIN TENDULKAR"
}
var q4 = {
  question: "Which country's player has the highest batting average in Test Cricket? ",
  answer: "AUSTRALIA"
}
var q5 = {
  question: "Which country has won the first world cup as a host? ",
  answer: "INDIA"
}
var q6 = {
  question: "Who has hit the fastest 50 in any format of Cricket? ",
  answer: "YUVRAJ SINGH"
}

var questions = [q1, q2, q3, q4, q5, q6]

for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}

console.log("--------------------");
console.log(" ");
console.log("Great! Your final score is: ", score);

function result() {
  if (score > 4) {
    console.log("Great! you've really good knowledge of CRICKET")
  } else {
    console.log("Nice try! But you should explore more about CRICKET.")
  }
}
result()