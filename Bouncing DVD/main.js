
// board
let blockSize = 90;
let rows = 9;
let cols = 16;
let board;
let context;

// DVD 
let dvdX = blockSize * 0;
let dvdY = blockSize * 0;
let dvdHeight = 100;
let dvdWidth = 200;

let velocityX = 3;
let velocityY = 3;
let color = 'blue';

window.addEventListener('load', e => {
    board = document.getElementById('board');
    board.height = rows * blockSize;
    board.width = cols * blockSize;
    context = board.getContext('2d'); // used for drawing on the board
    
    setInterval(update, 1000/60)
});

function update () {
    context.fillStyle='black';
    context.fillRect(0, 0, board.width, board.height);

    context.fillStyle = color;
    dvdX += velocityX;
    dvdY += velocityY;
    context.fillRect(dvdX, dvdY, dvdWidth, dvdHeight)

    changeDirection ()
}

function changeDirection () {
    if (dvdY + dvdHeight >= board.height || dvdY <= 0) {
        velocityY = -velocityY;
        color = randomColor();
    }
    if (dvdX + dvdWidth >= board.width || dvdX <= 0) {
        velocityX = -velocityX;
        color = randomColor();
    }
}

function randomColor () {
    let x = Math.floor(Math.random()*255)
    let y = Math.floor(Math.random()*255)
    let z = Math.floor(Math.random()*255)
    randomRGB = 'rgb(' + x + ', '+ y +', '+ z +')'

    return(randomRGB);
}



