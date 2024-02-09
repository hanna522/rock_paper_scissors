let rounds = 0;
let playerScore = 0;
let computerScore = 0;

function getComputerChoice(){
    const options = ["rock", "paper", "scissors"];
    let randomOption = options[Math.floor(Math.random() * options.length)];
    return randomOption
}

function playGame(playerChoice){
    if (rounds < 4) {
        playRound(playerChoice);
        final.textContent = "";
        rounds++;
    } else if (rounds == 4) {
        playRound(playerChoice);
        final.textContent = finalResult();
        rounds = 0;
        playerScore = 0;
        computerScore = 0;
    }
}

function finalResult() {
    if (playerScore == computerScore) {
        return "Same!";
    } else if (playerScore > computerScore) {
        return "WIN"
    } else {
        return "LOSE"
    }
}

function playRound(playerChoice){
    var computerChoice = getComputerChoice();
    var status;

    var computerImg = document.getElementById("computerImg");
    if (computerChoice == "rock") {
        computerImg.src = "./img/computer_rock.jpg";
    } else if (computerChoice == "paper") {
        computerImg.src = "./img/computer_paper.jpg";
    } else {
        computerImg.src = "./img/computer_scissors.jpg"
    }

    var playerImg = document.getElementById("playerImg");
    if (playerChoice == "rock") {
        playerImg.src = "./img/player_rock.jpg";
    } else if (playerChoice == "paper") {
        var computerImg = document.getElementById("computerImg");
        playerImg.src = "./img/player_paper.jpg";
    } else {
        playerImg.src = "./img/player_scissors.jpg"
    }

    currentRounds.textContent = "Round " + (rounds+1)

    if (playerChoice == computerChoice) {
        status = "Draw";
    } else if (playerChoice == "rock") {
        if (computerChoice == "paper") {
            status = "Lose";
            computerScore++;
        }
        if (computerChoice == "scissors") {
            status = "Won";
            playerScore++;
        }
    } else if (playerChoice == "paper") {
        if (computerChoice == "rock") {
            status = "Won";
            playerScore++;
        }
        if (computerChoice == "scissors") {
            status = "Lose";
            computerScore++;
        }
    } else if (playerChoice == "scissors") {
        if (computerChoice == "rock") {
            status = "Lose";
            computerScore++;
        }
        if (computerChoice == "paper") {
            status = "Won";
            playerScore++;
        }
    }

    currentPlayerScore.textContent = playerScore;
    currentComputerScore.textContent = computerScore;

    if (status == "Draw") {
        showResult.textContent = "It's a tie!"
    } else if (status == "Won") {
        showResult.textContent = "You won! " + playerChoice + " beats " + computerChoice + ".";
    } else {
        showResult.textContent = "You lose! " + computerChoice + " beats " + playerChoice + ".";
    }

    console.log("Player choice: " + playerChoice);
    console.log("Computer choice: " + computerChoice);
    console.log("Result: " + status);
}