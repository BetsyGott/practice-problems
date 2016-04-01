var myArray = ['hello', 34, true, false, 'goodbye', 56, 12, '25', true];

function groupArray(arrayToGroup){
    var newArray = [];
    var stringArray = [];
    var numberArray = [];
    var booleanArray = [];
    for(i = 0; i < arrayToGroup.length; i++){
        if(typeof arrayToGroup[i] === "string"){stringArray.push(arrayToGroup[i]);
        } else if (typeof arrayToGroup[i] === "boolean"){
            booleanArray.push(arrayToGroup[i]);
        } else {
            numberArray.push(arrayToGroup[i]);
        }
    }
    newArray.push(stringArray,numberArray,booleanArray);
    console.log(newArray);
}
groupArray(myArray);