var solve = function(board) {
    // Edge case: empty board
    if (!board || board.length === 0) return;

    let rows = board.length;
    let cols = board[0].length;

    // DFS to mark all 'O's connected to boundary
    function dfs(r, c) {
        // Stop if out of bounds OR not 'O'
        if (r < 0 || c < 0 || r >= rows || c >= cols || board[r][c] !== 'O') {
            return;
        }

        // Mark this cell as 'B' (means boundary-connected, not to be flipped)
        board[r][c] = 'B';

        // Explore 4 directions
        dfs(r + 1, c); // down
        dfs(r - 1, c); // up
        dfs(r, c + 1); // right
        dfs(r, c - 1); // left
    }

    // Step 1: Mark all boundary 'O's and their connected 'O's as safe ('B')

    // Check first and last column for each row
    for (let r = 0; r < rows; r++) {
        for (let c of [0, cols - 1]) { // left wall & right wall
            if (board[r][c] === 'O') {
                dfs(r, c);
            }
        }
    }

    // Check first and last row for each column
    for (let c = 0; c < cols; c++) {
        for (let r of [0, rows - 1]) { // top wall & bottom wall
            if (board[r][c] === 'O') {
                dfs(r, c);
            }
        }
    }

    // Step 2: Flip the board
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (board[r][c] === 'O') {
                // This 'O' is not connected to boundary → surrounded → flip to 'X'
                board[r][c] = 'X';
            } else if (board[r][c] === 'B') {
                // Restore boundary-connected safe 'O'
                board[r][c] = 'O';
            }
        }
    }
};
