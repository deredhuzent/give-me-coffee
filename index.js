const canvas = document.querySelector('canvas');
const ctx   = canvas.getContext('2d');

const images= {
    player: src='./Art/eps/references/lil-coffee.jpg',
    coin: src='./Art/eps/references/dollar.png'
};

class Board {
    constructor(board){
        this.x = 0;
        this.y = 0;
        this.width = canvas.width;
        this.height = canvas.height;
    }
}