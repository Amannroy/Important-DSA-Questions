// DFS Traversal of a Graph using Adjacency List

function dfs(adj) {
    let V = adj.length;
    let visited = Array(V).fill(false);
    let result = [];

    function dfsHelper(node) {
        visited[node] = true;
        result.push(node);

        for (let neighbor of adj[node]) {
            if (!visited[neighbor]) {
                dfsHelper(neighbor);
            }
        }
    }

    dfsHelper(0); // Start DFS from node 0
    return result;
}

// Sample Graph as Adjacency List
// 0 -> 1, 2
// 1 -> 0, 3
// 2 -> 0
// 3 -> 1

const adj = [
    [1, 2], // neighbors of node 0
    [0, 3], // neighbors of node 1
    [0],    // neighbors of node 2
    [1]     // neighbors of node 3
];

const output = dfs(adj);
console.log("DFS Traversal:", output); // DFS Traversal: [ 0, 1, 3, 2 ]

// TC = O(V + E)

// As Visited Array Initialization: O(V)
// Each node is visited once: O(V)
// Each edge is checked once: O(E)


// SC = O(V)

// As Visited array: O(V)
// Call stack in recursion (worst case): O(V)
// Result array to store traversal: O(V)



// Using class method
// class Solution {
//     dfs(adj) {
//         let V = adj.length;
//         let visited = Array(V).fill(false);
//         let result = [];

//         this.dfsHelper(0, adj, visited, result);
//         return result;
//     }

//     dfsHelper(node, adj, visited, result) {
//         visited[node] = true;
//         result.push(node);

//         for (let neighbor of adj[node]) {
//             if (!visited[neighbor]) {
//                 this.dfsHelper(neighbor, adj, visited, result);
//             }
//         }
//     }
// }
