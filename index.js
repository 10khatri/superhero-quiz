var readLineSync = require("readline-sync");
var score = 0;

var prevHighScore = [
  {
    name: "naruto",
    score: 5,
  },
  {
    name: "itadori",
    score: 4,
  }
]
var que_ans = [
  {
    question: "How many Infinity Stones are there? (in figure)",
    answer: "6",
    score: 1
  },
  {
    question: "Where is Captain America from?",
    answer: "Brooklyn",
    score: 1,
  },
  {
    question: "Who was responsible for King T'Chaka's death?",
    answer: "Zemo",
    score: 1,
  },
  {
    question: "On what planet was the Soul Stone in Infinity War?",
    answer: "Vormir",
    score: 1
  },
  {
    question: "Black Panther is set in which fictional country?",
    answer: "Wakanda",
    score: 1,
  },
  {
    question: "Who is the Winter Soldier?",
    answer: "Bucky",
    score: 1,
  }

]

function hello() {
  var userName = readLineSync.question("what is your name?");
  console.log("Hello " + userName + " welcome to the game!");

}

function question(question, answer, score1) {
  var userAnswer = readLineSync.question(question);

  if (userAnswer.toLowerCase() === answer.toLowerCase()) {
    console.log("correct answer!");
    score += score1;
    console.log("yay! you earned " + score1 + " points");
    console.log("===============");
  }

  else {
    console.log("better luck next time!");
    console.log("===============");
  }

}

function fetchQuestion() {
  for (var i = 0; i <= que_ans.length - 1; i++) {
    question(que_ans[i].question, que_ans[i].answer, que_ans[i].score)
  }

  console.log("your total score is: " + score);
}

function prevScore(score) {
  for (var i = 0; i <= prevHighScore.length - 1; i++) {
    if (score > prevHighScore[i].score) {
      console.log("hey you beat " + prevHighScore[i].name + " and our new high scorer");
    }
  }
}


hello();
fetchQuestion();
prevScore(score);



