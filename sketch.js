const STAGE_WIDTH = 1280;
const STAGE_HEIGTH = 720;

const obstacles = [];
const passedObstacles = [];

let pig = null;
let pigImage = null;
let pigFaceMessage = null;
let obstacleImage = null;
let backgroundImage = null;
let counter = null;
let counterValue = 0;
let lastObstacleTime = Date.now();
let winkInterval = null;
let resetSketchListener = null;

function preload() {
    pigImage = loadImage('./assets/PigCharacter.png');
    obstacleImage = loadImage('./assets/Obstacle.png');
    backgroundImage = loadImage('./assets/WholeCakeIsland.png');
}

function setup() {
    createCanvas(STAGE_WIDTH, STAGE_HEIGTH);

    setSketch();

    const resetButton = new ResetButton();

    resetButton.render().mousePressed(setSketch);
}

function setSketch() {
    clearEventListeners();

    obstacles.splice(0, obstacles.length);
    passedObstacles.splice(0, passedObstacles.length);

    pig = null;
    counter = null;
    counterValue = 0;
    lastObstacleTime = Date.now();
    winkInterval = null;

    pig = new Pig();
    counter = new Counter();
    pigFaceMessage = new PigFaceMessage();

    loop();

    addEventListeners();
}

function keyPressed() {
    if (key === ' ') {
        pig.jump();
    }
}

function draw() {
    if (random(1) < 0.009 && Date.now() - lastObstacleTime > 1000) {
        const firstRandomInt = Math.floor(Math.random() * 255) + 1;
        const secondRandomInt = Math.floor(Math.random() * 255) + 1;
        const thirdRandomInt = Math.floor(Math.random() * 255) + 1;

        obstacles.push(
            new Obstacle(firstRandomInt, secondRandomInt, thirdRandomInt)
        );

        lastObstacleTime = Date.now();
    }

    background(backgroundImage);

    pig.render();
    counter.render(counterValue);
    pigFaceMessage.render(counterValue);

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
    winkInterval = setInterval(wink, 3000);

    resetSketchListener = event => {
        if (event.key === 'r' || event.key === 'R') {
            setSketch();
        }
    };

    document.addEventListener('keydown', resetSketchListener);
}

function clearEventListeners() {
    clearInterval(winkInterval);

    document.removeEventListener('keydown', resetSketchListener);
}
