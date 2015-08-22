/**
 * Created by Eric on 8/7/2015.
 */
function ArrayQuick(){
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

    function partitionIt(left, right, pivot){
        var leftPtr = left - 1;
        var rightPtr = right;

        while(true){
            while(a[++leftPtr] < pivot){

            }

            while(rightPtr > 0 && a[--rightPtr] > pivot){

            }

            if(leftPtr >= rightPtr)
                break;
            else
                swap(leftPtr, rightPtr);
        }
        swap(leftPtr, right);
        return leftPtr;
    }

    function medianof3(left, right){
        var center = Math.round((left + right) / 2);

        if(a[left] > a[center]) swap(left, center);
        if(a[left] > a[right]) swap(left, right);
        if(a[center] > a[right])swap(center, right);

        swap(center, right-1);
        return a[right-1];
    }

    this.quickSort = function(){
        recQuickSort(0, a.length -1);
    };

    var recQuickSort = function(left, right){
        if(right - left <= 0){}
        else{
            var median = medianof3(left, right);
            var pivot = a[right];
            var partition = partitionIt(left, right, pivot);
            recQuickSort(left, partition - 1);
            recQuickSort(partition + 1, right);
        }
    }
}


function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

var size = 100000;

var arr = new ArrayQuick();

for(var j = 0;  j < size; j++){
    var n = getRandomArbitrary(0, 2034500);
    arr.insert(n);
}

arr.display();

arr.quickSort();

arr.display();