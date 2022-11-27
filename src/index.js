import validator from "./validator.js";

const btnSubmit = document.getElementById("btnEnviar");
const imputCard = document.getElementById ("inputNumeroDeTarjeta");

btnSubmit.addEventListener("click", function () {
const numberCard = imputCard.value;
console.log (numberCard)
validator.isValid(numberCard)   
})


  