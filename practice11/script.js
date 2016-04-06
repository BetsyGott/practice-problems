var random = [1, 2, 4, 5, 8, 9, 99, 101, 100, 8, 101, 111, 'bears', true, 3000];

function evenOdd(arrayInput){
    var odds = [];
    var evens = [];
    for(i=0; i < arrayInput.length; i++){
        if(Number.isInteger(arrayInput[i])){

            if((arrayInput[i] % 2 === 0) && (evens.indexOf(arrayInput[i]) === -1)){
                evens.push(arrayInput[i]);

            }else{
                if(arrayInput[i] % 2 !== 0 &&
                    odds.indexOf(arrayInput[i]) === -1){
                    odds.push(arrayInput[i]);
                }
            }
        }
    }
    console.log("Evens: " + evens);
    console.log("Odds: " + odds);
}//end of function

evenOdd(random);