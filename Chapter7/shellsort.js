function ArraySh(){
    var a = [];

    this.insert = function(value){
        a.push(value);
    };

    this.display = function(){
        console.log(a);
    };

    this.shellSort = function(){
        var inner, outer, temp, h;

        h = 1;

        while(h <= a.length/3)
            h = h*3 + 1;

        while(h > 0){
            for(outer = h; outer < a.length; outer++){
                temp = a[outer];
                inner = outer;

                while(inner > h-1 && a[inner-h] >= temp){
                    a[inner] = a[inner-h];
                    inner -= h;
                }
                a[inner] =  temp;
            }

            h = (h-1)/3

        }
    }
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

var arr = new ArraySh();
var num = 10;
for(var i = 0; i < num; i++){
    arr.insert(Math.round(getRandomArbitrary(0, 100)));
}
arr.display();

arr.shellSort();

arr.display();