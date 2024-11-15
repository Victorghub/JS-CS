console.log("hello world")
console.log("hello world" + "second string")
console.log("anything inside these squiggly lines is considered a string - even numbers. eg: 100")

console.log("Victor"[0])
console.log("hello world" [10])

console.log("12345".length)
console.log("hello world".length)

//

let name = "Victor"
let itsRaining = "True"
let planet = "Earth"
let temperature = "22"

temperature = 23
temperature = temperature + 1
console.log(temperature)

//Practice Question

/*
 * Converting Temperatures
 *
 * Celcius to Farenheit Formula:
 *
 *   F = C x 1.8 + 32
 */

let Celcius = 10;
let Farenheit = Celcius * 1.8 + 32;

console.log(Farenheit)

///////////////

let bool = '1' == 1;
console.log(bool)

///CONDITIONALS///

let subscribed = true
let loggedIn = true

if (subscribed === true) {
    console.log("show the video")
}
else if (loggeIn === true) {
    console.log("tell user to upgrade their subscription")
}
else {
    console.log("tell user to log into account")
}

///Store Scenario - CONDITIONALS///

let cash = 220
let price = 200
let difference = cash - price

if (cash > price) {
    console.log(`you paid more than you should have - heres ${difference} your change`)
}
else if (cash === price) {
    console.log("you payed the exact amount! Have a good day")
}
else {
    console.log(`you dont have enough, you need an extra ${difference * -1} sorry!`)
}

///LOGIC OPERATORS///

let cash1 = 50
let price1 = 40
let isStoreOpen = true

if (cash1 >= price1 && isStoreOpen === true) {
    console.log("print receipt")
}


///Truthy and Falsy Values///

/// For the IF statement to run it needs to be a TRUTHY VALUE. ///
/// For the ELSE statement to run it needs to be a FALSY VALUE. ///
/// You can use !! then following a value to see if it is truthy or falsy. ///