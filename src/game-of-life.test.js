/**
 * Conway's Game of Life
 Full details of how it should work: https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life

 Requirement Cards:
 A cell can be made "alive"
 A cell can be "killed"
 A live cell with fewer than two live neighbours dies of under-population
 A live cell with 2 or 3 live neighbours lives on to the next generation
 A live cell with more than 3 live neighbours dies of overcrowding
 A dead cell with exactly 3 live neighbours "comes to life"
 */

const life = [
    [1, 0, 1, 1],
    [1, 1, 0, 0],
    [0, 1, 1, 1],
    [0, 1, 1, 1],
];
// i = 1, j = 1

function getAliveNeighbors(horizontalIndex, verticalIndex) {
    let neighbors = [];

    if (life[horizontalIndex] && life[horizontalIndex][verticalIndex + 1]) {
        neighbors.push(life[horizontalIndex][verticalIndex + 1]);
    }
    if (life[horizontalIndex] && life[horizontalIndex][verticalIndex - 1]) {
        neighbors.push(life[horizontalIndex][verticalIndex - 1]);
    }
    if (life[horizontalIndex - 1] && life[horizontalIndex - 1][verticalIndex - 1]) {
        neighbors.push(life[horizontalIndex - 1][verticalIndex - 1]);
    }
    if (life[horizontalIndex - 1] && life[horizontalIndex - 1][verticalIndex]) {
        neighbors.push(life[horizontalIndex - 1][verticalIndex]);
    }
    if (life[horizontalIndex - 1] && life[horizontalIndex - 1][verticalIndex + 1]) {
        neighbors.push(life[horizontalIndex - 1][verticalIndex + 1]);
    }
    if (life[horizontalIndex + 1] && life[horizontalIndex + 1][verticalIndex - 1]) {
        neighbors.push(life[horizontalIndex + 1][verticalIndex - 1]);
    }
    if (life[horizontalIndex + 1] && life[horizontalIndex + 1][verticalIndex]) {
        neighbors.push(life[horizontalIndex + 1][verticalIndex]);
    }
    if (life[horizontalIndex + 1] && life[horizontalIndex + 1][verticalIndex + 1]) {
        neighbors.push(life[horizontalIndex + 1][verticalIndex + 1]);
    }

    return neighbors.length;
}

function checkIfAlive(horizontalIndex, verticalIndex) {
    const aliveNeighborsCount = getAliveNeighbors(horizontalIndex, verticalIndex);
    let currentCell = life[horizontalIndex][verticalIndex];

    if (currentCell === 1 && aliveNeighborsCount < 2) {
        currentCell = 0;
    }
    if (currentCell === 1 && (aliveNeighborsCount === 2 || aliveNeighborsCount === 3)) {
        currentCell = 1;
    }
    if (currentCell === 1 && aliveNeighborsCount > 3) {
        currentCell = 0;
    }
    if (currentCell === 0 && aliveNeighborsCount === 3) {
        currentCell = 1;
    }

    return currentCell;
}

// console.log(checkIfAlive(1, 1)); // 0
// console.log(checkIfAlive(2, 0)); // 1
// console.log(checkIfAlive(0, 2)); // 0
// console.log(checkIfAlive(0, 0)); // 1

function extendLife(iterationsNumber) {
    let newLife = JSON.parse(JSON.stringify(life));
    for (let l = 0; l < iterationsNumber; ++l) {
        for (let i = 0; i < life.length; ++i) {
            for (let j = 0; j < life[i].length; ++j) {
                newLife[i][j] = checkIfAlive(i, j);
                console.log(newLife[i][j]);
            }
        }
    }
}

extendLife(3);
