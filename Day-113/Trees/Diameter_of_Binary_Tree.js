function diameterOfBT(root){
    let diameter = 0;

    function dfs(node){
        if(node === null)  return 0;

        let left = dfs(node.left);
        let right = dfs(node.right);

        diameter = Math.max(diameter, node.left + node.right);
        return Math.max(left, right) + 1;
    }
    dfs(root);
    return diameter;
}