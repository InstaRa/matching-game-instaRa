function CardGame() {
    const $deck = document.querySelectorAll('.card-game');

    if ($deck.length <= 0) {
        return null;
    }

    $deck.forEach($card => {
        $card.flip = () => {
            $card.classList.toggle('-flip');
        }

        $card.hide = () => {
            $card.classList.remove('-flip');
        }

        $card.show = () => {
            $card.classList.add('-flip');
        }

        // Return a base64 string of element
        $card.fingerprint = () => {
            return btoa($card.innerHTML);
        }

        // Checks if this card has been selected
        $card.selected = false;
    });

    $deck.resetCards = () => {
        $deck.forEach($card => {
            $card.classList.remove('-flip')
            $card.selected = false;
        });
    }

    $deck.sortCards = () => {
        const $sortDeck = [];
        let count = 0;

        $deck.forEach($card => {
            $sortDeck[count] = $card;
            count++;
        });

        // Element reference to insert cards
        const $score = document.querySelector('.score-game')
        for(let i = $sortDeck.length - 1; i >= 0; i--){
            const indexPosition = Math.floor(Math.random() * i);
            const repositionElement = $sortDeck[indexPosition];
            $sortDeck.splice(indexPosition, 1)
            $score.insertAdjacentElement('afterend', repositionElement);
        }
    }

    return $deck;
}

export default CardGame;