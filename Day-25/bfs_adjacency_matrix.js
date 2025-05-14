let validPath = function(n, edges, source, destination) {
    let adjMatrix = Array.from({length:n}, () => Array(n).fill(0));

    for(const [u,v] of edges){
        adjMatrix[u][v] = 1;
        adjMatrix[v][u] = 1;
    }

    let visited = new Array(n).fill(false);

    let queue = [source];
    visited[source] = true;

    while(queue.length > 0){
        let node = queue.shift();

        if(node === destination){
            return true;
        }
        
        for(let neighbor=0;neighbor<n;neighbor++){
            if(adjMatrix[node][neighbor] === 1 && !visited[neighbor]){
                visited[neighbor] = true;
                queue.push(neighbor);
            }
        }
    }
    return false;
    
};

// TC = O(n^2)
// SC = O(n^2)