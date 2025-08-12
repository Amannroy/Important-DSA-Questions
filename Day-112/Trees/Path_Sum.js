let hasPathSum = function(root, targetSum) {
    return dfs(root, 0, targetSum);
}

    function dfs(node, sumTillParent, targetSum){
        if(node === null)  return false;

        let sumTillMe = sumTillParent + node.val;
        
        if(node.left === null && sumTillMe === targetSum && node.right === null){
            return true;
        }
    return dfs(node.left, sumTillMe, targetSum) || dfs(node.right, sumTillMe, targetSum);
};