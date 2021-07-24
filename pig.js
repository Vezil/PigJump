class Pig {
    constructor() {
        this.rx = 100;
        this.ry = 170;
        this.x = 50;
        this.y = height - this.rx;
        this.vy = 0;
        this.gravity = 2;
    }

    jump() {
        this.vy = -25;
    }

    move() {
        this.y += this.vy;
        this.vy += this.gravity;
        this.y = constrain(this.y, 0, height - this.ry);
    }

    show() {
        image(pigImage, this.x, this.y, this.rx, this.ry);
    }
}
