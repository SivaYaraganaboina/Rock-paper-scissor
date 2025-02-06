let userScore = 0;
let computerScore = 0;

const userScoreElement = document.getElementById('user-score');
const computerScoreElement = document.getElementById('comp-score');
const winnerTextElement = document.querySelector('.winnerText');
const choices = document.querySelectorAll(".ibox");

const generateComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomIdx = Math.floor(Math.random() * options.length);
    return options[randomIdx];
};

const getResult = (userChoice, compChoice) => {
    if (userChoice === compChoice) {
        return 'draw';
    } else if (
        (userChoice === 'rock' && compChoice === 'scissors') ||
        (userChoice === 'scissors' && compChoice === 'paper') ||
        (userChoice === 'paper' && compChoice === 'rock')
    ) {
        return 'win';
    } else {
        return 'lose';
    }
};

const updateScores = (result) => {
    if (result === 'win') {
        userScore++;
        userScoreElement.textContent = userScore;
        winnerTextElement.textContent = "You Win!";
    } else if (result === 'lose') {
        computerScore++;
        computerScoreElement.textContent = computerScore;
        winnerTextElement.textContent = "Computer Wins!";
    } else {
        winnerTextElement.textContent = "It's a Draw!";
    }
};

const playGame = (userChoice) => {
    const compChoice = generateComputerChoice();
    const result = getResult(userChoice, compChoice);
    updateScores(result);
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

