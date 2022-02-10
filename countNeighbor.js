const board = [[]];

for (const [i, column] of board.entries()) {
    for (const [j, cell] of column) {
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

    function fixPosition(interval, coordinate) {
        if (currentPosition.i < 0) {
            currentPosition.i = board.length - 1;
        }

        if (currentPosition.i > board.length - 1) {
            currentPosition.i = 0;
        }
    }

    fixPosition([0, board.length], postition.i);
    fixPosition([0, board[0].length], postition.j);

    return board[neighborPosition.i][neighborPosition.j];
}
