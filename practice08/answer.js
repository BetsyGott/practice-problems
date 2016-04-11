var x = "the cat in the hat";

function ascii(string){
    var asciiString = "";
    for(i=0; i < string.length; i++){
        asciiString += string.charCodeAt(i);
    }
    console.log(asciiString);
}

ascii(x);