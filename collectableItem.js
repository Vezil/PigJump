class CollectableItem {
    constructor(firstRandomInt, secondRandomInt, thirdRandomInt, randomHeight) {
        this.r = 50;
        this.x = width;
        this.y = height - this.r;
        this.randomInt = firstRandomInt;
        this.secondRandomInt = secondRandomInt;
        this.thirdRandomInt = thirdRandomInt;
        this.randomHeight = randomHeight;
    }

    move() {
        this.x -= 9;

        // last level -= 50 ?
    }

    render() {
        tint(this.firstRandomInt, this.secondRandomInt, this.thirdRandomInt);

        image(
            collectableDoughnutImage,
            this.x,
            this.y - this.randomHeight,
            this.r,
            this.r
        );

        tint(255, 255); // reset
    }
}
