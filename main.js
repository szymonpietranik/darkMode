import { pleaseSayHello as hi, szymi } from "./hello.js";
import something from "./szymon.js";
import * as hello from "./hello.js";

console.log(hi("Szymon"));
console.log(szymi);

console.log(something);

console.log(hello.pleaseSayHello());
console.log(hello.szymi);

// JS tablice //
const myString = "Szymon";
console.log(myString.length);

const myArray = ["<", ">", "?", "!"];
console.log(typeof myArray[0]);
console.log(typeof myArray);
console.log(typeof myArray[4]);
console.log(myArray.length);

myArray.push(myString);
myArray.push(2020);

myArray.unshift("@");

myArray.shift();

myArray.pop();

console.log(myArray);

console.log(myArray.indexOf("<"));

if (myArray.indexOf("<") >= 0) {
  console.log("mam element");
} else {
  console.log("nie mam elmentu");
}

myArray.splice(1, 2);
console.log(myArray);

const newArray = myArray.slice(0, 3);
console.log(newArray);

// JS pętle //
for (let i = 0; i < 3; i++) {
  console.log("siema");
  console.log(`${i} wykonanie pętli`);
}

const myNewArray = ["!", "@", "#", "$", "%"];

for (let i = 0; i < myNewArray.length; i++) {
  console.log(`Pod indeksem ${i} jest element ${myNewArray[i]}`);
}

let myNumber = 0;
while (myNumber < 10) {
  console.log(myNumber);
  myNumber++;
}

const szymon = {
  name: "Szymon",
  age: 25,
};

for (let myProperty in szymon) {
  console.log(myProperty);
}

for (let myProperty in szymon) {
  console.log(szymon[myProperty]);
}

const secondArray = ["a", "b", "c", { name: "szymon" }];
for (let element of secondArray) {
  console.log(element);
}
