import CardGame from "./components/CardGame.js";
import ScoreGame from "./components/ScoreGame.js"

function Game() {

    // LOADING FUNCTIONS
    CardGame();
    ScoreGame();

    // BODY GAME
    const app = document.getElementById('app');
    let firstCard = null;
    let lastCard = null;

    app.addEventListener('click', function (event) {
    })

    app.getCards = (target) => {

    }
}


Game();