var ArraySelect = function(){
    var a = [];

    this.insert = function(value){
        a[a.length] = value;
    };

    this.display = function(){
        console.log(a);
    };

    this.insertionSort = function(){
        for(var outerPosition = 0; outerPosition < a.length - 1; outerPosition++){
            var smallestNumIndex = outerPosition;
            for(var innerPosition = outerPosition + 1; innerPosition < a.length ; innerPosition++){
                if(a[innerPosition] < a[smallestNumIndex]){
                    smallestNumIndex = innerPosition
                }
            }
            swap(outerPosition, smallestNumIndex)
        }
    };

    function swap(item1, item2){
        var temp = a[item1];
        a[item1] = a[item2];
        a[item2] = temp;
    }

};


var array = new ArraySelect();

array.insert(5);
array.insert(3);
array.insert(10);
array.insert(7);
array.insert(12);
array.insert(99);
array.insert(108);
array.insert(22);
array.insert(16);
array.insert(64);
array.insert(11);
array.insert(4);

array.display();

array.insertionSort();

array.display();