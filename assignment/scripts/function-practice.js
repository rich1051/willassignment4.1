console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!":', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'

function helloName(name) {
  return 'Hello, ' + name + '!';
}

// Remember to call the function to test
console.log(helloName('Instructor'));
console.log(helloName('Liz'));

// 3. Function to add two numbers together & return the result
let firstNumber = 1;
let secondNumber = 2;
function addNumbers(firstNumber, secondNumber) {
  // return firstNumber + secondNumber;
  return firstNumber + secondNumber;
}
console.log('The first two numbers added together equals:', addNumbers(firstNumber, secondNumber));


// 4. Function to multiply three numbers & return the result
let thirdNumber = 3;
function multiplyThree(firstNumber, secondNumber, thirdNumber){
  return firstNumber * secondNumber * thirdNumber; 
}
console.log('The first three numbers multiplied together equals:', multiplyThree(firstNumber, secondNumber, thirdNumber));

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
let number;
function isPositive(number){
  if (number > 0){
    return true;
  }
  else (number <= 0);
    return false;
  }

  // Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'Because the number "3" is positive, the following answer should say "true":', isPositive(3) );
console.log( 'Because "0" is neither positive or negative, the following answer should say "false":', isPositive(0) );
console.log( 'Beacause "-3" is negative, the following answer should say "false":', isPositive(-3) );

// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
let toyArray = ['Buzz Lightyear', 'Woody', 'Bullseye', 'Green Army Men'];
function getLast(toyArray) {
  if (toyArray.length === 0) {
    return undefined;
  }
  else {
    return toyArray[toyArray.length - 1];
  }
}
console.log('The coolest characters in Toy Story were the last ones:', getLast(toyArray));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find( value, array ){
  for (i=0; i<array.length; i++){
    if (array[i] === value){
      return true;
    }
  }
  return false;
}
console.log('Test - This answer should be true:', (find(2,[1,2,3])));
console.log('Test - This answer should be false:', (find(5,[1,2,3])));
// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {

}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll( ) {
  let sum = 0
  // TODO: loop to add items
  return sum;
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.



// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
