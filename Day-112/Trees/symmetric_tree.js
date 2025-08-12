let isSymmetric = function(root) {
    if(root === null) return  true;
    return dfs(root.left, root.right);
};

function dfs(t1, t2){

    if(t1 === null && t2 === null) return true;
    if(t1 === null || t2 === null) return false;
    if(t1.val !== t2.val) return false; 
    
    return dfs(t1.left, t2.right) && dfs(t1.right, t2.left);
}