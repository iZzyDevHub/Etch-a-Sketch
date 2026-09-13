const container = document.getElementById('container');


function createGrid(squaresPerSide) {
    container.innerHTML = '';
    const totalSquares = squaresPerSide * squaresPerSide;
    const squaresize = 960 / squaresPerSide;

    for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement('div');
        square.classList.add('square');

        square.style.width = `${squaresize}px`;
        square.style.height = `${squaresize}px`;

        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'black';
        });

        container.appendChild(square);
    }

}

const resetButton = document.querySelector('reset-button');
resetButton.addEventListener('click', () => {
    const userPrompt = prompt('Enter the number of squares per side (max 100): ');
    const squaresPerSide = parseInt(userPrompt);
    if(squaresPerSide > 0 && squaresPerSide <= 100) {
        createGrid(squaresPerSide);
    }else {
        alert('Please enter a valid number between 1 and 100.');
    }
});
