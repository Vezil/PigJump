let pig;
let pigImage;
let obstacleImage;
let backgroundImage;
let obstacles = [];

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
    if (random(1) < 0.005) {
        obstacles.push(new Obstacle());
    }

    background(backgroundImage);

    pig.show();
    pig.move();

    obstacles.forEach(obstacle => {
        obstacle.show();
        obstacle.move();

        if (pig.hits(obstacle)) {
            console.log('GAME OVER');

            noLoop();
        }
    });
}
