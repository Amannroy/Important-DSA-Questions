let inorderTraversal = function(root) {
    let res = [];

    function inOrder(node){
        if(node === null) return;
          inOrder(node.left);
          res.push(node.val);
          inOrder(node.right);
    }
    inOrder(root);
    return res;
}