let invertTree = function(root) {
    if(!root) return null;
 
     // Swap left and right children
    let temp = root.left;
    root.left = root.right;
    root.right = temp;
    
    // Recurse on the left and right subtrees
    invertTree(root.left);
    invertTree(root.right);
 
    return root;
 }

 // TC = O(n)
 // SC = O(h)