const STAGE_WIDTH = 1280;
const STAGE_HEIGTH = 720;

const obstacles = [];
const passedObstacles = [];

let pig;
let pigImage;
let obstacleImage;
let backgroundImage;
let counter;
let counterValue = 0;

function preload() {
    pigImage = loadImage('./assets/PigCharacter.png');
    obstacleImage = loadImage('./assets/Obstacle.png');
    backgroundImage = loadImage('./assets/WholeCakeIsland.png');
}

function setup() {
    createCanvas(STAGE_WIDTH, STAGE_HEIGTH);

    pig = new Pig();
    counter = new Counter();

    addEventListeners();
}

function keyPressed() {
    if (key === ' ') {
        pig.jump();
    }
}

function draw() {
    if (random(1) < 0.009) {
        obstacles.push(new Obstacle());
    }

    background(backgroundImage);

    pig.render();
    counter.render(counterValue);

    pig.move();

    obstacles.forEach((obstacle, index) => {
        obstacle.render();
        obstacle.move();

        if (pig.hits(obstacle)) {
            noLoop();
        }

        const isObstaclePassed = passedObstacles.includes(obstacles[index]);

        if (obstacles[index].x < pig.x && !isObstaclePassed) {
            passedObstacles.push(obstacles[index]);
            counterValue++;
        }
    });
}

function wink() {
    const pigWithClosedEyes = document.getElementsByClassName(
        'pig-with-closed-eyes'
    )[0];

    pigWithClosedEyes.classList.add('show');

    setTimeout(() => {
        pigWithClosedEyes.classList.remove('show');
    }, 700);
}

function addEventListeners() {
    setInterval(wink, 3000);
}
