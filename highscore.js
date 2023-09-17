const userName = document.getElementById("username");
const submit = document.getElementById("submit");
const mostRecentScore = localStorage.getItem("mostRecentScore");
const finalscore = document.getElementById("finalscore");
finalscore.innerText = mostRecentScore



userName.addEventListener('keyup', () => {
  console.log(userName.value);
  submit.disabled = !username.value;
});

saveHighScore = (e) => {
 e.preventDefault()
  console.log("i clicked it");
  
}