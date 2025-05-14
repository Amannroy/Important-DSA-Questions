let validPath = function(n, edges, source, destination) {
    let adjList = Array.from({length:n}, () => []);

    for(const [u,v] of edges){
        adjList[u].push(v);
        adjList[v].push(u);
    }

    let visited = new Array(n).fill(false);

    let queue = [source];
    visited[source] = true;

    while(queue.length > 0){
        let current = queue.shift();

        if(current === destination) return true;

        for(let neighbor of adjList[current]){
            if(!visited[neighbor]){
                visited[neighbor] = true;
                queue.push(neighbor);
            }
        }
    }
     return false;
};

// TC = O(V + 2E)
// SC = O(V + 2E)