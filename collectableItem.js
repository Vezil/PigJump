class CollectableItem {
    constructor(firstRandomInt, secondRandomInt, thirdRandomInt, randomHeight) {
        this.r = 50;
        this.x = width;
        this.y = height - randomHeight;
        this.randomInt = firstRandomInt;
        this.secondRandomInt = secondRandomInt;
        this.thirdRandomInt = thirdRandomInt;
        this.randomHeight = randomHeight;
    }

    move() {
        this.x -= 9;
    }

    render() {
        tint(this.firstRandomInt, this.secondRandomInt, this.thirdRandomInt);

        image(collectableDoughnutImage, this.x, this.y, this.r, this.r);

        tint(255, 255); // reset
    }
}
