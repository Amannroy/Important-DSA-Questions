function isBalanced (root){
    function dfs(node){
        if(node === null) return 0;

        let leftHeight = dfs(node.left);
        if(leftHeight === -1) return -1;

        let rightHeight = dfs(node.right);
        if(rightHeight === -1) return -1;


        if(Math.abs(leftHeight - rightHeight) > 1) return -1;

        return Math.max(leftHeight, rightHeight) + 1;
    }
    return dfs(root) !== -1;
}