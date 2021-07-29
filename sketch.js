const STAGE_WIDTH = 1280;
const STAGE_HEIGTH = 720;

const obstacles = [];
const passedObstacles = [];

let pig;
let pigImage;
let obstacleImage;
let backgroundImage;

let counter = 0;

function preload() {
    pigImage = loadImage('./assets/PigCharacter.png');
    obstacleImage = loadImage('./assets/Obstacle.png');
    backgroundImage = loadImage('./assets/WholeCakeIsland.png');
}

function setup() {
    createCanvas(STAGE_WIDTH, STAGE_HEIGTH);

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

    pig.render();
    pig.move();

    obstacles.forEach((obstacle, index) => {
        obstacle.render();
        obstacle.move();

        if (pig.hits(obstacle)) {
            console.log('GAME OVER ' + counter);

            noLoop();
        }

        const isObstaclePassed = passedObstacles.includes(obstacles[index]);

        if (obstacles[index].x < pig.x && !isObstaclePassed) {
            passedObstacles.push(obstacles[index]);
            counter++;
        }
    });

    textSize(40);

    stroke(24);
    strokeWeight(0.5);
    text('YOUR POINTS: ', STAGE_WIDTH - 80, 30);

    stroke(0, 238, 144);
    strokeWeight(1);
    text(counter, STAGE_WIDTH - 60, 30);

    textAlign(RIGHT, TOP);
}
