const getComputerChoice = () => {
    let choices =["rock","paper","scissors"]

    let index = Math.floor(Math.random()*(3) )
    return choices[index]
}

const playRound = (playerSelection,computerSelection) => {
    playerSelection = playerSelection.toLowerCase()

    let result =""

    switch (playerSelection){

        case "rock":
            result = (computerSelection == "paper") ? "You Lose! Paper beats Rock." : (computerSelection == "scissors") ? "You Win! Rock beats Scissors." : "Its a Draw! You both chose Rock."
            break;
        case "paper":
            result =(computerSelection == "scissors") ? "You Lose! Scissors beats Paper." : (computerSelection == "rock") ? "You Win! Paper beats Rock." : "Its a Draw! You both chose Paper."
            break;
            
        case "scissors":
            result=(computerSelection == "rock") ? "You Lose! Rock beats Scissors." : (computerSelection == "paper") ? "You Win! Scissors beats Paper" : "Its a Draw! You both chose Scissors."
            break;
        default: 
            return "Hmm... I think you're trying to cheat!!! Choose a valid option please."
    }

    // return result
    updateScores(result)
}

const updateScores = (result) => {
    const playerScore = document.querySelector('.playerScoreDisplay')
    const computerScore = document.querySelector('.compScoreDisplay')
    let currentPlayerScore = parseInt(playerScore.textContent)
    let currentCompScore = parseInt(computerScore.textContent)
    let resultH1 = document.querySelector(".result")
    
    // if(currentPlayerScore == 5 || currentCompScore == 5){
    //     playerScore.innerText = 0
    //     computerScore.innerText = 0
    //     return
    // }
    if(result.includes("Win") && !(currentPlayerScore == 5 || currentCompScore == 5) ){
        playerScore.innerText = currentPlayerScore + 1
        resultH1.innerText = result
        console.log()
    }else if (result.includes("Lose") && !(currentPlayerScore == 5 || currentCompScore == 5)) {
        computerScore.innerText =currentCompScore + 1
        resultH1.innerText = result
    } else if (result.includes("Draw") && !(currentPlayerScore == 5 || currentCompScore == 5)){
        resultH1.innerText = result
    }
    else{
        resultH1.innerText = (currentPlayerScore > currentCompScore)? 'You Won the Game! Enter a choice to start a new game.' : 'You Lost! Enter a choice to start a new game.'
        playerScore.innerText =0
        computerScore.innerText =0
    }

    
}
// const game = () => {
//     let playerScore = 0
//     let computerScore = 0
//     for(let i = 1; i<=5; i++){
//         // let playerChoice = prompt("Please enter rock, paper, or scissors").toLowerCase()
//         // let playerChoice = "scissors"
//         let computerChoice = getComputerChoice()
//         let result = playRound(playerChoice,computerChoice)
//         console.log(result)
//         if(result.includes("Win")){
//             playerScore++
//         }
//         if(result.includes("Lose")){
//             computerScore++
//         }
//     }

//     if(playerScore < computerScore){
//         return console.log(`You lost this game ${playerScore} to ${computerScore}.`)
//     }
//     if(playerScore > computerScore){
//         return console.log(`You Won this game ${playerScore} to ${computerScore}.`)
//     }

//     return console.log(`This game is a Draw: ${playerScore} to ${computerScore}`)

// }

// game()

const choices = document.querySelectorAll('button')
choices.forEach(choice => {
    choice.addEventListener('click',(e)=>{
        playRound(e.target.innerText,getComputerChoice())}
    );
})