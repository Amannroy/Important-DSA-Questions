
let isValidSudoku = function(board) {
    let rowSet = new Array(9);
    let colSet = new Array(9);
    let gridSet = new Array(9);
    
    for(let i=0;i<9;i++){
        rowSet[i] = new Set();
        colSet[i] = new Set();
        gridSet[i] = new Set();
    }

    for(let i=0;i<9;i++){
        for(let j=0;j<9;j++){
            let value = board[i][j];

            // Skip empty cells
            if(value === '.'){
                continue;
            }

            let gridNo = Math.floor(i / 3) * 3 + Math.floor(j / 3);
            let isPresentInRow = rowSet[i].has(value);
            let isPresentInCol = colSet[j].has(value);
            let isPrsentInGrid = gridSet[gridNo].has(value);

            if(isPresentInRow || isPresentInCol || isPrsentInGrid){
                return false;
            }

            rowSet[i].add(value);
            colSet[j].add(value);
            gridSet[gridNo].add(value);
        }
    }
    return true;
};

// TC = O(1)
// SC = O(1)
