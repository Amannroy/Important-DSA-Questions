let rightSideView = function(root) {
    if(root === null) return [];

   let ans = [];
   let queue = [root];

   while(queue.length > 0){
    let level = [];
    let l = queue.length;
    
    for(let i=0;i<l;i++){
        let front = queue[0];
        level.push(front.val);
        queue.shift();

        if(front.left !== null) queue.push(front.left);
        if(front.right !== null) queue.push(front.right);
    }
    ans.push(level[level.length-1]);
   }
   return ans;
};