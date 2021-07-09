// lowest common ancestor between two nodes


class BinaryTree {
    constructor(rootVal) {
        this.root = rootVal;
        this.left = null;
        this.right = null;
    }

    addNodes(val) {

        if(val <= this.root && this.left) {
            this.left.addNodes(val);
        } else if(val < this.root) {
            this.left = new BinaryTree(val)
        }

       if(val > this.root && this.right) {
           this.right.addNodes(val);
       } else if(val > this.root) {
           this.right = new BinaryTree(val)
       }


    }

    lowestCommonAncestor(tree, node1, node2) {
        if(!tree) return;

        while(tree) {
            //console.log('tree.root', tree.root);
            if(tree.root > node1 && tree.root > node2) tree = tree.left;
            else if(tree.root < node1 && tree.root < node2) tree = tree.right;
            else return tree.root;
        }
    }

    lCARecursive(tree, node1, node2) {
        if(tree.root > node1 && tree.root > node2) this.lCARecursive(tree.left, node1, node2);
        else if(tree.root < node1 && tree.root < node2) this.lCARecursive(tree.right, node1, node2);
        else console.log(tree.root);
    }

    breathFirstTraversal(tree) {
        let queue =[tree];

        while(queue.length) {
            const item = queue.shift();
            let value = item.root;
            console.log(value);

            if(item.left !== null) {
                queue.push(item.left)
            }
            if(item.right !== null) {
                queue.push(item.right)
            }
        }
    }

    depthFirstTraversal(tree) {
        let stack = [tree];
        while(stack.length > 0) {
            const item = stack.pop();

            console.log(item.root);
            if(item.left !== null) {
                stack.push(item.left)
            }
            if(item.right !== null) {
                stack.push(item.right)
            }

        }
    }

    minDepth(tree) {
        let stack = [tree];
        let count = 0;
        while (stack.length > 0) {



            const item = stack.pop();
            if(item.root) {
                count++;
                console.log(count);
            }
            if(item.left === null && item === null) {
                stack = [];
            }

            if(item.left !== null) {
                stack.push(item.left);
            }

            if(item.right !== null) {
                stack.push(item.right);
            }
        }

        return count;
    }
}

function minDepth(root) {
    if(!root) {
        return 0;
    }
    const l = minDepth(root.left);
    const r  = minDepth(root.right);
    if(l == 0 || r  == 0) {
        return Math.max(l, r) + 1;
    }
    return Math.min(l, r) + 1;
}

const tree = new BinaryTree(6);
tree.addNodes(2);
tree.addNodes(8);
tree.addNodes(0);
tree.addNodes(4);
tree.addNodes(7);
tree.addNodes(9);
tree.addNodes(3);
tree.addNodes(5);
 //console.log(tree.left);

 //console.log(tree.lowestCommonAncestor(tree, 7, 9))
//tree.lCARecursive(tree, 3, 9)
//tree.breathFirstTraversal(tree)
//tree.depthFirstTraversal(tree)
console.log(minDepth(tree));
 //console.log(tree.lCARecursive(tree, 7, 9))
