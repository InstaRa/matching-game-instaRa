function CardGame()
{
    const $deck = document.querySelectorAll('.card-game');

    if($deck.length <= 0){
        return null;
    }

    $deck.forEach($card => {
        $card.addEventListener('click', function(){
            $card.classList.toggle('-flip');
        })
    });
}

export default CardGame;