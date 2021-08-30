class Pig {
    constructor() {
        this.rx = 100;
        this.ry = 170;
        this.x = 50;
        this.y = height - this.ry;
        this.vy = 0;
        this.gravity = 2;
    }

    jump() {
        if (this.y === height - this.ry) {
            this.vy = -30;
        }
    }

    hits(obstacle) {
        const pigX = this.x + this.rx * 0.5;
        const pigY = this.y + this.ry * 0.5;

        const obstacleX = obstacle.x + obstacle.r * 0.5;
        const obstacleY = obstacle.y + obstacle.r * 0.5;

        const collided = collideCircleCircle(
            pigX,
            pigY,
            this.rx,
            obstacleX,
            obstacleY,
            obstacle.r
        );

        if (collided) {
            ///
        }

        return collided;
    }

    move() {
        this.y += this.vy;
        this.vy += this.gravity;
        this.y = constrain(this.y, 0, height - this.ry);
    }

    render(isGameOver) {
        if (isGameOver) {
            tint(70, 40, 50);
        }

        image(pigImage, this.x, this.y, this.rx, this.ry);
    }
}
