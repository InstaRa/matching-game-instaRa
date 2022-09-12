// GAME REFERENCE
const $score = document.querySelector('.score-game');
const $playerOne = $score.querySelector('.player.-one');
const $playerTwo = $score.querySelector('.player.-two');

function ScoreGame(player) {
    const Score = {};
    Score.turn = $score.dataset.turn;
    Score.totalPoints = 0;

    Score.changeTurn = () => {

        if(Score.turn != 1){
            $score.dataset.turn = 1;
            Score.turn = 1;
        }else{
            $score.dataset.turn = 2;
            Score.turn = 2;
        }
    }

    Score.addPoint = () => {
        switch(Score.turn) {
            case 1:
                $playerOne.dataset.score++;
                break;
            case 2:
                $playerTwo.dataset.score++;
                break;
        }

        Score.totalPoints++;
    }

    Score.anyWinner = () => {
        if(Score.totalPoints < 3) {
            return false;
        }

        return $playerOne.dataset.score > $playerTwo.dataset.score ? "Player1" : "Player2";
    }

    return Score;
}

export default ScoreGame;