//TERNARIES

// let inside = true;

// if(inside){
//   console.log('i am inside')
// } else {
//   console.log('i am not inside')
// }

//condition - put ? to end and write a expression1(true): expression 2(false)
//syntx: inside ? "i am inside" : "i am not inside" - tinerary?

// let example2 = inside ? "i am inside" : "i am not inside"
// // console.log(example2)
//
// let number = 15;
//
// number > 10 ? "number is greater" : "number is less than"
// console.log(number > 10 ? "number is greater" : "number is less than")
//
//
// let name = false;
// let email = true;


//Syntax Example1
// if (name) {
//   alert('i have name')
// } else if (email) {
//   alert('i have email')
// } else {
//   console.log('i have none')
// }
//Syntax Example2
// name ? 'i have name' : email ? 'i have email' : 'i have none'
// console.log(name ? 'i have name' : email ? 'i have email' : 'i have none')




// let iAmHungry = true;
// let money = 5;
// //example 1:
// let hungry = iAmHungry ? ((money > 10) ? 'i am hungry and i have more than 10' : 'i am hungry and i have less than 10') : ((money > 10) ? 'i am not hungry and i have more than 10' : 'i am not hungry and i have less than 10')
// console.log(hungry)
//example 2:
// if (iAmHungry) {
//   if (money > 10) {
//     console.log('i am hungry and i have more than 10')
//   } )
//   else {
//     console.log('i am hungry and i have less than 10')
//   }
// )} else {
//   if (money > 10){
//     console.log('i am not hungry and i have more than 10')
//   }
//   else {
//     console.log('i am not hungry and i have less than 10')
//   }
// }

//lets try it again
// let iAmWearingYellow = false
// iAmWearingYellow = "yes" : "no";
//
// let number = 23;
// let num = (number = 23 || iAmWearingYellow) ? "number = 23 and yellow" : "number not 23 and/or not yellow"
// console.log(num)

//ARRAYS : can have any data type inside of an array
// let arr = ['javascript', 100, [], {}];
// console.log(arr[0])

//if trying to get and index that doesnt exist it gives you an "undefined"


//TRY IT OUT : declare a var and define it with an array containing:
// * 		Your favorite movie of 2017
// * 		Your lucky number
// * 		Whether or not you are a Star Wars fan (using a Boolean)
// * 		The year you graduated high school
// * 		console.log the var and the length of the array.

// let favs = ['Inglorious Bastards', 33, false, 2010];
// console.log(favs, favs.length)
//
//CHECK IF AN ARRAY
// let favs = ['Inglorious Bastards', 33, false, 2010];
// console.log(Array.isArray(favs))

//HOW TO ADD SOMETHING TO THE END OF THE ARRAY
// let favs = ['Inglorious Bastards', 33, false, 2010];
// console.log(Array.isArray(favs));
// favs.push('pizza');
// console.log(favs);

//HOW TO ADD SOMETHING TO THE BEGGINING OF THE ARRAY
// let favs = ['Inglorious Bastards', 33, false, 2010];
// console.log(Array.isArray(favs));
// favs.unshift('pizza');
// console.log(favs);

//HOW TO CONSOLE LOG (ACCESS) THE LAST MEMBER OF THE ARRAY
// let favs = ['Inglorious Bastards', 33, false, 2010];
// console.log(favs[favs.length - 1]);

//HOW TO CONSOLE LOG (ACCESS) THE SECOND TO LAST MEMBER OF THE ARRAY
// let fav = ['Inglorious Bastards', 33, false, 2010];
// console.log(fav[favs.length - 2]);

//POP : the inverse of push - remove an item
// let fav = ['Inglorious Bastards', 33, false, 2010];
// fav.push('pizza') //adds to the end of the array
// console.log(fav);
// fav.pop();//this removes the last one
// console.log(fav.pop());



//pop(removes the last item in the array) and shift(removes the first item in the array) give you the option to save that item in the variable
// let fav = ['Inglorious Bastards', 33, false, 2010];
// fav.push('pizza') //adds to the end of the array
// console.log(fav);
// fav.pop();//this removes the last one
// console.log(fav.pop());
//
// const = fav.shift(); //removes the first item in the array and returns that removed item to you as your variable 'first'
// console.log(fav, first);


//SPLICE : allows you to do multiple things at the same time - things in square brackets are optional
// let fav = ['Inglorious Bastards', 33, false, 2010];
// //want to remove everything starting at index 2 ; first way to use splice
// // fav.splice(2);
// // console.log(fav, 'this is the result of splice')
// //delete count : how many members of this array do you want to remove - represented by the second number
// // fav.splice(2, 1);
// // console.log(fav, 'this is the result of splice')
// //below: starting at the second index it will remove that index and replace with third value
// console.log(fav, 'before splice') // added for comparison before splice
// let removedItems = fav.splice(2, 1, true);
// console.log(fav, 'the result of splice')
// console.log(removedItems, 'the thing we removed')

// //SLICE : GIVES YOU A COPPY OF THE Array
// let copy = fav.slice()
// console.log(copy, 'result of slice')
//Finds only the first index of an item of the array - wont keep looking once it is found
// console.log(fav.indexOf("Inglorious Bastards"))
//find the last index of a member of the array
// console.log(fav.lastIndexOf("Inglorious Bastards"))

//REVERSE ORDER OF ARRAY
// let fav = ['Inglorious Bastards', 33, false, 2010];
// fav.reverse();
// console.log(fav)

//NESTED ARRAYS
// const products =[['blanket', 12.99, 'the best blanket'], ['rattle', 4.99, 'it rattles'], ['diapers', 6.99, 'they catch doo doo']]
//trying to access price : accessing the first array [0] and the second item [1] in that array
// products[0][1];
// alert(products[0][1])
//trying to access price : accessing the first array [0] and the second item [1] in that array
// const products =[['blanket', [12.99, 10.99], 'the best blanket'], ['rattle', 4.99, 'it rattles'], ['diapers', 6.99, 'they catch doo doo']]
// alert(products[0][1][1]);


//TRY IT OUT
// In your scripts.js file, create 5 arrays, each with one of your top 5 movies' title and the main character's name
// 1. Add all of these arrays to a final array named favoriteMovies
// 2. Create an array with just the titles of your favorite movies and alert it
// 3. Create another array with your favorite and least favorite of the top 5 and console.log it.
// 4. Check the length of your favoriteMovies array by alerting it.

let favFood = ['stir fry', 'veggies'];
let secondFavFood = ['lentil soup', 'lentils'];
let thirdFaveFood = ['lasagna', 'pasta'];
let fourthFavFood = ['pizza', 'cheese'];
let fifthFavFood = ['sandwiches', 'bread'];

let favoriteFoods = [];

favoriteFoods.push(favFood, secondFavFood, thirdFaveFood, fourthFavFood, fifthFavFood);
console.log(favoriteFoods);

let foods = [];
foods.push(favoriteFoods[0][0], favoriteFoods[1][0], favoriteFoods[2][0], favoriteFoods[3][0], favoriteFoods[4][0]);
alert(foods);

let favLeastFavFood = [];
favLeastFavFood.push(favoriteFoods[2][0], favoriteFoods[3][0]);
console.log(favLeastFavFood);

alert(favoriteFoods.length);
