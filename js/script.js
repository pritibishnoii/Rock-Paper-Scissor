
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





