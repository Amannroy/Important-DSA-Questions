// Class to represent the solution
class Solution {
    // Function to detect cycle in an undirected graph
    isCycle(V, edges) {
        // Step 1: Build adjacency list
        const adj = new Array(V).fill(0).map(() => []);
        for (let [u, v] of edges) {
            adj[u].push(v);
            adj[v].push(u); // Undirected graph: add both directions
        }

        const visited = new Array(V).fill(false);

        // Step 2: DFS helper function
        function dfs(node, parent) {
            visited[node] = true;

            for (let neighbor of adj[node]) {
                if (!visited[neighbor]) {
                    if (dfs(neighbor, node)) return true;
                } else if (neighbor !== parent) {
                    // If neighbor is visited and not parent -> cycle
                    return true;
                }
            }

            return false;
        }

        // Step 3: Handle disconnected components
        for (let i = 0; i < V; i++) {
            if (!visited[i]) {
                if (dfs(i, -1)) {
                    return true; // Cycle found
                }
            }
        }

        return false; // No cycle found
    }
}

// Sample test case
const V = 5;
const edges = [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 1]  // Adding this edge creates a cycle
];

const sol = new Solution();
const result = sol.isCycle(V, edges);
console.log("Cycle Detected:", result); // Output: true

// TC = O(V + E)
// SC = O(V + E)