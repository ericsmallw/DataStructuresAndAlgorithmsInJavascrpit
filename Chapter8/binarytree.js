function Tree(){
    var root = null;

    this.find = function(key){
        var current = root;
        while(current.iData != key){
            if(key < current.iData){
                current = current.leftChild;
            }else{
                current = current.rightChild;
            }

            if(current == null) return null;
        }

        return current;
    };

    this.insert = function(id,dd){
        var newNode = new Node();
        newNode.iData = id;
        newNode.dData = dd;

        if(root == null){
            root = newNode;
        }else{
            var current = root;
            var parent = null;
            while(true){
                parent = current;
                if(id < current.iData){
                    current = current.leftChild;
                    if(current == null){
                        parent.leftChild = newNode;
                        break;
                    }
                }else{
                    current = current.rightChild;
                    if(current == null){
                        parent.rightChild = newNode;
                        break;
                    }
                }
            }
        }
    };

    this.traverse = function(traverseType){
        switch (traverseType){
            case 1:
                console.log("Preorder Travarsal: ");
                preOrder(root);
                break;
            case 2:
                console.log("Inorder Travarsal: ");
                inOrder(root);
                break;
            case 3:
                console.log("Postorder Travarsal: ");
                postOrder(root);
                break;
        }
    };

    function preOrder(localRoot){
        if(localRoot != null){
            console.log(localRoot.iData);
            preOrder(localRoot.leftChild);
            preOrder(localRoot.rightChild);
        }
    }

    function inOrder(localRoot){
        if(localRoot != null){
            inOrder(localRoot.leftChild);
            console.log(localRoot.iData);
            inOrder(localRoot.rightChild);
        }
    }

    function postOrder(localRoot){
        if(localRoot != null){
            postOrder(localRoot.leftChild);
            postOrder(localRoot.rightChild);
            console.log(localRoot.iData);
        }
    }

    function Node(){
        this.iData = null;
        this.dData = null;
        this.leftChild = null;
        this.rightChild = null;

        this.displayNode = function(){
            console.log('{' + iData + ", " + dData + "}");
        } ;
    }
}

var tree = new Tree();

tree.insert(50, 1.5);
tree.insert(25, 1.2);
tree.insert(75, 1.7);
tree.insert(12, 1.5);
tree.insert(37, 1.2);
tree.insert(43, 1.7);
tree.insert(30, 1.5);
tree.insert(33, 1.2);
tree.insert(87, 1.7);
tree.insert(93, 1.5);
tree.insert(97, 1.5);

tree.traverse(2);
console.log(tree.find(50));
