const tiles = document.querySelectorAll(`[data-tiles]`);
const tile1 = document.querySelector(`[data-tile1]`);
const tile2 = document.querySelector(`[data-tile2]`);
const tile3 = document.querySelector(`[data-tile3]`);
const tile4 = document.querySelector(`[data-tile4]`);
const tile5 = document.querySelector(`[data-tile5]`);
const tile6 = document.querySelector(`[data-tile6]`);
const tile7 = document.querySelector(`[data-tile7]`);
const tile8 = document.querySelector(`[data-tile8]`);
const tile9 = document.querySelector(`[data-tile9]`);
const message = document.querySelector(`[data-message]`);
const newGame = document.querySelector(`[data-new-game]`);

class GAME {
    constructor(tile1, tile2, tile3, tile4, tile5, tile6, tile7, tile8, tile9) {
        this.tile1 = tile1;
        this.tile2 = tile2;
        this.tile3 = tile3;
        this.tile4 = tile4;
        this.tile5 = tile5;
        this.tile6 = tile6;
        this.tile7 = tile7;
        this.tile8 = tile8;
        this.tile9 = tile9;
        this.turn = 0;
        this.newGame();
    }

    newGame() {
        this.tile1.innerText = ``;
        this.tile2.innerText = ``;
        this.tile3.innerText = ``;
        this.tile4.innerText = ``;
        this.tile5.innerText = ``;
        this.tile6.innerText = ``;
        this.tile7.innerText = ``;
        this.tile8.innerText = ``;
        this.tile9.innerText = ``;
    }

    turnCounter(turn) {
        return turn = turn+1;
    }

    playLogic(tile, turn) {
        if(turn%2 === 0) {
            tile.innerText = `o`;
        }
        if(turn%2 === 1) {
            tile.innerText = `x`;
        }
    }
}

const game = new GAME(tile1, tile2, tile3, tile4, tile5, tile6, tile7, tile8, tile9);

newGame.addEventListener(`click`, () => {
    game.newGame();
    turn = 0;
});

let turn = 0;
tiles.forEach((tile) => {
    tile.addEventListener(`click`, () => {
        turn = game.turnCounter(turn);
        game.playLogic(tile, turn);
    });
});