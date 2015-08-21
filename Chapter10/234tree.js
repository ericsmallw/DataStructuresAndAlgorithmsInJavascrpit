/**
 * Created by esmallwood on 8/21/2015.
 */
var TwoThreeFourTree = function(){
    this.root = null;

    var DataItem = function(val){
        var value = val;
        this.display = function(){
            console.log(value);
        }
    };

    var Node = function(){
        this.childArray = [];
        this.itemArray = [];
    };

    this.insert = function(val){
        if(root === null){
            root = new Node();
            root.itemArray[0] = val;
        }else{
            //check if the
        }
    };

    this.find = function(val){

    };


    function findLeafForInsertion(node, value){
        //check to see if the node is a leaf or not
        if(node.childArray.length === 0){
            insertIntoLeaf(node, value);
        }else{

            var nextChild;
            for(var i = 0; i < node.itemArray.length; i++){
                if(value < node.itemArray[i]) nextChild = node.childArray[i];
            }

            //if this loop ends then go to the fourth child because the value is larger than all items in parent
            nextChild = node.childArray[3];

            //check if this child is full or not, if so split
            if(nextChild.itemArray.length < 3)return findLeafForInsertion(nextChild, value);
            else return findLeafForInsertion(splitNode(node, nextChild), value);
        }
    }

    function splitNode(parent, node){
        if(node === root){
            root = new Node();
            root.itemArray.push(node.itemArray[1]);
            root.childArray.push(node.itemArray[0]);
            root.childArray.push(node.itemArray[2]);
            //move right two child array items to new roots right child
            //and move right to child array items to new roots left child
            for(var i = 0; i < node.childArray.length; i++){
                if(i < 2)root.childArray[0].childArray.push(node.childArray[i]);
                else root.childArray[1].childArray.push(node.childArray[i]);
            }

            return root;
        }else{
            //place nodes middle child in parent
            //var temp;
            //for(var j = 0; j < 3; j++){
            //    if(parent.itemArray[j] == null){
            //        parent.itemArray[j] = node.itemArray[1];
            //        break;
            //    }
            //
            //    if(node.itemArray[1] < parent.itemArray[j]){
            //        temp = parent.itemArray[j];
            //        parent.itemArray[j] = node.itemArray[1];
            //        node.itemArray[1] = temp;
            //    }
            //}
            insertIntoLeaf(parent, node.itemArray[1]);

            //empty the nodes central item
            node.itemArray[1] = null;

            //create new child for parent and add nodes left child as first item
            var newChild = new Node();
            newChild.itemArray.push(node.itemArray[2]);
            parent.childArray.push(newChild);

            node.itemArray[2] = null;

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

