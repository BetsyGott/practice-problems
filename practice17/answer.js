function skippy_numbers(counter){
    var array1 = [];
    for(x=counter; x<=10+counter;x++){
        array1.push(x);
    }
    for(i=counter; i<array1.length; i+=counter){
        array1.splice(i, 1);
    }
    console.log(array1);

}

skippy_numbers(2);
