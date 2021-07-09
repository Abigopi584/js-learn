///search in BTS


class BTS {
    constructor(data) {
        this.root = data;
        this.left = null;
        this.right = null;
    }

    addNodes(val) {
        if(val <= this.root && this.left) {
            this.left.addNodes(val)
        } else if (val <= this.root) {
            this.left = new BTS(val)
        }

        if(val > this.root && this.right) {
            this.right.addNodes(val)
        } else if(val > this.root) {
            this.right = new BTS(val);
        }
    }
}

function search(tree,val) {
    let queue = [tree];
    let arr = [];
    while (queue.length > 0) {
        let item = queue.shift();
        let root = item !== null && item.root != null ? item.root :null;

        if(root !== null && root !== val) {
            queue.push(item.left);
            queue.push(item.right);
        } else if(root !== null && root === val){
            arr.push(root);
            arr.push(item.left !== null && item.left.root !== null ? item.left.root : null);
            arr.push(item.right !== null && item.right.root !== null ? item.right.root : null);
            queue = [];
        }
    }
    return arr;
}



const tree = new BTS(6);
tree.addNodes(2);
tree.addNodes(8);
tree.addNodes(0);
tree.addNodes(4);
tree.addNodes(7);
tree.addNodes(9);
tree.addNodes(3);
tree.addNodes(5);
console.log(search(tree, 0))
