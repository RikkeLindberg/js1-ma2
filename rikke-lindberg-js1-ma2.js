/* Question 1:
Create a function expression by assigning an anonmyous function to a variable 
called myFunctionExpression. 
The function should console log your name.*/
const myFunctionExpression = function() {
  console.log("Rikke Lindberg");
};

myFunctionExpression();

/* Question 2:
Select the input in the HTML below by its class. 
Add a click event listener. 
The callback function passed to the event listener should log the sentence I was clicked.

You can pass the function in directly, declare it and pass it in by its name 
or assign it to a variable and pass it in by the variable name.*/
const inputButton = document.querySelector(".btn");

function callAfterButtonClick() {
  console.log("I was clicked");
}

inputButton.addEventListener("click", callAfterButtonClick);

/*Question 3:
Select the input in the HTML below by its id. 
Add a keydown event listener. 
The callback function passed to the event listener should log the value of the key 
that was pressed. */
const textInput = document.querySelector("#firstName");

function callAfterAKeyIsPressed(event) {
  console.dir(event.key);
  console.log("A key was pressed down");
}

textInput.addEventListener("keydown", callAfterAKeyIsPressed);

/*Question 4 
Select the button in the HTML below by its tag. 
Add a mouseover event listener. 
The callback function should add a class called hover to the button.*/
const hoverButton = document.querySelector("button");

function callWhenMouseHoverOver() {
  console.log("A button was hovered");
}

hoverButton.addEventListener("mouseover", callWhenMouseHoverOver);
hoverButton.classList.add("hover");
console.dir(hoverButton.classList);

/*Question 5:
Select the button in the HTML below by its data attribute 
and add a mouseout event listener to it. 
The callback function should remove the class called hover from the button. */
const button = document.querySelector("[data-animal='dog']");

function mouseoutButton() {
  console.log("mouseout");
}

button.addEventListener("mouseout", mouseoutButton);
button.classList.remove("hover");
console.dir(button.classList);

/*Question 6:
Select all the li tags from the HTML below. 
Using a loop, add a mouseover event listener to each tag.
The callback function should log the value of the data attribute on each element 
when the cursor moves over it. */
const lists = document.querySelectorAll("li");

for (let i = 0; i < lists.length; i++) {
  lists[i].addEventListener("mouseover", listTag);
}

function listTag(event) {
  console.log(event.target.dataset.animal);
}

/*Question 7:
Convert the if-else-if statement below to a switch statement. 
Use the code inside the else block in the default block in the switch.*/
const animal = "cow";

switch (animal) {
  case "cat":
    console.log("Meow");
    break;

  case "cow":
    console.log("Moo");
    break;

  case "bird":
    console.log("Tweet");
    break;

  default:
    console.log("Harrumph");
}

/*Question 8:
Convert the for loop code below to a forEach loop. */
const sheep = ["Malcolm", "Anders", "Marie"];

function sheepNames(sheeps) {
  console.log(sheeps);
}

sheep.forEach(sheepNames);

/*Question 9:
Create a timer that logs the word hello every half a second. 
It must stop after its logged the word 6 times. */
function logTimer() {
  console.log("hello");

  if (counter === 5) {
    clearInterval(intervalId);
  }
  counter++;
}

let counter = 0;
const intervalId = setInterval(logTimer, 500);

/*Question 10:
Select the div from the HTML below. 
Write code that updates the div's text to say Text updated after waiting 2 seconds. 
You can use either innerText or innerHTML to update the text. */
const timeoutContainer = document.querySelector(".container");

function updateDiv() {
  timeoutContainer.innerText = "Text updated";
}

setTimeout(updateDiv, 2000);
