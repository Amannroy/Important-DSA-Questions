let canFinish = function(numCourses, prerequisites) {
    let adj = Array.from({length: numCourses}, () => []);
    for(let [a,b] of prerequisites){
        adj[a].push(b);
    }

     let visited = new Array(numCourses).fill(false);
        let currVisited = new Array(numCourses).fill(false);

    function dfs(s){
       visited[s] = true;
       currVisited[s] = true;

       for(let x of adj[s]){
        if(!visited[x]){
            if(dfs(x)) return true;
        }
        else if(visited[x] && currVisited[x]){
            return true;
        }
       }
      currVisited[s] = false; 
      return false;
    }
    
    for(let i=0;i<numCourses;i++){
        if(!visited[i]){
            if(dfs(i)) return false;
        }
    }
    return true;
};