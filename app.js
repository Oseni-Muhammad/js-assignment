// Function to add two numbers
function add(a, b) {
    return a + b;
}

// Function to subtract the second number from the first number
function subtract(a, b) {
    return a - b;
}

// Function to multiply two numbers
function multiply(a, b) {
    return a * b;
}

// Function to divide the first number by the second number
function divide(a, b) {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
}

// Test the functions
console.log(add(3, 7));        // Output: 10
console.log(subtract(10, 5));  // Output: 5
console.log(multiply(4, 6));   // Output: 24
console.log(divide(20, 4));    // Output: 5
console.log(divide(20, 0));    // Output: "Cannot divide by zero"

// Number 2

function checkRandomNumber() {
    // Generate a random number between 1 and 15
    const randomNumber = Math.floor(Math.random() * 15) + 1;

    // Check the random number using control flow
    if (randomNumber >= 1 && randomNumber <= 5) {
        console.log(randomNumber + " is between 1 and 5");
    } else if (randomNumber >= 6 && randomNumber <= 10) {
        console.log(randomNumber + " is between 6 and 10");
    } else if (randomNumber >= 11 && randomNumber <= 15) {
        console.log(randomNumber + " is between 11 and 15");
    } else {
        console.log("Unexpected number: " + randomNumber);
    }
}
switch (daysOfTheWeek) {
  case 0:
    console.log("Today is Sunday");
    break;
  case 1:
    console.log("Today is Monday");
    break;
  case 2:
    console.log("Today is Tuesday");
    break;
  case 3:
    console.log("Today is Wednesday");
    break;
  case 4:
    console.log("Today is Thursday");
    break;
  case 5:
    console.log("Today is Friday");
    break;
  case 6:
    console.log("Today is Saturday");
    break;

  default:
    console.log("Cannot Get Day Of The Week");
    break;
}

// Test the checkRandomNumber function
checkRandomNumber();