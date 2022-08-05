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

    return result
}


const game = () => {
    let playerScore = 0
    let computerScore = 0
    for(let i = 1; i<=5; i++){
        let playerChoice = prompt("Please enter rock, paper, or scissors").toLowerCase()
        // let playerChoice = "scissors"
        let computerChoice = getComputerChoice()
        let result = playRound(playerChoice,computerChoice)
        console.log(result)
        if(result.includes("Win")){
            playerScore++
        }
        if(result.includes("Lose")){
            computerScore++
        }
    }

    if(playerScore < computerScore){
        return console.log(`You lost this game ${playerScore} to ${computerScore}.`)
    }
    if(playerScore > computerScore){
        return console.log(`You Won this game ${playerScore} to ${computerScore}.`)
    }

    return console.log(`This game is a Draw: ${playerScore} to ${computerScore}`)

}

game()