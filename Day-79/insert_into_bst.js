let insertIntoBST = function(root, val) {
    let curr = root;
    let newNode = new TreeNode(val);

    if(root === null){
        return newNode;
    }

    while(curr !== null){
        if(val < curr.val){
            //left
            if(curr.left !== null){
                curr = curr.left;
            }else{
                curr.left = newNode;
                break;
            }
        }
         else{
            //right
            if(curr.right !== null){
                curr = curr.right;
            }else{
                curr.right = newNode;
                break;
            }
         }
    }
    return root;
};