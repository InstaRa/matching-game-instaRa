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

    return $deck;
}

export default CardGame;