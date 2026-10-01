function createBoardAdjacencyList() {
    const adjacencyList = [];
    for (let x = 0; x < 8; x++) {
        const col = [];
        for (let y = 0; y < 8; y++) {
            const adjacentSquares = [];
            if (x - 2 >= 0 && y - 1 >= 0) {
                adjacentSquares.push([x - 2, y - 1]);
            }
            if (x - 2 >= 0 && y + 1 < 8) {
                adjacentSquares.push([x - 2, y + 1]);
            }
            if (x - 1 >= 0 && y + 2 < 8) {
                adjacentSquares.push([x - 1, y + 2]);
            }
            if (x + 1 < 8 && y + 2 < 8) {
                adjacentSquares.push([x + 1, y + 2]);
            }
            if (x + 2 < 8 && y + 1 < 8) {
                adjacentSquares.push([x + 2, y + 1]);
            }
            if (x + 2 < 8 && y - 1 >= 0) {
                adjacentSquares.push([x + 2, y - 1]);
            }
            if (x + 1 < 8 && y - 2 >= 0) {
                adjacentSquares.push([x + 1, y - 2]);
            }
            if (x - 1 >= 0 && y - 2 >= 0) {
                adjacentSquares.push([x - 1, y - 2]);
            }
            col.push(adjacentSquares);
        }
        adjacencyList.push(col);
    }
    return adjacencyList;
}

function createdFilled2DArr(rows, columns, fillVal) {
    return Array.from({length: rows}, () => new Array(columns).fill(fillVal));
}

const adjacencyList = createBoardAdjacencyList();

function knightMoves(start, end) {
    // BFS
    const queue = [];
    const visitedList = createdFilled2DArr(8, 8, false);
    const parentList = createdFilled2DArr(8, 8, [-1, -1]);

    queue.push(start);
    const [startX, startY] = start;
    const [endX, endY] = end;
    if (   startX < 0 || startX >= 8 
        || startY < 0 || startY >= 8
        || endX   < 0 || endX   >= 8
        || endY   < 0 || endY   >= 8) {
            throw new RangeError("Starting or ending coordinates are out of range!");
        }
    visitedList[startX][startY] = true;

    while (queue.length > 0) {
        const [currX, currY] = queue.shift();

        for (const [adjX, adjY] of adjacencyList[currX][currY]) {
            if (!visitedList[adjX][adjY]) {    
                parentList[adjX][adjY] = [currX, currY];
                visitedList[adjX][adjY] = true;
                queue.push([adjX, adjY]);
            }
        }
    }

    // Construct path from start to end
    let path = [];
    let [currX, currY] = end;
    path = [end];
    while (parentList[currX][currY][0] !== -1 && parentList[currX][currY][1] !== -1) {
        path = [parentList[currX][currY], ...path];
        [currX, currY] = parentList[currX][currY];
    }

    // Output path from start to end
    const movesLength = path.length - 1;
    console.log(`You made it in ${movesLength} move(s)! Here's your path:`);
    for (const square of path) {
        console.log(square);
    }
}
