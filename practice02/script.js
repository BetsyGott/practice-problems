var myArray = ['hello', 45, 'Bob', 'what', '23'];


function arrayReverse(arrayToReverse){
    var newArray = [];
    for(i = 0; i < arrayToReverse.length; i++){
        newArray.push(arrayToReverse[arrayToReverse.length-i-1]);
    }
    console.log(newArray);

}

arrayReverse(myArray);