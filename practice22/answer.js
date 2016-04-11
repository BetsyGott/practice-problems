var inputArray = [
    {make: "Fiat", model: "500", year: "2015"},
    {make: "Ford", model: "Mustang GT", year: "2005"},
    {make: "Chevrolet", model: "Corvette", year: "1982"},
    {make: "Dodge", model: "Viper", year: "2016"}
];

function sortCars(cars) {
    var length = cars.length;
    for (var i = 0; i < length; i++) {
//Number of passes
        for (var j = 0; j < (length - i - 1); j++) { //Notice that j < (length - i)
            //Compare the adjacent positions
            if(cars[j].year > cars[j+1].year) {
                //Swap the numbers
                var tmp = cars[j];
                //Temporary variable to hold the current number
                cars[j] = cars[j+1];
                //Replace current number with adjacent number
                cars[j+1] = tmp;
                //Replace adjacent number with current number
            }
        }
    }
    console.log(cars);
}

sortCars(inputArray);