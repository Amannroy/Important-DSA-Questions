let isSubtree = function(root, subRoot) {
     if(root === null) return false;

     if(isSameTree(root, subRoot)) return true;

     return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
}

function isSameTree(p, q){
    if(p === null && q === null) return true;
    if(p === null || q === null || p.val !== q.val){
         return false;
    } 
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}