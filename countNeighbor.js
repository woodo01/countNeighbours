const board = [[]];

for (const [i, row] of board.entries()) {
    for (const [j, cell] of column.entries()) {
        let currentPosition = {
            i,
            j
        }

        const neighbourAmount = calcNeibours(currentPosition);
    }
}

function calcNeibours(currentPosition) {
    let shifts = [-1, 0, 1];
    let neighbourCount = 0;

    for (let horizontalShift of shifts) {
        for (let verticalShift of shifts) {
            if (horizontalShift === 0 && verticalShift === 0) {
                continue;
            }

            if (getNeighbour(board, currentPosition, horizontalShift, verticalShift)) {
                neighbourCount++;
            }
        }
    }

    return neighbourCount;
}


function getNeighbour(board, currentPosition, horizontalShift, verticalShift) {
    const neighborPosition = {
        i: currentPosition.i - verticalShift,
        j: currentPosition.j - horizontalShift
    }

    function fixPosition(max, coordinate) {
        if (coordinate < 0) {
            coordinate = max;
        }

        if (coordinate > max) {
            coordinate = 0;
        }
    }

    fixPosition(board.length - 1, postition.i);
    fixPosition(board[0].length - 1, postition.j);

    return board[neighborPosition.i][neighborPosition.j];
}
