class ResetButton {
    constructor() {}

    render() {
        const resetButton = createButton('reset');

        resetButton.position(1250, 840);

        resetButton.addClass('reset-button');

        return resetButton;
    }
}
