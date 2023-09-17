const userName = document.getElementById("username");
const submit = document.getElementById("submit");
const mostRecentScore = localStorage.getItem("mostRecentScore");
const finalscore = document.getElementById("finalscore");
finalscore.innerText = mostRecentScore

const maxhighscores = 5;


const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
console.log(highScores)



userName.addEventListener('keyup', () => {
  console.log(userName.value);
  submit.disabled = !username.value;
});

saveHighScore = (e) => {
 e.preventDefault()
  
 const highScores = {
  score: mostRecentScore,
  name: userName.value
}
  
};

highScores.push(highScorescore);

highScores.sort( (a,b) => b.score - a.score);

highScores.splice(5);

localStorage.setItem("highScores", JSON.stringify(highScores));
 
window.location.assign("/")