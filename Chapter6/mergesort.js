/**
 * Created by esmallwood on 8/6/2015.
 */
function ArrayMerge(){
    var a= [];

    this.insert = function(value){
        a[a.length] = value;
    };

    this.display = function(){
        console.log(a);
    };

    this.mergeSort = function(){
        a = recMergeSort(a);
    };

    function recMergeSort(arr){
        if(arr.length == 1){
            return arr;
        }else{
            var mid = Math.round(arr.length/2);

            var firstHalf = recMergeSort(arr.slice(0, mid));

            var secondHalf = recMergeSort(arr.slice(mid));

            return merge(firstHalf, secondHalf);
        }
    }

    function merge (array1, array2) {
        var mergedArray = [];
        while(array1.length > 0 && array2.length > 0){
            if(array1[0] < array2[0]){
                mergedArray.push(array1[0]);
                array1.splice(0,1);
            }else if(array1[0] == array2[0]){
                mergedArray.push(array1[0]);
                mergedArray.push(array2[0]);
                array1.splice(0,1);
                array2.splice(0,1);
            }else{
                mergedArray.push(array2[0]);
                array2.splice(0,1)
            }
        }

        //push the rest if array1 is not empty
        if(array1.length > 0){
            for(var i = 0; i < array1.length; i++){
                mergedArray.push(array1[i]);
            }
        }

        //push the rest if array2 is not empty
        if(array2.length > 0){
            for(var i = 0; i < array2.length; i++){
                mergedArray.push(array2[i]);
            }
        }

        return mergedArray;
    }
}

var arr = new ArrayMerge(); // create the array
arr.insert(64); // insert items
arr.insert(21);
arr.insert(35);
arr.insert(1);

arr.display(); // display items
arr.mergeSort(); // merge sort the array
arr.display(); // display