let diameterOfBinaryTree = function(root) {
    let diameter = 0;

    function dfs(node){
        if(node === null) return 0;

        let left = dfs(node.left);
        let right = dfs(node.right);

        diameter = Math.max(diameter, left + right);
        return 1 + Math.max(left, right);

    }
    dfs(root);
    return diameter;
}