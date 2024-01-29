let scorestr = localStorage.getItem('score');
let score;
resetScore(scorestr);
function resetScore(scorestr) {
    score = scorestr ? JSON.parse(scorestr) : {
        win: 0,
        lost: 0,
        tie: 0,
    };
    score.displayScore = function () {
        return `SCORE : Win=${score.win} ,Lost=${score.lost} ,Tie=${score.tie}`;
    }
    showResult();
}
function generateComputerChoice() {
    let randomResult = Math.random() * 3;
    if (randomResult <= 1) {
        return `Rock`;
    } else if (randomResult > 1 && randomResult <= 2) {
        return `Paper`;
    } else {
        return `Scissor`;
    }
}
function generateResult(userMove, computerMove) {
    if (userMove === 'Rock') {
        if (computerMove === `Rock`) {
            score.tie++;
            return `It's a Tie`;
        } else if (computerMove === `Paper`) {
            score.lost++;
            return `You Lost`;
        } else {
            score.win++;
            return `You Won`;
        }
    } else if (userMove === 'Paper') {
        if (computerMove === `Rock`) {
            score.win++;
            return `You Won`;
        } else if (computerMove === `Paper`) {
            score.tie++;
            return `It's a Tie`;
        } else {
            score.lost++;
            return `You Lost`;
        }
    } else {
        if (computerMove === `Rock`) {
            score.lost++;
            return `You Lost`;
        } else if (computerMove === `Paper`) {
            score.win++;
            return `You Won`;
        } else {
            score.tie++;
            return `It's a Tie`;
        }
    }
}
function showResult(userMove, computerMove, result) {
    localStorage.setItem('score', JSON.stringify(score))
    document.querySelector('#user-move').innerText=
    userMove?`You have chosen ${userMove}` : '';

    document.querySelector('#computer-move').innerText=
    computerMove?`Computer choice is ${computerMove}` : '';

    document.querySelector('#result').innerText=
    result?result : '';

    document.querySelector('#showResult').innerText=score.displayScore()
    
}      