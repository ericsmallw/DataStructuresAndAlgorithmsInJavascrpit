/**
 * Created by esmallwood on 8/21/2015.
 */
var TwoThreeFourTree = function(){
    var root = null;

    var Node = function(){
        this.childArray = [];
        this.itemArray = [];
    };

    this.display = function(){
        console.log(root.itemArray);
        console.log(root.childArray);
        console.log(root.childArray[0].childArray);
        console.log(root.childArray[1].childArray);
    };

    this.insertNode = function(val){
        if(root == null){
            root = new Node();
            root.itemArray[0] = val;
        }else{
            findLeafForInsertion(root, val);
        }
    };

    this.find = function(val){

    };

    function findLeafForInsertion(node, value){
        //check to see if the node is a leaf or not
        if(node.childArray.length === 0){
            //check if leaf is full, if so split otherwise insert
            if(node.itemArray.length < 3){
                insertIntoLeaf(node, value);
            }else{
                //must be root node because we look forward from parents to detect full children
                return findLeafForInsertion(splitNode(null, node), value);
            }
        }else{
            //if this node is full, then it must be the root
            if(node.itemArray.length == 3){
                return findLeafForInsertion(splitNode(null, node), value);
            }

            var nextChild;
            var i;
            for(i = 0; i < node.itemArray.length; i++){
                if(value < node.itemArray[i]){
                    nextChild = node.childArray[i];
                    break;
                }
            }

            //if this loop ends then go to the fourth child because the value is larger than all items in parent
            if(nextChild == undefined)nextChild = node.childArray[i];

            //check if this child is full or not, if so split
            if(nextChild.itemArray == undefined || nextChild.itemArray.length < 3)return findLeafForInsertion(nextChild, value);
            else return findLeafForInsertion(splitNode(node, nextChild, i), value);
        }
    }

    function splitNode(parent, node, currentChildIndex){
        if(node === root){
            root = new Node();
            root.itemArray.push(node.itemArray[1]);
            root.childArray.push(node);

            var rootNewChild = new Node();

            rootNewChild.itemArray.push(node.itemArray[2]);

            //add two right most children of node being split to new child
            for(var k = 2; k < node.childArray.length; k++){
                rootNewChild.childArray.push(node.childArray[k]);
                node.childArray[k] = null;
            }

            root.childArray.push(rootNewChild);

            //remove moved items from original node
            node.itemArray.pop();
            node.itemArray.pop();

            //move two rightmost children to new right child
            for(var i = 2; i < node.childArray.length; i++){
                root.childArray[1].childArray.push(node.childArray[i]);
                node.childArray.pop();
            }

            return root;
        }else{
            //place nodes middle child in parent
            insertIntoLeaf(parent, node.itemArray[1]);

            //create new child for parent and add nodes left child as first item
            var newChild = new Node();
            newChild.itemArray.push(node.itemArray[2]);

            //add two right most children of node being split to new child
            for(var j = 2; j < node.childArray.length; j++){
                newChild.push(node.childArray[j]);
                node.childArray.pop();
            }

            //push child into position beside original node
            var temp;
            if(parent.childArray[currentChildIndex + 1] !== null && parent.childArray[currentChildIndex + 1] !== undefined)
                temp = parent.childArray[currentChildIndex + 1];

            parent.childArray[currentChildIndex + 1] = newChild;

            if(temp != undefined)
                parent.childArray[currentChildIndex + 2] = temp;

            node.itemArray.pop();
            node.itemArray.pop();

            return parent;
        }
    }

    function insertIntoLeaf(node, value){
        var temp;
        for(var j = 0; j < 3; j++){
            if(node.itemArray[j] == null){
                node.itemArray[j] = value;
                break;
            }

            if(value < node.itemArray[j]){
                temp = node.itemArray[j];
                node.itemArray[j] = value;
                value = temp;
            }
        }
    }
};

var tree = new TwoThreeFourTree();
tree.insertNode(15);
tree.insertNode(5);
tree.insertNode(35);
tree.insertNode(25);
tree.insertNode(7);
tree.insertNode(8);
tree.insertNode(9);
tree.insertNode(40);
tree.insertNode(26);
tree.insertNode(27);
tree.insertNode(28);
tree.insertNode(3);

tree.display();
