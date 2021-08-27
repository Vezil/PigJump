class Obstacle {
    constructor(firstRandomInt, secondRandomInt, thirdRandomInt) {
        this.r = 100;
        this.x = width;
        this.y = height - this.r;
        this.randomInt = firstRandomInt;
        this.secondRandomInt = secondRandomInt;
        this.thirdRandomInt = thirdRandomInt;
    }

    move() {
        this.x -= 9;
    }

    render() {
        tint(this.firstRandomInt, this.secondRandomInt, this.thirdRandomInt);

        image(obstacleImage, this.x, this.y, this.r, this.r);

        tint(255, 255); // reset
    }
}
