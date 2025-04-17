function isValidSudoku(board){
   let rowSet = new Array(9);
   let colSet = new Array(9);
   let gridSet = new Array(9);

    // Create a set for each row, column, and grid
    for(let i=0;i<9;i++){
        rowSet[i] = new Set();
        colSet[i] = new Set();
        gridSet[i] = new Set();
    }

    // Iterate through each cell of the board
    for(let i=0;i<9;i++){
        for(let j=0;j<9;j++){
            let value = board[i][j];

            if(value === '.'){
                continue;
            }

            // Calculate the grid number for the current cell
            let gridNo = Math.floor(i / 3) * 3 + Math.floor(j / 3);

            let isPresentInRow = rowSet[i].has(value);
            let isPresentInCol = colSet[i].has(value);
            let isPresentInGrid = gridSet[gridNo].has(value);

            if(isPresentInRow || isPresentInCol || isPresentInGrid){
                return false;
            }

            rowSet[i].has(value);
            colSet[i].has(value);
            gridSet[gridNo].has(value);
        }
    }
    return true;

}
console.log(isValidSudoku([["5","3",".",".","7",".",".",".","."]
    ,["6",".",".","1","9","5",".",".","."]
    ,[".","9","8",".",".",".",".","6","."]
    ,["8",".",".",".","6",".",".",".","3"]
    ,["4",".",".","8",".","3",".",".","1"]
    ,["7",".",".",".","2",".",".",".","6"]
    ,[".","6",".",".",".",".","2","8","."]
    ,[".",".",".","4","1","9",".",".","5"]
    ,[".",".",".",".","8",".",".","7","9"]]
    )); // true

    // For fixed 9x9 board
    //TC = O(1)
    //SC = O(1)

    // For variable nxn board
    //TC = (n^2)
    //SC = O(n^2)
