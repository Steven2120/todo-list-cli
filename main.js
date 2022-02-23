const ps = require("prompt-sync");
const prompt = ps();

let todos = [];
let areTodosComplete = [false, true];
let complete = "complete";
let incomplete = "incomplete";
let counter = 0;
let placeHolder = [];

while (counter < Infinity) {
  console.log("[1] Create a to-do item");
  console.log("[2] Complete a to-do item");

  let createOrComplete = Number(prompt());
  if (createOrComplete !== 1 || createOrComplete !== 2) {
    console.log("Wrong entry. enter 1 or 2");
  }

  if (createOrComplete === 1) {
    let createdName = prompt("What is this to-do item called?: ");
    if (createdName === "done") {
      break;
    } else {
      todos.push(createdName);
      console.log(`You have ${todos.length} to-do items.`);
      for (let i = 0; i < todos.length; i++) {
        console.log(i + 1 + "." + " " + incomplete + " " + todos[i]);
      }
    }
  } else if (createOrComplete === 2 && todos.length === 0) {
    console.log("You have no todos!");
  } else if (createOrComplete === 2) {
    let completeTodo = Number(
      prompt("Which to-do item would you like to complete?: ")
    );
    console.log(`You have ${todos.length} to-do items.`);
    for (let i = 0; i < todos.length; i++) {
      if (completeTodo === i + 1) {
        placeHolder.push(i + 1 + "." + " " + complete + " " + todos[i]);
        if (placeHolder.length === 1) {
          console.log(placeHolder.join(""));
        }
        if (placeHolder.length > 1) {
          for (let i = 0; i < placeHolder.length; i++) {
            console.log(placeHolder[i]);
          }
        }
      } else {
        console.log(i + 1 + "." + " " + incomplete + " " + todos[i]);
      }
    }
  }
}
