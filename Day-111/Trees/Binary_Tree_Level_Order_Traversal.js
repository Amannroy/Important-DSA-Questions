function levelOrder(root){
    if(root === null) return [];

    let ans = [];
    let queue = [root];

    while(queue.length > 0){
        let level = [];
        let levelSize = queue.length;
        
        for(let i=0;i<levelSize;i++){
            let front = queue.shift();
            level.push(front.val);

            if(front.left !== null){
                queue.push(front.left);
            }

            if(front.right !== null){
                queue.push(front.right);
            }
            
        }
        ans.push(level);
    }
    return ans;
}