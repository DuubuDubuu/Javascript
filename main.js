//constructer function
function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob);
  
}

//instantiate objects
const person1 = new Person('John', 'Doe', '4-3-1980');
const person2 = new Person('Lance', 'Montiague', '5-23-2000');

console.log(person2);



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


 

*/

