// Q1
const x = 5;
console.log(-5 * 3);
console.log("JavaScript"+50);
console.log(17%5);
console.log(5%17);
console.log(5/10);
console.log(4==='4');
console.log(4!=5);
console.log(7<=8);
console.log("hello" + 50);
console.log(Math.ceil(x) - Math.floor(x));
console.log(Math.pow(x, 2));

// Q2
let number = prompt("Enter a random number")
alert("The number is " + number)

let num1 = prompt("Enter the first number")
let num2 = prompt("Enter the second number")
// Q3
if (num1 > num2)
    alert("Ascending order: " + num1 + ">" + num2);
else
    alert("Ascending order: " + num2 + ">" + num1);

// Q4
if (num1 > num2)
    alert("The largest number is: " + num1);
else
    alert("The largest number is: " + num2);

// Q5
let sum = +num1 + +num2;
alert("The sum of the two numbers is " + sum)

// Q6
let letterNumber = +prompt("enter a number")
switch (letterNumber) {
    case 1:
        letterNumber="ONE"
        break;
    case 2:
        letterNumber="Two"
        break;
    case 3:
        letterNumber="THREE"
        break;
    case 4:
        letterNumber="FOUR"
        break;
    case 5:
        letterNumber="FIVE"
        break;
    case 6:
        letterNumber="SIX"
        break;
    case 7:
        letterNumber="SEVEN"
        break;
    case 8:
        letterNumber="EIGHT"
        break;
    case 9:
        letterNumber="NINE"
        break;
    default:
        letterNumber="PLEASE TRY AGAIN"
        break;
}
alert(letterNumber);