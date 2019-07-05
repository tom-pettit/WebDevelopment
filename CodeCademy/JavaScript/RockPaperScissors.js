const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput
  } else {
    console.log('Error! You did not select a valid move: rock, paper or scissors')
  }
}


const getComputerChoice = () => {
  let randomNum = Math.floor(Math.random()*3)
  if (randomNum === 0) {
    return 'rock'
  } else if (randomNum === 1) {
    return 'paper'
  } else if (randomNum === 2) {
    return 'scissors'
  }
}

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'Game is a tie!'
  } 
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'The computer won!'
    } else {
      return 'The user won!'
    }
  } else if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'The computer won!'
    } else {
      return 'The user won!'
    }
  } else if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'The computer won!'
    } else {
      return 'The user won!'
    }
  } else if (userChoice === 'bomb') {
    return 'The user won!'
  }
}

function playGame() {
  let userChoice = getUserChoice('bomb')
  console.log('User chose: '+userChoice)
  let computerChoice = getComputerChoice()
  console.log('Computer chose: '+computerChoice)
  console.log(determineWinner(userChoice, computerChoice))
}

playGame()
