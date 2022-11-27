const validator = {
  isValid: function (tarjeta) {

    let sum = 0;
    //Validar si es que entra un numero

    if (tarjeta === null || (isNaN(tarjeta) === true)) {
      alert('Ingrese un número de tarjeta válido');

    }

    const arrayNumber = tarjeta.split("");
    console.log(arrayNumber)

    const array = [4, 1, 5, 2, 3, 1, 8, 8, 4, 3, 0, 6, 5, 5, 7, 9];

    console.log(array); // [4, 1, 5, 2, 3, 1, 8, 8, 4, 3, 0, 6, 5, 5, 7, 9]

    array.reverse();

    console.log(array); // [9, 7, 5, 5, 6, 0, 3, 4, 8, 8, 1, 3, 2, 5, 1, 4]


    //Despues de validar si los digitos con correcto
    /*Se estara iterando numero a numero, con un array inverso, se estaran sumando y invirtiendo el array
    con los numeros pares*/

    alt = false,
      i = tarjeta.length - 1,
      num;
    //Si el numero de caracteres de la tarjeta proporcionada son menores a 13 o mayores a 19
    //la tarjeta se regresa al prompt
    if (tarjeta.length < 13 || tarjeta.length > 19) {
      alert('El número de tarjeta tiene que ser mayor a 13 y menor a 19 dígitos.');
      return isValidCard(tarjeta);
    }
    //Mientras los numeros sea mayor o igual a 0 se estara tomando cada caracter
    while (i >= 0) {
      //Se estaran tomando cada caracter numerico enteros ingresado en tarjeta
      num = parseInt(tarjeta.charAt(i), 10);
      //Valida que el número sea válido
      if (isNaN(num)) {
        return false;
      }
      //Válida el cambio true o false de imparidad
      if (alt) {
        num *= 2;
        if (num > 9) {
          num = (num % 10) + 1;
        }
      }
      //Voltea el bit de paridad
      alt = !alt;
      //Agrega el número
      sum += num;
      //Continúa con el siguiente dígito
      i--;
    }
    //Determina si la tarjeta es válida
    if (sum % 10 === 0 && sum !== 0) {
      return alert('Tarjeta válida');
    }
    else {
      return alert('Tarjeta inválida');
    }


  },
  maskify: function (tarjeta) {
    console.log(tarjeta);

    maskify("4556364607935616"); // '############5616'
    maskify("64607935616"); // '#######5616'
    maskify("1"); // '1'
    maskify(""); // ''
  }


}
export default validator




