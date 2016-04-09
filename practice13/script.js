function math_sequences(n, n2){
    var add = n + n2;
    var sub = n - n2;
    var mul = n * n2;
    var div = n / n2;

    var mathArray = [
        n+"+"+n2+"="+add,
        n+"-"+n2+"="+sub,
        n+"*"+n2+"="+mul,
        n+"/"+n2+"="+div];

    console.log(mathArray);
}

math_sequences(2,5);
