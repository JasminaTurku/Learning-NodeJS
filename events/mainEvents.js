// const events = require("events");

// const emitter = new events.EventEmitter();

// // emitter.addListener("smile", function () {
// //   console.log("Something funny");
// // });

// // setTimeout(() => {
// //   emitter.emit("smile");
// // }, 4000);

// //Objekat i instanca klase je jedno te isto
// class Child extends events {
//   constructor(childName) {
//     super();
//     this.childName = childName;
//   }
// }
// let maxim = new Child("Maxim");
// maxim.on("scream", function () {
//   console.log(this.childName + "je gledan");
// });

// maxim.emit("scream");

// -----------------------------------------------------
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const rand = Math.floor(Math.random() * 5);

console.log("Pogodi broj");

rl.prompt();
rl.on("line", function (line) {
  if (line == rand) {
    console.log("pogodak");
    rl.close();
  } else {
    console.log("pokusaj ponovo");
    rl.prompt();
  }
});
