const validator = {
  isValid: function (tarjeta) {

    let sum = 0;
    //Validar si es que entra un numero

    if (tarjeta === null || (isNaN(tarjeta) === true)) {
      alert('Ingrese un número de tarjeta válido');

    }

    //Pasar los numeros a un array en orden inverso
    const arrayNumber = tarjeta.split("");
    console.log(arrayNumber)
    const arrayReverse = arrayNumber.reverse();
    console.log(arrayReverse)

    //Aplicar la operacion a los numeros de las pocisiones pares

    for (let i = 0; i < arrayNumber; i++) {
      let digitoActual = parseInt(tarjeta[i]);
      if (i % 2 == 0) // tomar posiciones pares
      {
        if ((digitoActual *= 2) > 9) {
          //Separar los valores de 2 digitos para despues sumarlos
          let primerNumero = parseInt(digitoActual / 10);
          let ultimoNumero = digitoActual % 10;
          digitoActual = primerNumero + ultimoNumero;
        }
      }
      //Sumar todos los digitos de la tarjeta que se ingresa
      agregarDatos += digitoActual;
    }




    //Comprobar si es una tarjeta válida
    if (sum % 10 === 0 && sum !== 0) {
      return alert('Datos ingresados correctamente. !Tarjeta válida!');
    }
    else {
      return alert('Tarjeta inválida');
    }


  },
  maskify: function (tarjeta) {
    console.log(tarjeta);

    maskify("3753878556798751"); // '############8751'
    maskify("3753878556798751"); // '#######8751'
    maskify("1"); // '1'
    maskify(""); // ''
  }


}
export default validator




