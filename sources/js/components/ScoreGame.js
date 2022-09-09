// GAME REFERENCE
const $score = document.querySelector('.score-game');
const $playerOne = $score.querySelector('.player.-one');
const $playerTwo = $score.querySelector('.player.-two');

function ScoreGame(player) {
    const Score = {};

    Score.changeTurn = () => {
        const turn = $score.dataset.turn;
        
        if(turn == 0 || turn == 2){
            $score.dataset.turn = 1
        }else{
            $score.dataset.turn = 2
        }
    }

    return Score;
}

export default ScoreGame;