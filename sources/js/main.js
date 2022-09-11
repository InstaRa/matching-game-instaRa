import CardGame from "./components/CardGame.js";
import ScoreGame from "./components/ScoreGame.js"

function Game() {

    // BODY GAME
    const app = document.getElementById('app');
    let firstCard = null;
    let lastCard = null;
    
    // LOADING FUNCTIONS
    app.score = ScoreGame();
    app.deck = CardGame();

    // START GAME
    app.score.changeTurn();

    app.addEventListener('click', function (event) {
        const target = event.target;

        if (target.tagName == "FIGURE" || target.tagName == "IMG" || target.tagName == "ARTICLE") {
            const card = app.getCard(target);

            if (card.selected) {
                alert('Opss... Esta carta já foi selecionada!')
                return false;
            }

            card.selected = true;
            card.flip();

            if (firstCard == null) {
                firstCard = card;
            } else {
                lastCard = card;
            }
        }

        if (firstCard && lastCard) {
            if (!app.checkCardMatch()) {                
                setTimeout(() => {                    
                    app.resetAllCards();
                    app.score.changeTurn()

                }, 2000);
            }else{

                app.score.addPoint();
                firstCard = null;
                lastCard = null;
            }
        }
    })

    app.getCard = (target) => {        
        return target.closest('.card-game')
    }

    app.checkCardMatch = () => {
        return firstCard.fingerprint() == lastCard.fingerprint();
    }

    app.resetAllCards = () => {
        const firstReset = firstCard;
        firstCard = null;

        firstReset.hide();
        firstReset.selected = false;
        
        const lastReset = lastCard;
        lastCard = null;
        
        lastReset.hide();
        lastReset.selected = false;
    }
}

// EXECUTE GAME
Game();