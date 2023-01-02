const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();

  if(nameInput.value === '' || emailInput.value === ''){
    msg.classList.add('error');
    msg.innerHTML = 'please enter all fields';

    setTimeout(() => msg.remove(), 3000);
  }
  else{
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`))
    console.log('success')
    console.log(nameInput.value, emailInput.value)

    userList.appendChild(li);
    
    // clearfields
    nameInput.value = '';
    emailInput.value = '';
  }
}




/*
const fruits = ['Mango','Peach','Guava'];
fruits.push('Apple')
fruits.pop()


console.log(fruits);
-----------------------
const test1 = 'Lance Montiauge';
const test2 = 30;

console.log(`My Name is ${test1.toLocaleUpperCase()} and my age is ${test2}`)
console.log(test1.length);

----------------------- object literals
const { firstName, lastName, address:{city}} = person;
console.log(city);

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  hobbies: ['music', 'movies','sports'],
  address: {
  street: '50 main st',
  city: 'Boston',    
  state: 'MA'
  }
}

person.email = 'john@gmail.com';

console.log(person);

----------------------- to convert js format to json format
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

------------------------- Looping

for(let i = 0; i <10; i++){
console.log(i);
}

// while loops
let i = 0;
while(i < 10){
  console.log(`Whole Loop Number: ${i}`)
  i++;
}

------------------- looping an array
there is how to create multiple array with properties
const todos = [
  {
    id: 1,
    text: 'Take out trash',
    isCompleted: true
  },
  {
    id: 2,
    text: 'Meeting with Boss',
    isCompleted: true
  },
  {
    id: 3,
    text: 'Dentist Appt',
    isCompleted: false
  }
];
 
for (let i = 0; i < todos.length; i++) {
  console.log(todos[i].text); todos is the array, i is the
  number of the array counting til its maximun content which
  is 3
}

for(let todo of todos){
  console.log(todo.text);
} is an easier way to loop an array, the 'todo' word is the
variable to be called out in the method. but you need to pass through data by calling todos so it will have data


------------------- high order array methods


/todos.forEach(function(todo){
  console.log(todo);
});



const todoID = todos.map(function(todoID){
  return todoID.id;
});

console.log(todoID);



const todoCompleted = todos.filter(function(todo){
  return todo.isCompleted === true;
});

console.log(todoCompleted);

-------------------- chain method of high order array map and filter

const todoCompleted = todos.filter(function(todo){
  return todo.isCompleted === true;
}).map(function(todo){
  return todo.text;
})

console.log(todoCompleted);

--------------------- condition statements

const x = 10;

if(x == 10){
console.log('x is = to 10');
} else if (x > 10){
console.log('x is greater than 10');
}else{
console.log('x is less than 10');
}

&& and ||

const x = 6;
const y = 11;
if(x > 5 && y > 10){
console.log('x is more than 5 and y is more than 10');
}

TERNARY OPERATORS IN USE

const x = 10;

const color = x > 10 ? 'red' : 'blue';

console.log(color); ? means then, : means else
in a sentect if x is greater than 10 then color is red, else blue.


Switch Statements

const x = 10;

const color = x > 10 ? 'red' : 'blue';
refers to what will happen to the variable if its blue or red, red is greater than 10, and blue is less than 10. Thus
it will reflect to the conditions in the switch(color) statements. 

switch(color){
  case 'red':
    console.log('color is red');
    break;
  case 'blue':
    console.log('color is blue');
    break;
  default:
    console.log('color is NOT red or blue');
    break;
}


------------------------- Creating a Function
function addNum(num1, num2){
 console.log(num1 + num2); 
} create function with parameter of num1 and num2, it doest have data yet, even if it has a console.log method to display

you need to call out the function to pass through data to the parameters, you can do this by
addNum(4,5); now the data inside the parameter will now go
to the method and it adds it. showing the answer 9
if no number was putted in the parameter it will display
NaN which means not a number

syntax:
function addNum(num1, num2){  
  console.log(num1 +num2); 
}

addNum(4,5); 

another syntax for it using return as its way to equate the function

function addNum(num1, num2){
  return num1 + num2;
}

console.log(addNum(4,5));

 
-------------------------- Arrow Function
const addNum = (num1, num2) => num1 + num2;

console.log(addNum(5,4));

/todos.forEach(todo) => console.log(todo));
a way to use the arrow function to shortcut the syntax

uses arrow to go to the next step, without using curly brackets

----------------------------- Object Oriented Programming
constructer function creates a function that creates object with parameters(of data like name,dob,email, and etc.) to help avoid duplication of data, and to reuse it instead (the paramaters like name and dob in which if oop is not use you are required to create multiple objects with the same properties which is a bad practice.)
by avoiding duplication you do inheritance. like 
person1.firstName 

//constructer function
function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob);
 
}

Person.prototype.getBirthYear = function(){
  return this.dob.getFullYear();
}

Person.prototype.getFullName = function(){
  return `${this.firstName} ${this.lastName}`;
} prototype helps create clean methods without showing it 
to the original console, but instead inside the prototype category in the console. 

this property also helps create methods to grab data easily
like combining firstname and lastname and just call on 
.getFullName() method.

  

instantiate objects, this create new objects with data
to be passed on to the parameter, then to the properties to
display it inside the console.log
const person1 = new Person('John', 'Doe', '4-3-1980');
const person2 = new Person('Lance', 'Montiague', '5-23-2000');

console.log(person1.getFullName());
console.log(person1);
 

--------------------- Object Oriented Programming w/ classes
instead of object/function constructor

we use class instead of "function Person(){} basically
its the same, but we write it differently and prettier
instead of writing 'function Person()' we do 

class Person{ -- creating class name with parameters
  constructor (firstName, lastName, dob) -parameters 
  {
    this.firstName = firstName; - grab value to properties
  }
  // in here is where we create prototpye or methods
  like
  getBirthYear() {
    return this.dob.getFullYear(); 
  }
}
return grabs value to pass in getBirthYear() method 



this is the syntax for oop using classes
// class
class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
  }

  getBirthYear() {
    return this.dob.getFullYear();
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

  
//instantiate objects
const person1 = new Person('John', 'Doe', '4-3-1980');
const person2 = new Person('Lance', 'Montiague', '5-23-2000');

console.log(person1.getFullName());
console.log(person1);
 

---------------------- Document Object Model (DOM)
dom means document object model, we use selectors to select things from the dom and take elements and put them into variables and work with them.

windows object like windows.alert(); is the parent
object of the browser, it has alert function, fetch api to make http request and also the document function that we are gonna use to select from the dom.

you can do window.document.querySelector(); but since window object is already at the top, like the parent object, you only need to do document.querySelector('');


single element
always use querySelector('') or querySelectorAll(''); and someting getElementById('') AND THIS IS HOW WE SELECT THINGS FROM THE DOM

const form = document.getElementById('my-form');
console.log(form);

console.log(document.querySelector('h1'));


multiple element
querySelectorAll(); is recommended since its updated and do not need to convert it into an array since it is a nodelist not an html collection, the difference is that nodelist is similar to an array, and also can use array the highorderarraymethods like forEach, map, and filter
console.log(document.querySelectorAll('.item'))

 not recommended to use since thease are html collection in which array methods cant be use on them you need to manually convert it into an array to do array methods on them
console.log(document.getElementsByClassName('item'));

console.log(document.getElementsByTagName('li'));


======== array methods used in nodelist using querySelectorAll();
const items = document.querySelectorAll('.items');
//grabbing each items in the loop forEach
items.forEach((item) => console.log(item));

======== Edit by creating a variable that grabs into the dom using querySelector();

const ul = document.querySelector('.items');

this method removes the list in the page
ul.remove();

removes the last child in the list
ul.lastElementChild.remove();


this updates the first child element in the list to display hello.
ul.firstElementChild.textContent = 'hello';

this updates the seocnd child using the array or nodelist to select the second child, and using innertext as a substitute, you can also use textContent
ul.children[1].innerText = 'Brad';

this updates the last child by using html format to do html format text. it uses .innerHTML
ul.lastElementChild.innerHTML = '<h1>Hello</>' 

this updates the btn styles, you use .styles.properties
to update colors or make it dynamic, basically you can do it in css but in javascript we can make it more dynamic and update it in real-time.
const btn = document.querySelector('.btn');
btn.style.background = 'red';


========= making button works dynamically
first we create a variable, then grab from the dom using querySelector('.btn');
const btn = document.querySelector('.btn');

after creating the variable we create an eventListener
which basically means it waits for an event to occur,
it needs 2 things, first an event like 'click' and a function in which data will be pass through 'e'
to create and event listener you do addEventLister('','') after the variable

the syntax to make button click and show 'clicl' string is
btn.addEventListener('click', (e) => {
  e.preventDefault();
  console.log('click');
});

you can also do it without the arrow function which is
btn.addEventLister('click, function(e) {
  e.preventDefault();
  console.log('click');
})

you use e.prevent default to avoid console from disapearring too fast/ or basically cancels the event
it is useful when preventing it from submitting a form.

================= changing colors and adding classes
and htmltext into list

creationg of variable, grabs data using querySelector
const btn = document.querySelector('.btn');

adds eventListener which is click, and has the function
to change the form stylebackground, adds bg-dark class
to the body, and lastly changes the text in the last element child in the list using innerHTML to format it into h1 text.
btn.addEventListener('click', function(e){
  e.preventDefault()
  document.querySelector('#my-form').style.background = '#ccc';
  document.querySelector('body').classList.add('bg-dark');
  document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';
})


extra events are mouseover = when hovers to the button is triggers the event
and mouseout= when the mouse gets outside of the button the event triggers.

===================== Creating Simple User/Email creation  application List using button and DOMS

first we create the variables for use to use in the app
const myForm = document.querySelector('#my-form'); acts as the button 'submit'
since form and submit can be the same
const nameInput = document.querySelector('#name'); name input
const emailInput = document.querySelector('#email'); email input
const msg = document.querySelector('.msg'); the msg when displaying error
const userList = document.querySelector('#users'); prompt to the userList (Ul)

next we create the function when we submit it does several events
myForm.addEventListener('submit', onSubmit); onSubmit name of the function

function onSubmit(e) { this creates the events that will happen
 e.preventDefault();
 
 creating condition when submitting with no input, to prompt user to input name
and email
if(nameInput.value === '' || emailInput.value === ''){ condition empty string
    msg.classList.add('error'); adds 'error' class style into msg variable/class
    msg.innerHTML = 'please enter all fields'; displays error message using html
format

    setTimeout(() => msg.remove(), 3000); puts timer to remove msg after 3 secs
  }
  else{
const li = document.createElement('li'); this creates a list ('li') element using dom
li.appendChild(document.createTextNode(`${nameInput.value} : 
${emailInput.value}`)) this appends the value or the value is putted inside the
list element that was recently created using dom called (li)
    

    userList.appendChild(li); this appends the element list that was recently created
unto the unorderedlist element, basically the 'li' you have created before and  was
appended with name and email values was putted inside the unordered list element
    
    // clearfields
    nameInput.value = ''; this clears the form name
    emailInput.value = ''; this clears the email form
  } 
	
}  ending bracket for the myForm


The syntax without explanation is -------======

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();

  if(nameInput.value === '' || emailInput.value === ''){
    msg.classList.add('error');
    msg.innerHTML = 'please enter all fields';

    setTimeout(() => msg.remove(), 3000);
  }
  else{
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`))
    console.log('success')
    console.log(nameInput.value, emailInput.value)

    userList.appendChild(li);
    
    // clearfields
    nameInput.value = '';
    emailInput.value = '';
  }
}


*/

