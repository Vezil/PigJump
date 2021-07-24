let pig;

function setup() {
    createCanvas(400, 400);

    pig = new Pig();
}

function keyPressed() {
    if (key === ' ') {
        pig.jump();
    }
}

function draw() {
    background(220);

    pig.show();
    pig.move();
}
