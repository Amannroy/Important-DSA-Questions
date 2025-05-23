let orangesRotting = function(grid) {
    let rows = grid.length;
    let cols = grid[0].length;

    let queue = [];
    let fresh = 0;

    // Count fresh oranges and collect all rotten oranges
    for(let i=0;i<rows;i++){
        for(let j=0;j<cols;j++){
            if(grid[i][j] === 2){
                queue.push([i, j, 0]);
            }else if(grid[i][j] === 1){
                fresh++;
            }
        }
    }

    // No fresh oranges
    if(fresh === 0) return 0;

    // Directions: up, down, left, right
     const directions = [
        [-1, 0], // up
        [1, 0],  // down
        [0, -1], // left
        [0, 1]   // right
    ];

    let time = 0;

    // Spread rot using BFS
    while(queue.length > 0){
        const [x,y,t] = queue.shift();
        time = t;

        // Try 4 directions
        for(let [dx, dy] of directions){
            let newX = x + dx;
            let newY = y + dy;

            // Check bounds and if the orange is fresh
            if (newX >= 0 && newY >= 0 && newX < rows && newY < cols && grid[newX][newY] === 1) {
                grid[newX][newY] = 2;
                fresh--;
                queue.push([newX, newY, t+1]);
            }
        }
    }
    return fresh === 0 ? time : -1;
};



// ⏱ Time Complexity:
// O(n × m) → because we visit each cell only once.

// 💾 Space Complexity:
// O(n × m) for the queue in the worst case (all oranges are rotten).