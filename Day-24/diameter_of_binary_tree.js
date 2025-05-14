var diameterOfBinaryTree = function(root) {
    let diameter = 0;

    function dfs(node){
        if(node === null) return 0;
        
        // Get depth of left and right subtrees
        let left = dfs(node.left); 
        let right = dfs(node.right);

        diameter = Math.max(diameter, left + right); // Update max diameter if current path is longer
        return 1 + Math.max(left, right); // Return depth to parent
    }
    dfs(root);
    return diameter;
}

// TC = O(n)
// SC = O(h)