var word = "bulbous";
var wordArray = ["large", "obese", "rotund", "enormous", "stupendous"];

function biggerWords(string, array){
    var x = string.length;
    var arrayOfLargerWords = [];
    for(i=0; i < array.length; i++){
        if(array[i].length > x){
            arrayOfLargerWords.push(array[i]);
        }
    }//end of for loop
    console.log(arrayOfLargerWords);
}//end of biggerWords function

biggerWords(word, wordArray);