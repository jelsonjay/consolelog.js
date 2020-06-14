"use strict";
// this is the popular console.log
console.log("This is console.log!");

// this is console.log info
console.info("This is console.info!");

//this is console.error
console.error("Send error menssage!");

//next is console.warn
console.warn("Send warning!");

// next is console.assert
console.assert(false, "This is not console.log!");

//console.count
for (let i = 0; i < 5; i++) {
  console.count("How many console.conut!");
}

// console.group
console.group();
console.log("1 Cheking console.group!");
console.log("2 Cheking console.group!");
console.log("3 Cheking console.group!");
console.log("5 Cheking console.group!");
console.groupEnd();

// console.groupCollapsed
console.groupCollapsed();
console.log("1 Cheking console.groupCollapsed!");
console.log("2 Cheking console.groupCollapsed!");
console.log("3 Cheking console.groupCollapsed!");
console.groupEnd();

// console.table
console.table(["Banana", "Apple", "Kiwi", "Avacado"]);

// console.time
console.time("Total");

console.time("1 Cheking time");
for (let i = 0; i < 5500; i++) {
  // console.time
}
console.timeEnd("1 Cheking time");

console.time("2 Cheking time");
for (let i = 0; i < 4500; i++) {
  // console.time
}
console.timeEnd("2 Cheking time");

console.timeEnd("Total");

//console.trace show all the javascript steps
function person() {
  tester();
}
function tester() {
  console.log("Tester");
  console.trace();
}

person();

// the las is the console,clear
//console.clear();
