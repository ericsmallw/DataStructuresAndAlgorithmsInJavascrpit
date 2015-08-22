/**
 * Created by Eric on 8/21/2015.
 */
var LinkedList = function(orderedList){
    var Link = function(data){
        this.data = data;
        this.next = null;

    };
    var ordered = orderedList;
    var first;
    var size = 0;
    this.isEmpty = function(){
        return size == 0;
    };

    this.length = function(){return size;};

    this.display = function(){
        var current = first;
        var list = "{";
        while(current != null){
            list += current.data;
            if(current.next != null) list += ", ";
            current = current.next;
        }
        list += "}";
        console.log(list);
    };

    this.insert = function(val){
        if(first == null){
            first = new Link(val);
            size++;
            return;
        }

        if(ordered){
            inOrderInsert(val, first);
        }

        function inOrderInsert(val, item, previous){
            if(val < item.data){
                var newitem = new Link(val);
                if(previous != null)previous.next = newitem;
                newitem.next = item;
                if(first == item)first = newitem;
                size++;
            }else{
                if(item.next == null){
                    item.next = new Link(val);
                    size++;
                }else{
                    inOrderInsert(val, item.next, item);
                }
            }
        }

        this.remove = function(val){
            var current = first;
            var previous = null;
            while(current != null){
                if(val == current.data){
                    //if the item to be removed is the first make next the first
                    if(previous == null) first = current.next;
                    else previous.next = current.next;

                    current.next = null;
                    size--;
                    break;
                }
                previous = current;
                current = current.next;
            }
        }
    };
};