// let button =
// document.querySelector('button');
// let div = document.querySelector('div');
// const body = document.querySelector('body');
// button.addEventListener('click', e => {
//   e.target.textContent = "Goodbye cats!"
// });
//
// div.innerHTML = "<p>dont really want to use this, user can send you malicious software but can be used to generate things example, this is used in wordpress to generate a button when you drag an drop</p>";
//
//
// //create element
// let newH1 = document.createElement('h1');
// console.log(newH1);
// newH1.textContent = "login here!" //.textContent adds text
// // body.appendChild(newH1)//appendChild adds to your element
//
// div.classList.add('text-center');//className is good when making new element
// body.insertBefore(newH1, div)//overall patrent you want to insert element into, calling parent (body), what you are adding/new node (newH1), refrence node (div)
//
// //adding text color, calling the red-text color that is declared in CSS file
// div.id = "red-text";
//
// div.addEventListener('click', e => {
//   div.classList.toggle('text-center');
//   div.classList.replace('blue-background', 'green-background');
// });
//
// //SETTING ATTRIBUTES
// //creating element
// myImg =
// document.createElement('img');
// //set src attribute
// myImg.setAttribute('src', 'https://wishfarms.com/wp-content/uploads/2015/09/berries_main_image2.jpg') //find parent element to attach it to
// //add the img to the page
// div.appendChild(myImg);//attached to div
// console.log(myImg);

//FIZZBUZZ
//Write a program that prints on the page all numbers from 1 to 100. For multiples of three print “Fizz” instead of the number. For multiples of five print “Buzz” instead of the number. For numbers which are multiples of both three and five print “FizzBuzz”.

let body = document.querySelector('body'); //refrence to body tag
//for loop start at 1: i = 1.
for (let i = 1; i <= 100; i++) { // looping over for every number from 1-100
  let p = document.createElement('p'); //crating a new p tag for every number inside that loop
  if(i % 3 === 0 && i % 5 === 0) { //checking if multiple of 3 = zero and ....if true placing tect into p tag
    p.textContent = 'FizzBuzz'; //can also use .innerText
  } else if(i % 5 === 0) { // same thing just checking diff conditions
    p.textContent = 'Buzz';
  } else if(i % 3 === 0) {
      p.textContent = 'Fizz';
    } else {
      p.textContent = i; //if all conditions false, not divisible by 3 or 5 then just writw number
    }
    body.appendChild(p); //taking element and adding it to body tag
}
