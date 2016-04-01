var one = [1, 2, 3, 4, 5];
var two = ["one", "two", "three", "four", "five"];

function bipolar(inputOne, inputTwo){
    for(x = 0, y = inputTwo.length-1; x < inputOne.length-1, y > -1; x++, y--){
        console.log(inputOne[x] + "/" + inputTwo[y]);
    }
}

bipolar(one, two);