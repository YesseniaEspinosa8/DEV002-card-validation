const validator = {
  isValid: function (tarjeta) {

    let sum = 0;
    //Validar si es que entra un numero

    if (tarjeta === null || (isNaN(tarjeta) === true)) {
      alert('Ingrese un número de tarjeta válido');

    }

    const arrayNumber = tarjeta.split("");
    console.log(arrayNumber)

    //Preguntar por el numero de la tarjeta
    const array1 = ["3", "7", "5", "3", "8", "7", "8", "5", "5", "6", "7", "9", "8", "7", "5", "1"];
    console.log('array1:', array1);

    //Pasar los numeros a un array en orden inverso
    const reversed = array1.reverse();
    console.log('reversed:', reversed);
    // resultado esperado: "reversed:" Array ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]

  
    //Aplicar la operacion a los numeros de las pocisiones pares
    const imparNumbers=["5", "8", "7", "5", "8", "8", "5", "3"];
    for (let i = 0; i <= 8; i *= 2) {
      imparNumbers.push(i);
 }

    //Sumar los digitos y nuevos digitos
    
      
    
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




