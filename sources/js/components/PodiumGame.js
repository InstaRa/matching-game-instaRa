function PodiumGame() {
    const $podium = document.querySelector('.podium-game');
    
    $podium.winnerName = (name) => {
        const $playerName = $podium.querySelector('.player-name');
        $playerName.textContent = name;
    }

    $podium.show = () => {
        $podium.classList.add('-show')
    }

    $podium.getRestartButton = () => {
        return $podium.querySelector('.restart-game');
    }

    return $podium;
}

export default PodiumGame;