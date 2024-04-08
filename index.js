

//declarations  

let whoWon = document.getElementById("winner")
let comCount = document.getElementById("userWins")
let userCount = document.getElementById("comWins")

const rockBtn = document.getElementById("rockBtn")
const paperBtn = document.getElementById("paperBtn")
const scissorsBtn = document.getElementById("scissorsBtn")

rockBtn.addEventListener('click', () => {playGame("rock")})
paperBtn.addEventListener('click', () => {playGame("paper")})
scissorsBtn.addEventListener('click', () => {playGame("scissors")})


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

    let userWins = 0
    let comWins = 0
    comChoice = getComputersChoice()
    result = findWinner(userChoice, comChoice)
    console.log(comChoice)
    poll = count(userChoice, comChoice)

    if (result === "tie") {
        
        return  whoWon.innerHTML = `It's a tie, you both picked ${userChoice}` 
    }
    if (result === "computer") {
       
        return whoWon.innerHTML = `${comChoice} beats ${userChoice} you lose! `
    }
    if (result === "user"){
       
        return whoWon.innerHTML = `${userChoice} beats ${comChoice} you win!`
    }
    
}


function count(userChoice, comChoice) {

    if (result === "user") {
        return userWins++
    }
    if (result === "computer") {
      
        return comWins++
    
    } 

}

console.log(typeof(comWins))





