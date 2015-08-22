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
                return findLeafForInsertion(splitNode(null, node, value), value);
            }
        }else{
            //if this node is full, then it must be the root because we look forward and dectect fullnodes ahead of time
            if(node.itemArray.length == 3){
                return findLeafForInsertion(splitNode(null, node, value), value);
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
            if(node.childArray[i] === undefined)node.childArray.push(new Node);
            if(nextChild === undefined)nextChild = node.childArray[i];

            //check if this child is full or not, if so split
            if(nextChild.itemArray == undefined || nextChild.itemArray.length < 3)return findLeafForInsertion(nextChild, value);
            else return findLeafForInsertion(splitNode(node, nextChild, value, i), value);
        }
    }

    function splitNode(parent, node,  value, currentChildIndex){
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

            return value < root.itemArray[0] ? root.childArray[0] : root.childArray[1];
        }else{
            //place nodes middle child in parent
            insertIntoLeaf(parent, node.itemArray[1]);

            //create new child for parent and add nodes left child as first item
            var newChild = new Node();
            newChild.itemArray.push(node.itemArray[2]);

            //add two right most children of node being split to new child
            for(var j = 2; j < node.childArray.length; j++){
                newChild.childArray.push(node.childArray[j]);
                node.childArray.pop();
            }

            //push child into position beside original node
            for(var m = currentChildIndex; m < parent.childArray.length; m++){
                var temp = null;
                if(parent.childArray[m + 1] !== null && parent.childArray[m + 1] !== undefined)
                    temp = parent.childArray[m + 1];

                parent.childArray[m + 1] = newChild;

                if(temp != null)
                    newChild = temp;
                else break;
            }

            node.itemArray.pop();
            node.itemArray.pop();

            //find correct insertion path
            var nextChild;
            var l;
            for(l = 0; l < parent.itemArray.length; l++){
                if(value < parent.itemArray[l]){
                    nextChild = parent.childArray[l];
                    break;
                }
            }

            //if this loop ends then go to the fourth child because the value is larger than all items in parent
            if(nextChild == undefined)nextChild = parent.childArray[l];

            return nextChild;
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

function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
var tree = new TwoThreeFourTree();

for (var i = 0; i < 112; i++) {
    var randomNum = getRandomArbitrary(0, 100);
    console.log(randomNum);
    tree.insertNode(randomNum);
}

tree.display();





