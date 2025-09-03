var numIslands = function(grid) {
    let count = 0;
    let rows = grid.length;
    let cols = grid[0].length;

    for(let r=0;r<rows;r++){
        for(let c=0;c<cols;c++){
            if(grid[r][c] === '1'){
                count++;
                dfs(r,c);
            }
        }
    }

    // If out of bounds or water, stop
    function dfs(r,c){
        if(r<0 || c<0 || r >= rows || c >= cols || grid[r][c] === '0'){
            return;
        }

        grid[r][c] = '0';

        dfs(r+1,c); //down
        dfs(r-1,c); //up
        dfs(r,c+1); //right
        dfs(r,c-1); //left
    }
    return count;
};