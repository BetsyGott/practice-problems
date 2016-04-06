var sentence = "Testing out pig latin";

function pigLatin(textInput){
    var wordChunks = textInput.split(" ");
    var pigLatinArray = [];
    var x,y;
    console.log(wordChunks);
    for(i=0; i < wordChunks.length; i++){
        if(wordChunks[i].toUpperCase().charAt(0)=== "A" || wordChunks[i].toUpperCase().charAt(0)==="E" || wordChunks[i].toUpperCase().charAt(0)==="I" || wordChunks[i].toUpperCase().charAt(0)==="O" || wordChunks[i].toUpperCase().charAt(0)==="U"){
            pigLatinArray.push(wordChunks[i]+"ay");
        } else {
            pigLatinArray.push(wordChunks[i].slice(1)+wordChunks[i].toLowerCase().substr(0,1)+"ay");}
    }
    var output = pigLatinArray[0];
    for(j=1; j < pigLatinArray.length; j++){
        output = output + " " + pigLatinArray[j];
    }
    return output;
}

console.log(pigLatin(sentence));