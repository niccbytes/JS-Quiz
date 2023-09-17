const userName = document.getElementById("username");
const submit = document.getElementById("submit");
const mostRecentScore = localStorage.getItem("mostRecentScore");
const finalscore = document.getElementById("finalscore");
finalscore.innerText = mostRecentScore;

const maxHighScores = 5;

const highScoresList = document.getElementById("highScoresList");

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

userName.addEventListener('keyup', () => {
  submit.disabled = !userName.value;
});

submit.addEventListener('click', saveHighScore);

function saveHighScore(e) {
  e.preventDefault();

  const newHighScore = {
    score: mostRecentScore,
    name: userName.value
  };

  highScores.push(newHighScore);
  highScores.sort((a, b) => b.score - a.score);
  highScores.splice(maxHighScores);

  localStorage.setItem("highScores", JSON.stringify(highScores));

  
  window.location.href = "index.html";
}

function displayHighScores() {
highScoresList.innerHTML = '';

  highScoresList.innerHTML = highScores.map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`;
  }).join("");
}

displayHighScores();
