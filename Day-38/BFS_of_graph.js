// Class definition for BFS traversal
class Solution {
    // Function to return Breadth First Traversal of a graph.
    bfs(adj) {
        let V = adj.length;
        let visited = Array(V).fill(false);
        let result = [];
        let queue = [];

        queue.push(0);
        visited[0] = true;

        while (queue.length > 0) {
            let node = queue.shift();
            result.push(node);

            for (let neighbor of adj[node]) {
                if (!visited[neighbor]) {
                    queue.push(neighbor);
                    visited[neighbor] = true;
                }
            }
        }

        return result;
    }
}

// ----------- Example Input & Output -----------

// Example adjacency list (graph)
// 0 -> 1, 2, 3
// 1 -> 0
// 2 -> 0, 4
// 3 -> 0
// 4 -> 2
const adj = [
    [1, 2, 3],
    [0],
    [0, 4],
    [0],
    [2]
];

// Create instance and call bfs
const sol = new Solution();
const output = sol.bfs(adj);

// Print output
console.log("BFS Traversal Output:", output);  // Expected: [0, 1, 2, 3, 4]


// TC = O(V + E)
// SC = O(V)