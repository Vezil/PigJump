class PigFaceMessage {
    constructor() {
        this.divClass = 'speech-bubble';

        this.greetingText = 'Good luck!';
        this.tenPointsText = 'Wow!';
        this.twentyPointsText = 'Incredible!';
        this.thirtyPointsText = 'You are insane!';
        this.gameOverText = 'Oh no! You have been defeated';

        const div = document.getElementsByClassName(this.divClass)[0];

        if (div) {
            div.remove();
        }

        this.div = createDiv(this.greetingText);
        this.div.class(this.divClass);

        setTimeout(() => {
            this.div.style('opacity', 0);
        }, 2200);
    }

    render(counterValue, isGameOver) {
        this.div.position(800, 150);

        if (counterValue === 10) {
            this.showText(this.tenPointsText, 2000, true);
        }

        if (counterValue === 20) {
            this.showText(this.twentyPointsText, 2000, true);
        }

        if (counterValue === 30) {
            this.showText(this.thirtyPointsText, 2000, true);
        }

        if (isGameOver) {
            this.showText(this.gameOverText, 4000, false);
        }
    }

    showText(text, time, withAnimation) {
        const div = document.getElementsByClassName(this.divClass)[0];
        div.textContent = text;

        this.div.style('opacity', 0.8);

        if (withAnimation) {
            this.div.style('animation-play-state', 'running');
        }

        setTimeout(() => {
            this.div.style('opacity', 0);

            if (withAnimation) {
                this.div.style('animation-play-state', 'paused');
            }
        }, time);
    }
}
