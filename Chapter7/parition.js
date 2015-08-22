function ArrayPar(){
    var a = [];

    this.insert = function(value){
        a[a.length] = value;
    };

    this.size = function(){
        return a.length;
    };

    this.display = function(){
        console.log(a);
    };

    function swap(index1, index2) {
        var temp = a[index1];
        a[index1] = a[index2];
        a[index2] = temp;
    }

    this.partitionIt = function(left, right, pivot){
        var leftPtr = left - 1;
        var rightPtr = right + 1;

        while(true){
            while(leftPtr < right && a[++leftPtr] < pivot){

            }

            while(rightPtr > left && a[--rightPtr] > pivot){

            }

            if(leftPtr >= rightPtr)
                break;
            else
                swap(leftPtr, rightPtr);
        }

        return leftPtr;
    }
}

function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

var size = 16;

var arr = new ArrayPar();

for(var j = 0;  j < size; j++){
    var n = getRandomArbitrary(0, 299);
    arr.insert(n);
}

arr.display();

var pivot = 99;

console.log("Pivot is " + pivot);

var partDex = arr.partitionIt(0, size - 1, pivot);

console.log(", Partition is at index " + partDex);

arr.display();