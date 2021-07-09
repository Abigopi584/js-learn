//BST



class BinarySearchTree {
    constructor(val) {
        this.root = val;
        this.left = null;
        this.right = null;
        this.maxLevel = 0;
    }

    isLeaf() {
        return this.left === null ? this.right === null : false
    }

    insert(val) {
        if(val <= this.root && this.left) {
            this.left.insert(val)
        } else if(val <= this.root) {
            this.left = new BinarySearchTree(val);
            //console.log(val);
        }

        if(val > this.root && this.right) {
            this.right.insert(val);
        } else if(val > this.root) {
            this.right = new BinarySearchTree(val)
            //console.log(val);
        }

    }

    printLeaves(tree, level) {
        if (tree == null)
            return;

        if (this.maxLevel < level) {
            console.log('this.left', tree.root.toString(), this.maxLevel, level);
            this.maxLevel = level;
        }

        if (this.maxLevel > level) {
            console.log('this.right', tree.root.toString(), this.maxLevel, level);
            this.maxLevel = level;
        }

        this.printLeaves(tree.left, level + 1);
        this.printLeaves(tree.right, level - 1);
    }


    bft(tree, cb) {
        if(!tree) {
            return;
        }

        let queue = [tree];
        while(queue.length > 0) {
            let item = queue.shift();
            let value = item.root;

            cb(value);

            if(item.left === null && item.right === null) {
                continue;
            }

            if(item.left !== null) {
                queue.push(item.left)
            }

            if(item.right !== null) {
                queue.push(item.right);
            }

        }
    }

    dft(tree, cb) {
        if(!tree) {
            return;
        }

        let stack = [tree];

        while(stack.length > 0) {
            let item = stack.pop();
            let value = item.root;

            cb(value);

            if(item.left === null && this.right === null) {
                continue;
            }

            if(item.left === null) {
                stack.unshift(item.left);
            }

            if(item.right === null) {
                stack.unshift(item.right);
            }
        }
    }


}

var items = [50,32,26,42,12,7,65,79,59,84,77];
const tree = new BinarySearchTree(50);
items.forEach(function(item) {
    tree.insert(item);
});

tree.bft(tree, console.log)
console.log('_____________________')
tree.dft(tree, console.log)
