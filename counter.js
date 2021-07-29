class Counter {
    constructor() {
        this.x = STAGE_WIDTH - 60;
        this.y = 30;
    }

    render(counterValue) {
        textSize(40);

        stroke(24);
        strokeWeight(0.5);
        text('YOUR POINTS: ', STAGE_WIDTH - 80, 30);

        stroke(0, 238, 144);
        strokeWeight(1);
        text(counterValue, this.x, this.y);

        textAlign(RIGHT, TOP);
    }
}
