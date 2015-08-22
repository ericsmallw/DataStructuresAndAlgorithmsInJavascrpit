/**
 * Created by Eric on 8/22/2015.
 */
var DataItem = function(dd){
    this.dData =dd;

    this.displayItem = function(){

        return("/" + this.dData);
    }
};

var Node = function(){
    var ORDER = 4;
    var numItems = 0;
    var parent = null;
    var childArray = [];
    var itemArray = [];

    this.connectChild = function(childNum, child, self){
        childArray[childNum] = child;
        if(child != null){
            child.setParent(self);
        }
    };

    this.disconnectChild = function(childNum){
        var tempNode = childArray[childNum];
        childArray[childNum] = null;
        return tempNode;
    };

    this.getChild = function(childNum){
        return childArray[childNum];
    };

    this.getParent = function(){
        return parent;
    };

    this.setParent  =function(p){
        parent = p;
    };

    this.isLeaf = function(){
        return childArray[0] == null;
    };
    this.getNumItems = function(){
        return numItems;
    };

    this.getItem = function(index){
        return itemArray[index];
    };

    this.isFull = function(){
        return numItems == ORDER-1;
    };

    this.findItem = function(key){
        for(var j = 0; j<ORDER - 1; j++){
            if(itemArray[j] == null) {
                break;
            }else if(itemArray[j].dData == key){
                return j;
            }
        }
        return -1;
    };

    this.insertItem = function(newItem){
        //assumes node not full
        numItems++;
        var newKey = newItem.dData;

        for(var j = ORDER - 2; j >= 0; j--){
            if(itemArray[j] == null){

            }else{
                var itsKey = itemArray[j].dData;
                if(newKey < itsKey){
                    itemArray[j+1] = itemArray[j];
                }else{
                    itemArray[j+1] = newItem;
                    return j+1;
                }
            }

        }
        itemArray[0] = newItem;
        return 0;
    };

    //removes largest item
    this.removeItem = function(){
        var temp = itemArray[numItems-1];
        itemArray[numItems-1] = null;
        numItems--;
        return temp;
    };

    this.displayNode = function(){
        var s = "";
        for(var j = 0; j < numItems; j++){
             s+= itemArray[j].displayItem();

        }
        console.log(s);
        console.log("/");
    }
};

function Tree234(){
    var root = new Node();

    this.find = function(){

    };

   this.insert = function(dValue){
       var curNode = root;
       var tempItem = new DataItem(dValue);

       while(true){
           if(curNode.isFull()){
               this.split(curNode);
               curNode = curNode.getParent();

               curNode = this.getNextChild(curNode, dValue);
           }else if(curNode.isLeaf()){
               break;
           }else{
               curNode = this.getNextChild(curNode,dValue);
           }
       }

       curNode.insertItem(tempItem);
    };

    this.split = function(thisNode){
        var itemB, itemC;
        var parent, child2, child3;
        var itemIndex;

        itemC = thisNode.removeItem();
        itemB = thisNode.removeItem();
        child2 = thisNode.disconnectChild(2);
        child3 = thisNode.disconnectChild(3);

        var newRight = new Node();

        if(thisNode == root){
            root = new Node();
            parent = root;
            root.connectChild(0, thisNode, root);
        }else {
            parent = thisNode.getParent();
        }
            //deal with parent
            itemIndex = parent.insertItem(itemB);
            var n = parent.getNumItems();

            for(var j = n-1; j > itemIndex; j--){
                var temp = parent.disconnectChild(j);
                parent.connectChild(j+1, temp, parent);
            }

            parent.connectChild(itemIndex + 1, newRight,parent);

            //deal with new right
            newRight.insertItem(itemC);
            newRight.connectChild(0, child2, newRight);
            newRight.connectChild(1, child3, newRight);

    };

    this.getNextChild = function(theNode, theValue){
        var j;

        var numItems = theNode.getNumItems();

        for(j = 0; j < numItems; j++){
            if(theValue < theNode.getItem(j).dData)
                return theNode.getChild(j);
        }

        return theNode.getChild(j)
    };

    this.displayTree = function(){
        recDisplayTree(root, 0, 0);
    };

    function recDisplayTree(thisNode, level, childNumber){
        var s = "level=" + level + " child=" + childNumber + " ";
        thisNode.displayNode();

        //call ourselves for each child of this node
        var numItems = thisNode.getNumItems();
        for(var j=0; j < numItems + 1; j++){
            var nextNode = thisNode.getChild(j);
            if(nextNode != null) recDisplayTree(nextNode, level + 1, j);
            else return;
        }
    }
}

function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
var tree = new Tree234();
for (var i = 0; i < 1000; i++) {
    tree.insert(getRandomArbitrary(0, 100000));
}
var times = 10000;
var sum = 0;
for(var j = 0; j < times; j++) {
    var d = new Date();
    var n = d.getTime();

    tree.insert(getRandomArbitrary(0,1000000));

    var d2 = new Date();
    var n2 = d2.getTime();
    sum += (n2 - n);
}

console.log(sum/times);