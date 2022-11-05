"use strict";

const ps = require("prompt");
const prompt = ps({sigint : true});

let a = prompt("Hey whats ur age? ")
a = Number.parseInt(a)
if (a<0){
  alert("Your age is Invalid.")
}
else if(a<9){
  alert("You can't Think of driving.")
}
else if(a < 18 && a >=9){
  alert("You can think of driving after",(18 - a), "years")
}
else{
  alert("You can drive buddy.")
}

console.log("Thank You.")