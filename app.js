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

/// Ternary Operators ///

let hot = true
hot ? console.log('weather is hot outside') : console.log('it is cold')

let Subscribed = true
let LoggedIn = true

let Str = Subscribed && LoggedIn ? 'show the video' : 'hide the video'
console.log(Str);

/// Problem Attempt with Tenary Operators ///

let Cash = 50
let Price = 40
let IsStoreOpen = true

// 'give receipt' : 'do not give receipt' //

IsStoreOpen && Cash>=Price ? console.log('give receipt') : console.log('do not give receipt')

// or to make it cleaner you could do this//
// 
// let str = IsStoreOpen && Cash>=Price ? "give receipt" : "do not give receipt"
// console.log("str")

// This way above its cleaner in the sense that you are only console login the str where the cash, price and store is at 

/// Loops - for loop is the most common///

///let count = 1; 

//while (count <= 100) {
   // console.log(count)
   //     count = count + 1;
//}

///for (let i = 0; i < 100; i++) {
 ///   console.log(i + 1);


 /* Write a for loop that loops through 1 to 20.
 *  If the number is divisible by 3, print 'frontend'
 *  If the number is divisible by 5, print 'simplified'
 *  If the number is divisible by 3 and 5, print 'Front End Simplified'
 *  If the number is *not* divisible by either 3 or 5 print the number
 * 
 *  @example
 *  1 -> 1
 *  2 -> 2
 *  3 -> 'FrontEnd'
 *  4 -> 4
 *  5 -> 'Simplified'
 *  ...
 *  15 -> 'FrontEnd Simplified'
 *  ...
 *  20 -> 'Simplified'
 */


 for (let i = 1; i <= 15; i++) {
    console.log(i);
}

    if (let i =  i % 3; i++) {
        console.log('FrontEd') 
}


