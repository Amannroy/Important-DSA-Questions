let deleteNode = function(root, key) {
    if(root === null) return null;

    // Search for the node
    if(key < root.val){
        root.left = deleteNode(root.left, key);
    }else if(key > root.val){
        root.right = deleteNode(root.right, key);
    }else{
        // Node found

        // No Child
        if(root.left === null && root.right === null) return null;
        
        // One Child
        if(root.left === null) return root.right;
        if(root.right === null) return root.left;

        // Two Children
        let successor = findMin(root.right);

        root.val = successor.val;

        root.right = deleteNode(root.right, successor.val);
    }
    return root;
};

function findMin(node){
    while(node.left !== null){
       node = node.left;
    }
    return node;
}