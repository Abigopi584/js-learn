class BST {
    constructor(root) {
       this.root = root;
       this.left = null;
       this.right = null;
    }


    addNodes(val) {
        if(val <= this.root && this.left) {
            this.left.addNodes(val)
        } else if(val <= this.root) {
            this.left = new BST(val);
        }


        if(val > this.root && this.right) {
            this.right.addNodes(val);
        } else if(val > this.root) {
            this.right = new BST(val);
        }
    }

}


var items = [50,32,26,42,12,7,65,79,59,84,77];
const tree = new BST(50);
items.forEach(function(item) {
    tree.addNodes(item);
});

function lowestCommonAncestor(tree, a, b) {
    if(tree.root > a && tree.root > b) return lowestCommonAncestor(tree.left);
    if(tree.root < a && tree.root < b) return lowestCommonAncestor(tree.right);
    return tree.root;

}


