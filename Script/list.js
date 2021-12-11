//list

var a = 5;
var b = 10;
var c = 15;

var list = [];

function storeVariables() {
  list[0] = a;
  list[1] = b;
  list[2] = c;
  console.log(list, list.length);
}

storeVariables();

// #2 [1, 2, ........., 10]

function FillArray(){
    var anotherList = [];
    for (var i = 1 ; i <= 10 ; i++){
        anotherList.push(i * 2)
    }
    console.log(anotherList);
}
FillArray();

// #3 

