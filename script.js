const container = document.getElementById('container');


function createGrid(squaresPerSide) {
    container.innerHTML = '';
    const totalSquares = squaresPerSide * squarePerSide;
    const squaresize = 960 / squaresPerSide;

    for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
}