var numEnclaves = function(grid) {
    let rows = grid.length;
    let cols = grid[0].length;

    function dfs(r,c){
        if(r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] !== 1){
            return;
        }

        grid[r][c] = 0;

        dfs(r+1, c);
        dfs(r-1, c);
        dfs(r, c+1);
        dfs(r, c-1);
    }

    for(let r=0;r<rows;r++){
        for(let c=0;c<cols;c++){
            if((r === 0 || c === 0 || r === rows-1 || c === cols-1) && grid[r][c] === 1){
                dfs(r,c);
            }
        }
    }

    let count = 0;
    for(let r=0;r<rows;r++){
        for(let c=0;c<cols;c++){
            if(grid[r][c] === 1){
                count++;
            }
        }
    }
    return count;
};