let validPath = function(n, edges, source, destination) {
    let adjMatrix = Array.from({length:n}, () => Array(n).fill(0));

    for(const [u,v] of edges){
        adjMatrix[u][v] = 1;
        adjMatrix[v][u] = 1;
    }

    let visited = new Array(n).fill(false);

    function dfs(node){
        if(node === destination){
            return true;
        }

        visited[node] = true;

        for(let i=0;i<n;i++){
            if(adjMatrix[node][i] === 1 && !visited[i]){
                if(dfs(i)) return true;
            }
        }
        return false;
    }
    return dfs(source);
};