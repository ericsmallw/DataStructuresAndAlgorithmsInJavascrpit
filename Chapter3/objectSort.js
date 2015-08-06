function Person(last, first, a){
    var lastName = last;
    var firstName = first;
    var age = a;

    this.displayPerson = function(){
        console.log("    Last name: " + lastName +",First name: " + firstName + ",Age: " + age);
    };

    this.getLast = function(){
        return lastName;
    };
}

function ArrayInObj(){
    var a = [];

    this.insert = function(last, first, age){
        a[a.length] = new Person(last, first, age);
    };

    this.display = function(){
        for(var j = 0; j < a.length; j++){
            a[j].displayPerson();
        }
    };

    this.insertionSort = function(){
        var innerIndex, outerIndex;

        for(outerIndex = 1; outerIndex < a.length; outerIndex++){
            var temp = a[outerIndex];
            innerIndex = outerIndex;

            while(innerIndex > 0 && a[innerIndex -1].getLast().localeCompare(temp.getLast()) > 0){
                a[innerIndex] = a[innerIndex-1];
                --innerIndex;
            }

            a[innerIndex] = temp;
        }
    }
}

var arr = new ArrayInObj();

arr.insert("Evans", "Patty", 24);
arr.insert("Smith", "Doc", 59);
arr.insert("Evans", "Patty", 24);
arr.insert("Smith", "Doc", 59);
arr.insert("Smith", "Lorraine", 37);
arr.insert("Smith", "Paul", 37);
arr.insert("Yee", "Tom", 43);
arr.insert("Hashimoto", "Sato", 21);
arr.insert("Stimson", "Henry", 29);
arr.insert("Velasquez", "Jose", 72);
arr.insert("Vang", "Minh", 22);
arr.insert("Creswell", "Lucinda", 18);

console.log("Before Sorting: ")
arr.display();

arr.insertionSort();

console.log("After Sorting: ");
arr.display();
