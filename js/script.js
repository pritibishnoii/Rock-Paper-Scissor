// function play(playerChoice) {
//     var choices = ['rock', 'paper', 'scissors'];
//     var computerChoice = choices[Math.floor(Math.random() * choices.length)];
//     console.log(computerChoice,"computer choosed")
  
//     var result;
//     if (playerChoice === computerChoice) {
//       result = "It's a tie!";
//     } else if (
//       (playerChoice === 'rock' && computerChoice === 'scissors') ||
//       (playerChoice === 'paper' && computerChoice === 'rock') ||
//       (playerChoice === 'scissors' && computerChoice === 'paper')
//     ) {
//       result = "You win!";
//     } else {
//       result = "Computer wins!";
//     }
  
//     document.getElementById('result').innerText = "Your choice: " + playerChoice + "\nComputer's choice: " + computerChoice + "\n" + result;
//   }
  

















const rulesBtn = document.getElementById('rules-btn');

const closeButton = document.getElementById('cross-circl');
const gameRules = document.getElementById('rulesBox')

const nextBtn = document.getElementById('next-btn')
rulesBtn.addEventListener('click' , ()=>{
    console.log("clicked...")
    gameRules.style.display='block'; 
})

closeButton.addEventListener('click' ,()=>{
    gameRules.style.display = 'none'
})





