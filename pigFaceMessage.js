class PigFaceMessage {
    constructor() {
        this.divClass = 'speech-bubble';

        this.greetingText = 'Good luck!';
        this.tenPointsText = 'Wow!';
        this.twentyPointsText = 'Incredible!';
        this.thirtyPointsText = 'You are insane!';

        const div = document.getElementsByClassName(this.divClass)[0];

        if (div) {
            div.remove();
        }

        this.div = createDiv(this.greetingText);
        this.div.class(this.divClass);

        setTimeout(() => {
            this.div.style('opacity', 0);
            this.div.style('animation-play-state', 'paused');
        }, 2000);
    }

    render(counterValue) {
        this.div.position(800, 150);

        if (counterValue === 10) {
            const div = document.getElementsByClassName(this.divClass)[0];
            div.textContent = this.tenPointsText;

            this.div.style('opacity', 0.8);
            this.div.style('animation-play-state', 'running');

            setTimeout(() => {
                this.div.style('opacity', 0);
                this.div.style('animation-play-state', 'paused');
            }, 2000);
        }
    }
}
