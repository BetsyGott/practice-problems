var haystack = ["New York", "Los Angeles", "Tokyo", "DC", "Paris"];
var needle = ["Chicago", "Detroit", "Tokyo", "Paris", "Amsterdam"];
//needs to find tokyo and paris

function searchArray(searchThis, findThese){
    var results = [];
    for(i=0; i < findThese.length; i++){
// loop through each value in the needle array 
        if(searchThis.indexOf(findThese[i])!==-1){

//if it finds the needle value
            results.push(findThese[i]);
        }
    }
    console.log(results);
}

searchArray(haystack, needle);
