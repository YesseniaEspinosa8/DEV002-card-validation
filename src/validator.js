const validator = {
  isValid: (creditNumber) => {
    const length = creditNumber.length; //longitud del string 
    let agregarDigitos = 0;

    //Pasar los numeros a un array en orden inverso
    const arrayNumber = creditNumber.split("");
    console.log(arrayNumber)
    const arrayReverse = arrayNumber.reverse();
    console.log(arrayReverse)

    // si la cantidad  de digitos, al modulo(%) 2 da como resultado 0
    if (length % 2 == 0) {
      // Comienza al inicio del numero y duplica a partir del primero numero
      for (let i = 0; i < length; i++) {
        let digitoActual = parseInt(creditNumber[i]);
        if (i % 2 == 0)// tomar posiciones pares
        // si el digito actual multiplicado x 2 es mayor que 9
        {
          if ((digitoActual * 2) > 9) {
            //Separar los valores de 2 digitos para despues sumarlos 
            let primerNumero = parseInt(digitoActual / 10);
            let ultimoNumero = digitoActual % 10;
            digitoActual = primerNumero + ultimoNumero;

          }
        }
        // Suma todos los digitos de la tarjeta 
        agregarDigitos += digitoActual; // Consolidar agregarDigitos / Que pasa con los impares y menores a 9?
      }
    }
    // creo otra constante para alojar la suma de los digitos, ver si el total sacando su modulo es === a 0,
    // al ser un typeOf retorna un tipo de dato primitivo, si no es true, entonces devuelve false
    const total = (agregarDigitos % 10) === 0
    console.log(total, agregarDigitos)
    return total


  },

  maskify: (creditNumber) => {
    return cc.replace(/.(?=.{4})/g, "#");
    
  }

}
export default validator;




