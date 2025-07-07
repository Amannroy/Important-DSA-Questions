let postorderTraversal = function(root) {
    let res = [];

    function postOrder(node){
        if(node === null) return;
        postOrder(node.left);
        postOrder(node.right);
        res.push(node.val);
    }
    postOrder(root);
    return res;
};