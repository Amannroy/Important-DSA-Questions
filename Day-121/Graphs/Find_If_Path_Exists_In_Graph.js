var validPath = function (n, edges, source, destination) {
    let adjList = Array.from({ length: n }, () => []);
    let visited = new Set();
    let queue = [source];

    for (let [u, v] of edges) {
        adjList[u].push(v);
        adjList[v].push(u);
    }

    while (queue.length > 0) {
        let node = queue.shift();

        if (node === destination) return true;

        if (!visited.has(node)) {
            visited.add(node);

            for (let neighbor of adjList[node]) {
                if (!visited.has(neighbor)) {
                    queue.push(neighbor);
                }
            }
        }
    }
    return false;
};