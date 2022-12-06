import validator from "./validator.js";

const btnSubmit = document.getElementById("btnEnviar");
const imputCard = document.getElementById("inputNumeroDeTarjeta");

btnSubmit.addEventListener("click", function () {
    const numberCard = imputCard.value;
    console.log(numberCard)
    const resultMaskify = validator.maskify(numberCard) 
    const resultValid = validator.isValid(numberCard)
    if (resultValid) {
        alert("Éxito, tu tarjeta " + resultMaskify +" es válida")
    } else {
        alert("Tarjeta " + resultMaskify +" inválida")

    }
    validator.maskify(numberCard) 



})


