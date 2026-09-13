const container = document.getElementById('container');


function createGrid(squaresPerSide) {
    container.innerHTML = '';
    const totalSquares = squaresPerSide * squarePerSide;
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
    const squaresPerSide = prompt('Enter the number of squares per side (max 100): ');
    
})

createGrid(16);