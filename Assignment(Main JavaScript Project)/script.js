const options = [`rock`, `paper`, `scissors`];

function computerPlay() {
  const choice = options[Math.floor(Math.random() * options.length)];
  return choice;
}

function checkWinner(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return `Tie`;
  }
  else if (
    playerSelection == `rock` && computerSelection == `scissors` ||
    playerSelection == `paper` && computerSelection == `rock` ||
    playerSelection == `scissors` && computerSelection == `paper`
  ) {
    return `Player`;
  }
  else {
    return `Computer`;
  }
}

function playRound(playerSelection, computerSelection) {
  const result = checkWinner(playerSelection, computerSelection);
  if (result == `Tie`) {
    return `This is a Tie!`;
  }
  else if (result == `Player`) {
    return `You win! ${playerSelection} beats ${computerSelection}`;
  }
  else {
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  }
}

function playerChoice() {
  let verify = false;
  while (verify == false) {
    const choice = prompt(`rock paper scissors`);
    if (choice == null) {
      continue;
    }
    const choiceToLower = choice.toLowerCase();
    if (options.includes(choiceToLower)) {
      verify = true;
      return choiceToLower;
    }
  }
}

function game() {
  let scorePlayer = 0;
  let scorePc = 0;
  for (let i = 0; i < 5; i++) {
    const playerSelection = playerChoice();
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
    if (checkWinner(playerSelection, computerSelection) == `Player`) {
      scorePlayer++;
    }
    else if (checkWinner(playerSelection, computerSelection) == `Computer`) {
      scorePc++;
    }
  }
  console.log(`------`);
  if (scorePlayer > scorePc) {
    console.log(`You Won!`);
  }
  else if (scorePc > scorePlayer) {
    console.log(`You Lost!`)
  }
  else {
    console.log(`It's a Tie!`);
  }
}