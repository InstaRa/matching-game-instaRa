function ScoreGame(){
    const $score = document.querySelector('.score-game');

    if($score.dataset.turn == 0){
        $score.dataset.turn = 1
    }

}

export default ScoreGame;