console.log('Hello World');

var variableOne = 1;
var variableTwo = 2;

console.log(variableOne + variableTwo);

var myArray = [true, 0, 'foo'];

for (var i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}

var myObject = {
    color: 'green',
    size: 'large'
};

var myCar = {
    engineType: 'gas',
    brand: 'Ford',
    year: 1968,
    model: {
        name: 'Mustang',
        number: 2
    }
}

var myOtherCar = {
    engineType: 'electric',
    brand: 'Tesla',
    year: 2016,
    model: {
        name: 'S',
        number: 60
    },
    size:"25ft"
}

var myCars = [myCar, myOtherCar];

console.log(myCars[0].model.number);

// Grab the Engine Type for my Other Car
console.log(myCars[1].engineType)
// Grab the Model Name for my other Car
console.log(myCars[1].model.name)
// Grab the Year for my Car and then tell me how old it is.
console.log(2017 - myCars[0].year)

// 1968 Ford Mustang 2

function printCar(car) {
    console.log('The car is: ' + car.year + ' ' + car.brand + ' ' + car.model.name + ' ' + car.model.number);
}

printCar(myCar);
printCar(myOtherCar);