/**
 * Created by Eric on 8/5/2015.
 */
var ArrayBub = function(){
    var a = [];
    this.insert = function(value){
        a[a.length] = value;
    };

    this.display = function(){
            console.log(a);
    };

    this.insertionSort = function(){
        for(var outerPosition = a.length; outerPosition > 1; outerPosition--){
            for( var innerPosition = 0; innerPosition < outerPosition; innerPosition++){
                if(a[innerPosition] > a[innerPosition+1]){
                    swap(innerPosition, innerPosition + 1)
                }
            }
        }
    };

    function swap(item1, item2){
        var temp = a[item1];
        a[item1] = a[item2];
        a[item2] = temp;
    }

};

var array = new ArrayBub();

array.insert(5);
array.insert(3);
array.insert(39);
array.insert(12);
array.insert(75);
array.insert(30);
array.insert(0);
array.insert(0);



array.display();

array.insertionSort();
array.display();