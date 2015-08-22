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

var arr = new ArrayBub();

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
var num = 100000;
for(var i = 0; i < num; i++){
    arr.insert(Math.round(getRandomArbitrary(0, 10000)));
}



arr.display();

arr.insertionSort();
arr.display();