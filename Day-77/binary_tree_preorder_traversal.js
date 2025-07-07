let preorderTraversal = function(root) {
     let res = [];

     function preOrder(node){
         if(node === null) return;
         res.push(node.val);
         preOrder(node.left);
         preOrder(node.right);
     }
     preOrder(root);
     return res;
};