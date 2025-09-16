function networkDelayTime(times, n, k){
    let graph = {};
    for(let [u, v, w] of times){
        if(!graph[u]) graph[u] = [];
        graph[u].push([v,w]);
    }

    let dist = new Array(n+1).fill(Intifity);
    dist[k] = 0;

    let heap = [[0, k]];

    while(heap.length > 0){
        heap.sort((a,b) => a[0] - b[0]);
        let [time, node] = heap.shift();

        if(time > dist[node]) continue;

        if(graph[node]){
            for(let [next, w] of graph[node]){
                let newTime = time + w;
                if(newTime < dist[next]){
                    dist[next] = newTime;
                    heap.push([newTime, next]);
                }
            }
        }
    }
    let ans = Math.max(...dist.slice(1));
    return ans === Infinity ? -1 : ans;
}