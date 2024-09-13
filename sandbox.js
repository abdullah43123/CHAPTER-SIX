// CHAPTER 12 & 13

//  QUESTION 1 START

let check_type = prompt("Write any data type I will give you the answer")

if (check_type == Number(check_type)) {
    console.log("This is a number");
} else if (check_type == String(check_type)) {
    console.log("This is a string");
} else if (check_type === Boolean(check_type)) {
    console.log("That's a boolean number");    
} else {
    console.log("Undefined")
}

//  QUESTION 1 COMPLETE

//  QUESTION 2 START

let int1 = (Number(prompt("Write any integer")));
let int2 = (Number(prompt("Write any integer")));

if (int1 == int2) {
    console.log(int1 + int2)    
} else {
    console.log("You must write a number")
}

//  QUESTION 2 END

//  QUESTION 3 START

let check_0 = prompt("Write any number");

if (check_0 < 0 ) {
    console.log("It is a negative value");
} else if (check_0 == 0) {
    console.log("The value is 0");
} else {
    console.log("It is a positive value");
}

//  QUESTION 3 END

//  QUESTION 4 START

let letter = prompt("Write any letter");

letter = letter.toLowerCase();
const vowels = ['a', 'e', 'i', 'o', 'u'];

if (vowels.includes(letter)) {
    alert(letter.toUpperCase() + " is a vowel.");
} else {
    alert(letter.toUpperCase() + " is a consonant.");
}

//  QUESTION 4 END

//  QUESTION 5 START

let password_1 = "classic1";
let password_2 = "classic2";

let check_password = prompt("Write a password");

if (password_1 == check_password || password_2 == check_password) {
    console.log("Correct Password!");
} else if (check_password == "" ) {
    console.log("Write any password")    
} else {
    console.log("Incorrect Password!");
}

//  QUESTION 5 END

//  QUESTION 6 START

let greeting;
let hour = 13;

if (hour < 18) {
    greeting = "Good Day";
    console.log(greeting);
} else {
    greeting = "Good Evening"
    console.log(greeting);
}

//  QUESTION 6 END

// QUESTION 7 START 

let time = (Number(prompt("Write any number between 0000 to 2359")));

if (time >= 0 && time < 1200) {
    alert("Good Morning")
} else if (time >= 1200 && time < 1700) {
    alert("Good Afternoon")    
} else if (time >= 1700 && time < 2100) {
    alert("Good Evening") 
} else if (time >= 2100 && time <= 2359) {
    alert("Good Night") 
}

// QUESTION 7 END
