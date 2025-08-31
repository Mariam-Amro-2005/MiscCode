// 1. Write a program that allows the user to enter a number then print it
let number = prompt("Enter a number:");
console.log("Question 1 Output:", number);

// 2. Write a program that takes a number from the user then prints 'yes' if that number can divide by 3 and 4, otherwise print 'no'
let num = prompt("Enter a number:");
if (num % 3 === 0 && num % 4 === 0) {
    console.log("Question 2 Output: Yes");
} else {
    console.log("Question 2 Output: No");
}

// 3. Write a program that allows the user to insert 2 integers then print the max
let num1 = prompt("Enter the first number:");
let num2 = prompt("Enter the second number:");
let max = num1 > num2 ? num1 : num2;
console.log("Question 3 Output: Max:", max);

// 4. Write a program that allows the user to insert an integer then print 'negative' if it is negative number, otherwise print 'positive'
let numInput = prompt("Enter a number:");
if (numInput < 0) {
    console.log("Question 4 Output: Negative");
} else {
    console.log("Question 4 Output: Positive");
}

// 5. Write a program that takes 3 integers from user then print the max element and the min element
num1 = prompt("Enter the first number:");
num2 = prompt("Enter the second number:");
let num3 = prompt("Enter the third number:");

let maxElement = Math.max(num1, num2, num3);
let minElement = Math.min(num1, num2, num3);

console.log("Question 5 Output: Max element =", maxElement);
console.log("Question 5 Output: Min element =", minElement);

// 6. Write a program that allows the user to insert an integer then check if the number is even or odd
let numEvenOdd = prompt("Enter a number:");
if (numEvenOdd % 2 === 0) {
    console.log("Question 6 Output: Even");
} else {
    console.log("Question 6 Output: Odd");
}

// 7. Write a program that takes a character from user then if it is vowel (a, e, i, o, u), print 'vowel', otherwise print 'consonant'
let char = prompt("Enter a character:").toLowerCase();
if ("aeiou".includes(char)) {
    console.log("Question 7 Output: Vowel");
} else {
    console.log("Question 7 Output: Consonant");
}

// 8. Write a program that allows users to insert an integer then print all numbers between 1 to that number
let numRange = prompt("Enter a number:");
for (let i = 1; i <= numRange; i++) {
    console.log(`Question 8 Output: ${i}`);
}

// 9. Write a program that allows the user to insert a number then print a multiplication table up to 12
let tableNum = prompt("Enter a number:");
for (let i = 1; i <= 12; i++) {
  console.log(`Question 9 Output: ${tableNum * i}`);
}

// 10. Write a program that allows the user to insert an integer then print all even numbers between 1 to this number
let numEven = prompt("Enter a number:");
for (let i = 2; i <= numEven; i += 2) {
    console.log(`Question 10 Output: ${i}`);
}

// 11. Write a program that takes two integers and print the power (exponentiation) of the first number raised to the second
let base = prompt("Enter base number:");
let exponent = prompt("Enter exponent number:");
let power = Math.pow(base, exponent);
console.log("Question 11 Output:", power);

// 12. Write a program to enter marks of five subjects and calculate total, average, and percentage
let marks = [];
for (let i = 0; i < 5; i++) {
    marks.push(prompt(`Enter marks for subject ${i + 1}:`));
}

let totalMarks = marks.reduce((acc, curr) => acc + Number(curr), 0);
let averageMarks = totalMarks / 5;
let percentage = (totalMarks / 500) * 100;

console.log("Question 12 Output: Total marks =", totalMarks);
console.log("Question 12 Output: Average Marks =", averageMarks);
console.log("Question 12 Output: Percentage =", percentage);

// 13. Write a program to input month number and print the number of days in that month
let month = prompt("Enter month number (1-12):");
let daysInMonth;
switch (month) {
    case "1": case "3": case "5": case "7": case "8": case "10": case "12":
    daysInMonth = 31;
    break;
    case "4": case "6": case "9": case "11":
    daysInMonth = 30;
    break;
    case "2":
    daysInMonth = 28; // Not considering leap year for simplicity
    break;
    default:
    daysInMonth = "Invalid month number";
}

console.log("Question 13 Output: Days in Month:", daysInMonth);

// 14. Write a program to input marks of five subjects and find the grade
let marksInput = [];
for (let i = 0; i < 5; i++) {
    marksInput.push(prompt(`Enter marks for subject ${i + 1}:`));
}

let totalScore = marksInput.reduce((acc, curr) => acc + Number(curr), 0);
let percentageScore = (totalScore / 500) * 100;
let grade;

if (percentageScore >= 90) {
    grade = "A";
} else if (percentageScore >= 80) {
    grade = "B";
} else if (percentageScore >= 70) {
    grade = "C";
} else if (percentageScore >= 60) {
    grade = "D";
} else if (percentageScore >= 40) {
    grade = "E";
} else {
    grade = "F";
}

console.log("Question 14 Output: Grade =", grade);

// ******************************** Switch Case Questions ********************************

// 15. Total number of days in a month using switch case
let monthSwitch = prompt("Enter month number (1-12):");
switch (monthSwitch) {
    case "1": case "3": case "5": case "7": case "8": case "10": case "12":
    console.log("Question 15 Output: 31 days");
    break;
    case "4": case "6": case "9": case "11":
    console.log("Question 15 Output: 30 days");
    break;
    case "2":
    console.log("Question 15 Output: 28 days");
    break;
    default:
    console.log("Question 15 Output: Invalid month number");
}

// 16. Check if an alphabet is vowel or consonant using switch
let charSwitch = prompt("Enter a character:").toLowerCase();
switch (charSwitch) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
    console.log("Question 16 Output: Vowel");
    break;
    default:
    console.log("Question 16 Output: Consonant");
}

// 17. Find maximum between two numbers using switch case
let num1Switch = prompt("Enter the first number:");
let num2Switch = prompt("Enter the second number:");
let maxSwitch;
switch (true) {
    case (num1Switch > num2Switch):
    maxSwitch = num1Switch;
    break;
    case (num1Switch < num2Switch):
    maxSwitch = num2Switch;
    break;
    default:
    maxSwitch = "Both numbers are equal";
}
console.log("Question 17 Output:", maxSwitch);

// 18. Check if a number is even or odd using switch case
let numEvenOddSwitch = prompt("Enter a number:");
switch (numEvenOddSwitch % 2) {
    case 0:
    console.log("Question 18 Output: Even");
    break;
    default:
    console.log("Question 18 Output: Odd");
}

// 19. Check whether a number is positive, negative, or zero using switch case
let numSignSwitch = prompt("Enter a number:");
switch (true) {
    case (numSignSwitch > 0):
    console.log("Question 19 Output: Positive");
    break;
    case (numSignSwitch < 0):
    console.log("Question 19 Output: Negative");
    break;
    default:
    console.log("Question 19 Output: Zero");
}

// 20. Create a Simple Calculator using switch case
let num1Calc = prompt("Enter the first number:");
let num2Calc = prompt("Enter the second number:");
let operation = prompt("Enter operation (+, -, *, /):");
let result;
switch (operation) {
    case "+":
    result = Number(num1Calc) + Number(num2Calc);
    break;
    case "-":
    result = num1Calc - num2Calc;
    break;
    case "*":
    result = num1Calc * num2Calc;
    break;
    case "/":
    result = num1Calc / num2Calc;
    break;
    default:
    result = "Invalid operation";
}
console.log("Question 20 Output:", result);
