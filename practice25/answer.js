var arrayOne = [1, 2, 3, -5, 10];
var arrayTwo = [-4, 15, 4, 4, 9];

function addArrays(first, second){
    var newArray = [];
    for(i=0; i < first.length; i++){
        var x = first[i]+second[i];
        newArray.push(x);
    }
    console.log(newArray);
}

addArrays(arrayOne, arrayTwo);