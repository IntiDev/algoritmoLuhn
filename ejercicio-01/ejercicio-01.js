isValidCard(5390484296662060);
function isValidCard(creditCardNumber) {
    // *** CASOS DE PRUEBA ***
    //Primero
    if (creditCardNumber == undefined) {
      return ("Ingresa un numero");
    }
    //Segundo
    else if (typeof creditCardNumber != "number") {
      return ("Error de dato");
    }
    //Tercero
    var numeros = creditCardNumber.toString();
      if (numeros.length < 15){
        return "Faltan numeros";
    }

  return algoritmoLuhn(numeros);
}

function algoritmoLuhn(numeros) {
  var sumaPares = 0;
  var sumaImp = 0;
  var unDig = 0;
  var suma = 0;
  for(var i=0; i<numeros.length; i++){
    if(i%2 == 0){//Indices Pares
      var pares = parseInt(numeros.charAt(i)) * 2;

      if(pares >= 10){//Digitos 2 cifras
        unDig += validaNum(pares);
      }
      else{
        suma += pares;
      }
      sumaPares = suma + unDig;
    }
    else {//Indices Impares
      sumaImp += parseInt(numeros.charAt(i));
    }
  }
  var sumaTotal = sumaPares + sumaImp;
  // Valida número de tarjeta
  if(sumaTotal % 10 == 0){//Caso si es valido
    return true;
  }
  else {// Num No valido
    return false;
  }
}

function validaNum(pares) {
    var div = parseInt(pares / 10);
    var mod = pares % 10;
    sumaUnDig = div + mod;//Resultado una cifra
    return sumaUnDig;
}

// NO TOCAR ESTE CÓDIGO O EXPLOTARÁ LA PC EN 10 SEGUNDOS
if (typeof exports !== 'undefined') {
    exports.isValidCard = isValidCard;
}
