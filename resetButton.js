class ResetButton {
    constructor() {}

    render() {
        const resetButton = createButton('reset');

        const bgColor = color(14, 98, 81);
        const textColor = color(229, 152, 102);
        const borderRadius = '5px';
        const width = '200px';
        const padding = '1em 2em';
        const letterSpacing = '5px';
        const fontSize = '1.1rem';
        const cursor = 'pointer';

        resetButton.style('background-color', bgColor);
        resetButton.style('background-color&hover', textColor);
        resetButton.style('color', textColor);
        resetButton.style('border-radius', borderRadius);
        resetButton.style('width', width);
        resetButton.style('padding', padding);
        resetButton.style('letter-spacing', letterSpacing);
        resetButton.style('font-size', fontSize);
        resetButton.style('cursor', cursor);

        resetButton.position(1200, 870);

        resetButton.addClass('reset-button');

        return resetButton;
    }
}
