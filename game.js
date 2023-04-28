const gameContainer = document.getElementById('gameContainer')
const game = document.getElementById('game')
const gameLoader = document.getElementById('gameLoader')
const gameTip = document.getElementById('gameTipContainer')

function gameOpen() {
    gameContainer.style.setProperty('display','flex')
    setTimeout(() => {
        gameContainer.style.setProperty('opacity','1')
        setTimeout(() => {
            gameContainer.style.setProperty('filter','brightness(100%)')
            setTimeout(() => {
                gameLoader.style.setProperty('display','flex')
                setTimeout(() => {
                    gameLoader.style.setProperty('opacity','1')
                    setTimeout(() => {
                        gameLoader.style.setProperty('display','none')
                        gameLoader.style.setProperty('opacity','0')
                        setTimeout(() => {
                            game.style.setProperty('display','flex')
                            setTimeout(() => {
                                gameTip.style.setProperty('opacity','1')
                                setTimeout(() => {
                                    gameTip.style.setProperty('opacity','0')
                                }, 2000);
                            }, 500);
                        }, 500);
                    }, 1000);
                }, 100);
            }, 500);
        }, 500);
    }, 100);
}

document.addEventListener('keydown', (event) => {
    if(event.key === 'Escape') {
        gameClose()
    }
})

function gameClose() {
    setTimeout(() => {
        gameContainer.style.setProperty('filter','brightness(0)')
        setTimeout(() => {
            gameContainer.style.setProperty('opacity','0')
            setTimeout(() => {
                gameContainer.style.setProperty('display','none') 
                game.style.setProperty('display','none')
            }, 500);
        }, 500);
    }, 100);
}