let isValidBST = function (root) {
    return isValid(root, null, null);
}
function isValid(node, lower, upper){
    if(node === null) return true;

    if(lower !== null && node.val <= lower){
        return false;
    }
    if(upper !== null && node.val >= upper){
        return false;
    }
    return isValid(node.left, lower, node.val) && isValid(node.right, node.val, upper);
}