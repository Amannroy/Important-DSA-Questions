let isValidBST = function (root) {
    return dfsIsValid(root, null, null);   
}

 function dfsIsValid(node, lower, upper){
     if(node === null) return true;

     if(lower !== null && node.val <= lower){
        return false;
     }
     if(upper !== null && node.val >= upper){
        return false;
     }
     return dfsIsValid(node.left, lower, node.val) && dfsIsValid(node.right, node.val, upper);
 }
