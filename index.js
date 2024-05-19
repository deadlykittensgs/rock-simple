
// Function to save a value of to localStorage
function saveToLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  
  // Function to retrieve a value from localStorage
  function getFromLocalStorage(key) {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : null;
  }

// function called to add to local storage 
let playersTotalWins = getFromLocalStorage('playersTotalWins') || 0; // Assign players money to the saved value or if no value is saved 1000
let computersTotalWins = getFromLocalStorage('computersTotalWins') || 0;
saveToLocalStorage('playersTotalWins',  playersTotalWins); // Save the updated counter to localStorage
saveToLocalStorage('computersTotalWins',computersTotalWins ); 

//declarations  

let whoWon = document.getElementById("winner")
let comCount = document.getElementById("userWins")
let userCount = document.getElementById("comWins")
const rockBtn = document.getElementById("rockBtn")
const paperBtn = document.getElementById("paperBtn")
const scissorsBtn = document.getElementById("scissorsBtn")
const rockBtnImage = document.getElementById("rockBtnImage")
const paperBtnImage = document.getElementById("paperBtnImage")
const scissorsBtnImage = document.getElementById("scissorsBtnImage")
const totalComputer = document.getElementById("totalComputer")
const totalPlayer = document.getElementById("totalPlayer")


rockBtn.addEventListener('click', () => {playGame("rock")})
paperBtn.addEventListener('click', () => {playGame("paper")})
scissorsBtn.addEventListener('click', () => {playGame("scissors")})
rockBtnImage.addEventListener('click', () => {playGame("rock")})
paperBtnImage.addEventListener('click', () => {playGame("paper")})
scissorsBtnImage.addEventListener('click', () => {playGame("scissors")})

// win counter saved in local data on sides of the page declares and displayed
totalPlayer.innerText = playersTotalWins
totalComputer.innerText = computersTotalWins

//individual hand counters
let userWins = 0
let comWins = 0











// this function is using Math.random to get a random number between 0-1 
// next we are multiplying that number by 3 which is the number of choices we have
// next we will use math.floor to round that number down to integer with no decimal point
// to use it to make the computer pick a value at random
// the +1 at the end is so that we do not have to work with the number 0




function getComputersChoice() {
  comChoice = Math.floor(Math.random() * 3) + 1
    if (comChoice == 1 ){
    return "rock"
    }
    if (comChoice == 2 ){
        return "paper"
    }
    if(comChoice ===3 ) {
        return "scissors"
    }
    else {
        console.log("comChoiceErr")
    }
}



// this function is to take the user choice and the computer choice 
// and use if statements to see who won so we can continue on with our game 
function findWinner(userChoice, comChoice) {
    if (userChoice === comChoice){
        return "tie"
    }
else if (userChoice === 'rock' && comChoice === "scissors" || userChoice === 'paper' && comChoice === "rock"|| userChoice === 'scissors' && comChoice === "paper") {
    return "user"
}
else {
    return "computer" 
}
}



// function uses the on click of selecting a choice to run the
// play game function gets the computer choice with getComputersChoice()
// and tuns that along with user choice through findWinner() to determine a winner
// next the if clauses will determine a winner and change the dynamic js
// and update the game score


function playGame(userChoice,) {
    if (comWins > 9 || userWins > 9) {
        return
    }
  
    comChoice = getComputersChoice()
    result = findWinner(userChoice, comChoice)
    console.log(comChoice)
  

    if (result === "tie") {
        whoWon.innerHTML = `It's a tie, you both picked ${userChoice}` 
        return  
    }
    if (result === "computer") {
        comWins++
        comCount.innerText = `Computer: ${comWins}`
        whoWon.innerHTML = `${comChoice} beats ${userChoice} you lose! ` 
        checkForWinner()
        return
    }
    if (result === "user"){
        userWins++
        userCount.innerText =`User: ${userWins}` 
        whoWon.innerHTML = `${userChoice} beats ${comChoice} you win!`
        checkForWinner()
        return 
    }
    
    function resetGame() {
        window.reload

    }



}

function checkForWinner() {
    if (userWins > 9) {
        playersTotalWins++
        totalPlayer.innerText = playersTotalWins
        saveToLocalStorage('playersTotalWins',  playersTotalWins)
        rockBtn.innerText = "You"
        rockBtn.style.backgroundColor ="brown"
        paperBtn.innerText = "WIN!"
        paperBtn.style.backgroundColor ="green"
        scissorsBtn.innerText ="Next Game"
        scissorsBtn.style.backgroundColor ="teal"
        scissorsBtn.addEventListener('click', () => {  location.reload();})
    }
    
    if (comWins > 9) {
        computersTotalWins++
        totalComputer.innerText = computersTotalWins
        saveToLocalStorage('computersTotalWins',computersTotalWins ); 
        rockBtn.innerText = "You"
        rockBtn.style.backgroundColor ="brown"
        paperBtn.innerText = "Lost"
        paperBtn.style.backgroundColor ="red"
        scissorsBtn.innerText ="Next Game"
        scissorsBtn.style.backgroundColor ="teal"
        scissorsBtn.addEventListener('click', () => {  location.reload();})
    }

}


function resetTotalScore() {
    computersTotalWins = 0
    playersTotalWins = 0
    saveToLocalStorage('playersTotalWins',  playersTotalWins)
    saveToLocalStorage('computersTotalWins',computersTotalWins ); 
    totalPlayer.innerText = playersTotalWins
    totalComputer.innerText = computersTotalWins
}






