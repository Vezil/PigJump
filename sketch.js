let pig;
let pigImage;
let obstacleImage;
let backgroundImage;

function preload() {
    pigImage = loadImage('./assets/PigCharacter.png');
    obstacleImage = loadImage('./assets/Obstacle.png');
    backgroundImage = loadImage('./assets/WholeCakeIsland.png');
}

function setup() {
    createCanvas(1280, 720);

    pig = new Pig();
}

function keyPressed() {
    if (key === ' ') {
        pig.jump();
    }
}

function draw() {
    background(backgroundImage);

    pig.show();
    pig.move();
}
