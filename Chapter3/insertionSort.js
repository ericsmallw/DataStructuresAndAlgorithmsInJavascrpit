var ArrayInsert = function(){
    var a = [];

    this.insert = function(value){
        a[a.length] = value;
    };

    this.display = function(){
        console.log(a);
    };

    this.insertionSort = function(){
        for(var outerPosition = 1; outerPosition < a.length; outerPosition++){
            var temp = a[outerPosition];
            for(var innerPosition = outerPosition; innerPosition > 0 && a[innerPosition - 1] >= temp ; innerPosition--){
                a[innerPosition] = a[innerPosition - 1];
            }
            a[innerPosition] = temp;
        }
    };

};


var array = new ArrayInsert();

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