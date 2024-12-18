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
//Fizbuzz Question//

 for (let i = 1; i <= 20; ++i) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`${i} ->FrontEnd Simplified`);
    }
    else if (i % 3 === 0) {  /// What you are saying here is if {i} is divisible by 3 and it is equal the value and types is 0 then print front end simplified ///
        console.log(`${i} -> FrontEnd`);
    }
    else if (i % 5 === 0) {
        console.log(`${i} -> Simplified`);
    }
    else {
        console.log(`${i} -> ${i}`);
    }
 }

//Dynamic For Loop // 

 /**
  * Print out every character from the string:
  * "Front End Simplified"
  * 
  * F
  * R
  * 0
  * -
  * E
  * D
  */

 const str = "Frontend Simplified" //this string has 19 characters

 for (let i = 0; i < str.length; ++i) {
    console.log(str[i])
 }

 /// Functions /// 

//Function Definition        //name = paremeter // this makes the function dynamic
 function welcomePersonToFES(name) {
    console.log(`Welcome to FES, ${name}`) //this console logs undefined = which means the value is not set yet
 }

 //Call the function // in order to pass a function a value from when you call the function is write the value in the parenteces
 welcomePersonToFES('Victor');
 welcomePersonToFES('John');
 welcomePersonToFES('Miguel');

 ///////How to return a value from my function/////////////////

 function fn() {
     return 'my return' //once you see a return statemet it does not execute any more lines of code which is why the next line is dimmed.
    console.log("My function") //does not log to console due to return
 }

 fn();      //this fn value is = to 'my return'

 // Another example but lets say we want to add two numbers together //

 function sumOfTwoNumber(num1, num2) {
    //return 5 + 10 //this gives us 15 because we are returning 5+10 in the function
    num1 + num2 // undefined - needs to be returned
    return num1 + num2
 }

console.log(sumOfTwoNumber(10, 10)) //in order to make it dynamic and lets say we wanted to add 10, 10 together, 
                                    //these two arguments need to be passed into the parameters of the function definition, which means - if we are passing two values we need to accept two values.
                                    //once  you accept the parameters you can actually use them
                                    //the first argument goes with the first parameter

////Celcius to farenheit with functions////

/** Create a function that converts celcius to farenheit
 * 
 * Celcius to F formula:
 *  F = C x 1.8 + 32
 *      
 *  @example
 *  convertcelciustofahrenheit (0) -> 32
 *  convertcelciustofahrenheit (10) -> 50
 *  convertcelciustofahrenheit (30) -> 86 
 */

 /* 
 function convertCelciustToFahrenheit(celcius) {
    return celcius * 1.8 + 32 // formula for farenheit
}

console.log(convertCelciustToFahrenheit(0))
console.log(convertCelciustToFahrenheit(10))
console.log(convertCelciustToFahrenheit(30))
**/

//arrow function//

const convertCelciusToFahrenheit = () => {
    return Celcius * 1.8 + 32
}                                                 //arrow function


console.log(convertCelciusToFahrenheit(0))

//ARRAYS//

//let item1 = 20
//let item2 = 30
//let item3 = 40
//let item4 = 50
//let item5 = 100

//let arr = [20, 30, 40, 50, 100] //the numbers are all elements

//first element of array
//console.log(arr[0])

//last element of array
//console.log(arr[arr.length - 1])

//arr.push(200)

//let newArr = arr.filter((element) => {
  //  console.log(element)
  //  return true;/
//})    //elemnt that we are currently on in the iteration

//console.log(newArr)

//console.log(arr);

// this gives and empty array because .filter method only returns the element of the
//current itiarion we are on if that iteration turns true


//array excersice//

/**
 * Filter out all the fail elements in an array
 * 
 * @examples
 * [A+, A, FAIL] => [A+, A]
 * [FAIL, AIL, B] => [B]
 * [FAIL] => []
 * 
*/
//let grades = ['A+', 'A', 'FAIL']

/**
 * 
 *let goodGrades = grades.filter((element) => {
    console.log(element)
    if (element !== 'FAIL'){
        return true;
    }
})

console.log(goodGrades)

*/

/**
 * Filter out the fail elements in an array without using the array.filter method
 */

let grades = ['A+', 'A', 'FAIL']

//STEP 1: Create a new empty array - called good grades
//STEP 2: Add current element onto 'goodgrades' only if current element is  not equal to FAIL
// if STATEMENT EXPLANATION: checking IF the current element is not equal to fail the pushing onto the empty array let goodGrades[], the current element we are on (grades[i])

/**
 * let goodGrades = []

    for (let i = 0; i < grades.length; ++i) {
    if (grades[i] !== 'FAIL') {
        goodGrades.push(grades[i]);
    }
}
    console.log(goodGrades);
 * */


//console log goodgrade

//.MAP METHOD//

/**
 * .MAP METHOD ACCEPTS CALL-BACKS (() => {})
 * the element inside the () inside the callback method can be named whatever because you are using arr.map and the array is named arr
 * map element works by irirating over every other element looks at the return statement - and turns the element of the current itiration into whatever we return
 * looks into first element and looks at the return and because its underfined it returns that first element into undefined.
 * 
 * 
 */


/**
 * / let arr = [1, 4, 9, 16]
 * 
 * let newArray = arr.map ((element) => {
    console.log(element)
    return undefined;
})

console.log(newArray)
 * /

//turning the same from above into one line of code//

/**
 * because theres only one variable you can removed the () inside the callback
 * removed console.log(element)
 * because the curly brackets only have one line of code {} - which is return undefined, and we are returning in that one line of code we can remove the curly brackets and the return statement
 */

/**
 * 
 * let arr = [1, 4, 9, 16]
let newArray = arr.map(element => 'dog')
console.log(newArray)
 * 
 */



/**
 * Turn each element in an array of dollars into cents
 * @examples
 * [1, 5, 10, 3] => [100, 500, 1000, 300]
 * [0, 10, 20] => [0, 1000, 2000]
 */

/**
 * let dollars = [1, 5, 10, 3]

let dollarsCents = dollars.map((element) => {
    return  element * 100
})
   console.log(dollarsCents)


 * */




/***
 * now the same with shorter code
 * 
 * let dollars [1, 5, 20, 4]
 * 
 * let dollarScents = dollar.map(element => element * 100)
 * 
 * console.log(dollarScents)
 */


/**DO THE SAME WITHOUT USING THE MAP METHOD - USE A FOR LOOP */

let dollars = [1, 5, 20, 4]

let dollarCents = [];
    for (let i = 0; i < dollars.length; ++i) {
        dollarCents.push(dollars[i] * 100)
    }

    console.log(dollarCents);


    // OBJECTS //

let userFirstName = 'Victor'
let userLastName = 'Lopez'
let userDiscordId = 'Victor Lopez #1234'
let userSubscriptionStatus = 'VIP'

let user = {
    username: 'victor',
    email: 'itsvictorlopez@gmmail.com',
    subscriptionStatus: 'vip',
}

////