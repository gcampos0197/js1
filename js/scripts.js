// let body =
// document.getElementsByTagName('body'); //document refrences the DOM(object): '.'means youre attaching a method to the DOM. This will return an array
// console.log(body[0]);
//
// let classes =
// document.getElementsByClassName('my-header');
// console.log(classes);
//
// let id =
// document.getElementById('my-paragraph');
// console.log(id);
//
// //newer methods:
// let tag =
// document.querySelector('body') //query select9or will only return one element; looking for a tag put in tag name
// console.log(tag);
//
// let myClass =
// document.querySelector('.my-header');
// console.log(myClass);
//
// let myId =
// document.querySelector('#my-paragraph');
// console.log(myId);
//
// //second newer method:
// let tags =
// document.querySelectorAll('body');  //querySelectorAllwill alwasy retun array with everything in that tag. written the same as the other ones for tags, classes and Ids.


// Let's try it out!
// * 		Create a function that queries the DOM for the body tag using all of these methods. Log the results to your console.
// * 		The function should take 2 arguments: the DOM selector method the user wants to employ and the name of the DOM selector to be searched for.

// function queryDom(methodName, element) {
//   switch(methodName.toUpperCase()){
//     case 'getelementsbytagname': // do this for all of them - class, id
//       document.getElementsByTagName(element); //do this for all of them
//       break;//do this for all of them
//     case 'getelementsbyclassname':
//       document.getElementsByClassName(element);
//         break;
//     case 'getelementbyid':
//       document.getElementById(element);
//         break;
//     case 'query selector';
//       document.querySelector(`.${element}`);
//         break;
//       case 'id':
//         document.querySelector(`#${element}`));
//         break;
//       default:
//         break;
//   }
// };
// console.log(tags, 'try it out');

// function queryDom(methodName, element) {
//   switch(methodName.toLowerCase()) {
//     case 'getelementsbytagname':
//       console.log(document.getElementsByTagName(element));
//       break;
//     case 'getelementsbyclassname':
//       console.log(document.getElementsByClassName(element));
//       break;
//     case 'getelementbyid':
//       console.log(document.getElementById(element));
//       break;
//     case 'queryselector':
//       switch(requestQuerySelectorType()) {
//         case 'class':
//           console.log(document.querySelector(`.${element}`));
//           break;
//         case 'id':
//           console.log(document.querySelector(`#${element}`));
//           break;
//         default:
//           console.log(document.querySelector(element));
//           break;
//       }
//       break;
//       case 'queryselectorall':
//       switch(requestQuerySelectorType()) {
//         case 'class':
//           console.log(document.querySelectorAll(`.${element}`));
//           break;
//         case 'id':
//           console.log(document.querySelectorAll(`#${element}`));
//           break;
//         default:
//           console.log(document.querySelectorAll(element));
//           break;
//       }
//       break;
//     default:
//       break;
//   }
// };


//Event Listener

let myClass = document.querySelector('.my-header');

myClass.addEventListener(
  'click', //first argument
  e => { //second arg (e:stands for event) CALLBACK function that is beind defined
    // console.log(e, 'this is the event');
    alert('you clicked on me!');
  }
)

//TRY IT OUT
let clickButton= document.querySelector('.my-button');
let changeDivColor= document.querySelector('.tryitout');
let h1 = document.querySelector('.myheader');

clickButton.addEventListener(
  'click', //first argument
  e => { //second arg (e:stands for event) CALLBACK function that is beind defined
    // console.log(e, 'this is the event');
    alert('you clicked my button!');
  }
)

changeDivColor.addEventListener('mouseenter', e => {
  e.target.style.backgroundColor = "teal"; //hey for this event target, the style file and the backgroundcolor
    console.log(e);
  }
)

h1.addEventListener('mouseleave', e => {
  e.target.style.color = "#00ffff"; //hey for this event target, the style file and the backgroundcolor
    console.log(e);
  }
)

//change text of button
clickButton.addEventListener('click', e => {
  e.target.textContent = "text has changed!";
});//first argument
