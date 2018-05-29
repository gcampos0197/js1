// var myName = "Ryeker";
//
// alert('Hello, ' + myName + '!'); //ES5
//
// alert(`Hello, ${myName}!`); //ES6

//if name not true and age is true
// let name = "";
// let age = 26;
//
// if(!name && age) {
//   alert('one exists');
// }

// let name = "";
// let age = 26;
//
// if(!name && age) {
//   alert('one exists');
// }


// const age = 32;
// const stringAge = '32';
//
// if(age == stringAge) {
//   alert('they\'re the same!');
// }
//
// let objectOne = {
//   name: "Gloria"
// };
//
// let objectTwo = {
//   name: "Gloria"
// };
//
// alert(objectOne == objectTwo);

//logs false; because javascript saves everything, except objects, as a refrence. javascript saves objects in different places and they will never equal eachother even if they have the same value. JS only does this to data type objects.


//TRY IT OUT DAY 3
// var myString = "My String";
// var objString = new String("My String");
// alert(myString == objString);

//INCREMENT
// let limit = 12;
// console.log(limit); //logs 12
// limit = limit +1; //also written as limit++; when one do add one
// console.log(limit); // logs 13
// const unpperlimit = 23;

// //ASSIGNMENT OPERATOR
// let limit = 12;
// console.log(limit); //logs 12
// limit = limit +7; //also written as limit += 7; when one do add one
// console.log(limit); // logs 13
// const unpperlimit = 23;

// //NaN
// let myNumber = "ted" ;
// console.log(myNumber++); //logs NaN

// HOW TO CHECK IS SOMETHING IS NaN
// let myNumber = "cheese";
// // console.log(isNaN(myNumber)); // logs true: cheese is not a number
// console.log(!isNaN(myNumber)); // logs false: cheese is not, not a number

//TRY IT OUT DAY 3
// let firstValue = parseInt(prompt("Give me a number between 1 and 10.", "10"));
// let secondValue = parseInt(prompt("Give me a number between 5 and 10.", "10"));
// alert(firstValue + secondValue);

//IF/ELSE STATEMENT WITH MULTIPLE CONDITIONS
// let firstValue = parseInt(prompt("Give me a number between 1 and 10.", "10"));
// let secondValue = parseInt(prompt("Give me a number between 5 and 10.", "10"));
// alert(firstValue + secondValue);
//
// if(firstValue > secondValue) {
//   alert("first value is larger than second number")
// } else if(firstValue === secondValue) {
//   alert("theyre the same")
// } else if(firstValue < secondValue) {
//   alert("your first number is smaller that your second number")
// }  else{
//   alert("something went wrong...")
// }

//SWITCH STATEMENT
// let firstName = prompt('What is your first name?', 'Joe');
//
// switch(firstName) {
//   case 'Joe':
//     alert('Hello, Joe!');
//     break;
//   case 'Jone':
//     alert('Hello, John!');
//     break;
//   default:
//     alert('Nice name!');
//     break;
// }

// let firstName = prompt('What is your first name?', 'Joe');
//
// switch(firstName.toLowerCase()) {
//   case 'Joe':
//     alert('Hello, Joe!');
//     break;
//   case 'Jone':
//     alert('Hello, John!');
//     break;
//   default:
//     alert('Nice name!');
//     break;
// }
let personalityByColor = confirm('What does your favorite color say about you. Continue to find out!');
let userName = prompt('Let me introduce myself, I am Bit. I\'m the the little person that lives in your copmputer, what\'s your name?');
let favColor = prompt(`Hi, ${userName} What is your favorite color?`, 'Red, blue, green, grey, yellow, white, purple, orange, black or brown.');
switch(favColor) {
  case 'red':
    alert(`${userName}, according to Phsychology Today, those who love red live life to the fullest and are tenacious and determined in their endeavors. `)
    break;
  case 'blue':
    alert(`${userName}, this color is often associated with feelings of serenity, so those who love it are often able to find peace and tranquility in places where others do not.`)
    break;
  case 'green':
    alert(`${userName}, although you might think loving green means you love nature, according to color psychology, those who love green desperately want to feel secure in both their finances and relationships.`)
    break;
  case 'grey':
    alert(`${userName}, somewhere between black and white, grey is the color that just can't commit, and the same goes for those who love it.`)
    break;
  case 'yellow':
    alert(`${userName}, it takes a certain type of personality to prefer yellow to all the other colors. It involves a level of optimism that most people over the age of 10 just don't have.`)
    break;
  case 'white':
    alert(`${userName}, according to Phsychology Today, people who like white are often organized and logical and don't have a great deal of clutter in their lives.`)
    break;
  case 'purple':
    alert(`${userName}, according to Phsychology Today, you are artistic and unique.  You have a great respect for people but at times can be arrogant.`)
    break;
  case 'orange':
    alert(`${userName}, you are warm, optimistic, extroverted and often flamboyant. You are friendly, good-natured and a generally agreeable person.`)
    break;
  case 'black':
    alert(`${userName}, according to Phsychology Today, people who choose black as their favorite color are often artistic, sensitive and are careful with the details they share about their life.`)
    break;
  case 'brown':
    alert(`${userName}, those who love brown, have no need for extravagance. They like things as they are, and can do without any complications that come with change. They're reliable, frugal, direct, and being spur of the moment is just not in their personality.`)
    break;
  default:
    alert(`Sorry, ${userName}! I have never heard of that color!`)
    break;
}
let personalityByColorEnd = confirm('Until next time, bye!');
