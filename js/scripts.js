// let object1 = {
//     firstName: "Ryeker",
//     lastName: "Herndon"
// }; //Note that this is only one way to make an object!

// let object1 = {}
// let object2 = new object() //another way

// let person = {
//   firstName: "gloria",
//   lastName: "campos",//obejcts have properties "firstName": keys and values
//   age: 26,
//   favorites: ["cookies", "pizza"],
//   description: {
//     hair: "brown"
//   }
// }

//how to enter objects if start with an empty object
// object1.food = "pizza";//object1 is object want to insert key "food" into: DOT NOTATION
// object1['color'] = 'pink'; //adding something else to object1: BRACKET NOTATION these two do the same thing, just depends on prefrence

//FOR IT
// for(let key in person){//this gives us everything in the "person" object; key is a let variable- it can be anything you want
//   // console.log('key', key)
//   console.log(person[key])
// }

//FOR...OF: better for arrays
// for(let [key, value] of Object.entries(person)){ //Object.entries turns things in an array
//   console.log(key, value, 'Object.entries')
// }

//Cloning object and adding to it -
// let newObject = Object.create(object1);
// newObject.flower = 'rose';
// console.log(newObject);
// newObject.color = 'yellow';
// console.log(newObject, 'newObject'); //reflects change
// console.log(object1, "object1"); //object stays the same

//PROTOTYPES - everything in JS inherits from prototype and you can manipulate it any way you want
let recipe = {
  flour: '20 oz',
  eggs: 3,
  vanilla: true,
  rum: 'hella'
};
//prototype you used to mke new object is the prototype object
console.log(recipe);
let clone = Object.create(recipe);
console.log(Object.getPrototypeOf(clone), "this is the prototype");

let vehicle = {
  wheels: 4,
  windows: null,
  engineSize: '4 cylinder',
  doors: 4
};

let motorvehicle = Object.create(vehicle);
motorcyle.wheels = 2;

//1. Create new instances of a String, an Array, an Object, a Boolean, and a Number.
//2. In your console, look up the __proto__ of each of these.
//3.Notice the constructor member of the prototype? That is the function that JS uses to create our vars when we call 'new' on them. Pretty AWESOME!

let stringExample = new String("hello there");
let numberEample = new Number(94);
let boolExample = new Boolean(true);
let arrayExample = new Array(['cheese', 222, [2]]);
let objectExample = new Object({cheeseIsGood: true});

function Spaceship(rockets fluxCapacitator, pilot, blasters, sheild, landingGear) {
  this.rockets = rockets;
}

//setTimeout
let myTimeout= setTimeout(() => {
  alert(advertisment);
} , 5000);

let cancelbtn = document.forms.newUserForm.cancelTimeout;
