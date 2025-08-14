let zigzagLevelOrder = function(root) {
    let queue = [root];
    let ans = [];

    let leftToRight = true;

    if(!root) return ans;

    while(queue.length > 0){
        let level = [];
        let l = queue.length;

        for(let i=0;i<l;i++){
            let front = queue[0];
            queue.shift();

            level.push(front.val);

            if(front.left) queue.push(front.left);
            if(front.right) queue.push(front.right);
        }

        if(leftToRight === false){
            level.reverse();
        }
        ans.push(level);

        leftToRight = !leftToRight;
    }
    return ans;
};