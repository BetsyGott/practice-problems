
var bunchOfWords = ["busted", "buster", "blumber", "stumble", "breeze"];

function wordSearch(wordToSearch, wordArray){
    var letters = wordToSearch.split("");
    for(i=0; i < letters.length; i++){
        for(j=0; j < wordArray.length; j++){
            var index = wordArray[j].indexOf(letters[i]);
            if(index === -1){
                wordArray.splice(j, 1);
            }
        }
    }
    console.log(wordArray);
}
wordSearch("bus", bunchOfWords);