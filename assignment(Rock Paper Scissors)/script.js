const userChoiceDisplay = document.createElement('h1')
const computerChoiceDisplay = document.createElement('h1')
const resultDisplay = document.createElement('h1')
const gameGrid = document.getElementById('game')
gameGrid.append(userChoiceDisplay, computerChoiceDisplay, resultDisplay)
let userPoints = document.querySelector("#userPoints");
let compPoints = document.querySelector("#compPoints");

const choices = ['rock', 'paper', 'scissors']
let userChoice
let computerChoice
let userWin = 0
let compWin = 0

const handleClick = (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = 'User choice: ' + userChoice
    generateComputerChoice()
    getResult()
}

const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)]
    computerChoice = randomChoice;
    computerChoiceDisplay.innerHTML = 'Computer choice: ' + computerChoice
}

for (let i = 0; i < choices.length; i++) {
    const button = document.createElement('button')
    button.classList.add('buttons')
    button.id = choices[i]
    button.innerHTML = choices[i]
    button.addEventListener('click', handleClick)
    gameGrid.appendChild(button)
}

const getResult = () => {
    switch (userChoice + computerChoice) {
        case 'scissorspaper':
        case 'rockscissors':
        case 'paperrock':
            userWin += 1
            resultDisplay.innerHTML = "YOU WIN!"
            break
        case 'paperscissors':
        case 'scissorsrock':
        case 'rockpaper':
            compWin += 1
            resultDisplay.innerHTML = "YOU LOSE!"
            break
        case 'paperpaper':
        case 'scissorsscissors':
        case 'rockrock':
            resultDisplay.innerHTML = "ITS A DRAW!"
            break
    }
    userPoints.innerText = userWin;
    compPoints.innerText = compWin;
}
