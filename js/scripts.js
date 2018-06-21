// console.log(document.forms.login.email); //refers to emiail input in html
// let emailInput = document.forms.login.email;
// let myPTag = document.querySelector("#data_binding");
// document.addEventListener('keyup', e => {
//   console.log(e.keyCode);
// document.addEventListener('keyup', e => {
//   myPTag.textContent = e.target.value;
// });
// })

//how to display data that is being inputd by user
// let emailInput = document.forms.login.email;
// let myPTag = document.querySelector("#data_binding");
// document.addEventListener('keyup', e => {
//   myPTag.textContent = e.target.value;
// });

// let passwordInput = document.forms.login.password;
// let emailInput = document.forms.login.email;
// let myPTag = document.querySelector("#data_binding");
// let submit = document.forms.login.submitBtn;
//
// emailInput.addEventListener('keyup', e => {
//   myPTag.textContent = e.target.value;
// });
//
// submit.addEventListener('click', e => {
//   if(passwordInput.value !== '' || emailInput.value === ''){
//     submit.disable = false;
//   }
// }) //dont let form submit if neither of these are true: meaninf they didnt fill out email and password


//THIS .call
// let user = {
//   name: 'Henry'
// };
// function logMyName() { //definition
//   console.log(user.name, this.user.name); //
// }
// logMyName(); //call site
// let user = {
//   name: 'Henry',
//   password: 1234,
//   status: "active"
// };
//
// let guest = {
//   name: 'Guest',
//   password: undefined,
//   status: "inactive"
// };
// function logMyName(greeting) { //definition
//   console.log(this.name, this.password);
//   alert(`${greeting}, ${this.name}!`);
// }
// logMyName.call(user,['hello']); //changes "this" to user, will always be the first arg in ()
// logMyName.call(guest,['sign up']);


// //inmplicit binding
// let user = {
//   name: 'Henry',
//   password: 1234,
//   status: "active"
// };
//
// let guest = {
//   name: 'Guest',
//   password: undefined,
//   status: "inactive"
// };
//
// let newScope = {
//   name: "peter piper",
//   password: "bag o peppers",
//   instrument: "pipes",
//   context: logMyName
// };
//
// newScope.context(); //implicit: works if your custom function "logMyName" is attached to the scope "context: logMyName"
//
// function logMyName(greeting) { //definition
//   console.log(this.name, this.password);
//   alert(`${greeting}, ${this.name}!`);
// }
// logMyName.call(user,['hello']); //changes "this" to user, will always be the first arg in ()
// logMyName.call(guest,['sign up']);

//Scope example 1
// let classScore = 90; // cannot see inside scopeOne or scopeTwo
//
// const scopeOne = { // cannot see inside scopeTwo
//   classScore: 75,
//   scopeTwo: {
//     classScore: 50
//   }
// };
//
// console.log(classScore); //outermost scope
// console.log(scopeOne.classScore);
// console.log(scopeOne.scopeTwo.classScore);

//scope example 2
let classScore = 90; // cannot see inside scopeOne or scopeTwo

{ // cannot see inside scopeTwo
  let classScore = 75;
  console.log(classScore, 'first scope');
{
  let classScore = 50;
  console.log(classScore, 'second scope');
  }
};

console.log(classScore, 'global scope');//outermost scope will log out 90 because inner scopes do not affect outer scopes
