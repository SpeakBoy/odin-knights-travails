function createBoardAdjacencyList() {
    const adjacencyList = [];
    for (let y = 0; y < 8; y++) {
        const row = [];
        for (let x = 0; x < 8; x++) {
            const adjacentSquares = [];
            if (x - 2 >= 0 && y - 1 >= 0) {
                adjacentSquares.push([x - 2, y - 1]);
            }
            if (x - 2 >= 0 && y + 1 <= 7) {
                adjacentSquares.push([x - 2, y + 1]);
            }
            if (x - 1 >= 0 && y + 2 <= 7) {
                adjacentSquares.push([x - 1, y + 2]);
            }
            if (x + 1 <= 7 && y + 2 <= 7) {
                adjacentSquares.push([x + 1, y + 2]);
            }
            if (x + 2 <= 7 && y + 1 <= 7) {
                adjacentSquares.push([x + 2, y + 1]);
            }
            if (x + 2 <= 7 && y - 1 >= 0) {
                adjacentSquares.push([x + 2, y - 1]);
            }
            if (x + 1 <= 7 && y - 2 >= 0) {
                adjacentSquares.push([x + 1, y - 2]);
            }
            if (x - 1 >= 0 && y - 2 >= 0) {
                adjacentSquares.push([x - 1, y - 2]);
            }
            row.push(adjacentSquares);
        }
        adjacencyList.push(row);
    }
    return adjacencyList;
}

const adjacencyList = createBoardAdjacencyList();
console.log(adjacencyList);

function knightMoves(start, end) {

}