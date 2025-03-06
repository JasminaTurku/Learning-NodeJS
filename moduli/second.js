// ako je jedna stvar samo
// module.exports = function addTwoNumber(a, b) {
//   return a + b;
// };

//ako je vise stvari
// function addTwoNumber(a, b) {
//   return a + b;
// }
// module.exports = addTwoNumber;

//IMPORT u reactu je isto sto i require u Nodejs
//a export u reactu je isto sto i module.exports u Node-u

//CORE moduls - ne zahteva da pisemo putanju do projekta, vec samo naziv i Core su moduli koji dolaze sa samom instalacijom Nodejs-s
const fs = require("fs");
console.log(fs);

//Node moze da radi neke stvari sinhrono a neke asinhrono (asinhrono - ne blokirajuci kod. izvrsimo neku funkciju a neka funkcija koja je pre al ima timeout ona ce kasnije da se izvrsi)
