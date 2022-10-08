// No cambies los nombres de las funciones.

const { resetTask } = require("simple-git/src/lib/tasks/reset");

function deObjetoAmatriz(objeto) {
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  //Dos formas :
  // return Object.entries(objeto) o
  var nuevaMatriz = [];
       for (var propiedad in objeto){
     nuevaMatriz.push([propiedad, objeto[propiedad]]);
    }
  return nuevaMatriz;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var objetoLetras = {}; /*para ir agregando cada letra, que serán las propiedades del objeto y
  la cantidad de veces que aparece en el objeto creado en variable*/
  for (let i = 0; i < string.length; i++) {
    if(!objetoLetras[string[i]]){ 
        objetoLetras[string[i]] = 1; //agregale a string[i] un valor de 1 en cada iteración
      } else {
        objetoLetras[string[i]] = objetoLetras[string[i]] + 1;
      }
  }
 return objetoLetras;
}
//si el objetoLetras NO tiene una propiedad que sea como string[i], 
//agregala a objetoLetras y vale 1 eso con cada letra como propiedad en cada iteración.
// Luego ELSE, si string[i] si está en objetoLetras, a objetoLetras[string[i]] 
//(que es el valor de la propiedad) sumale 1.

// console.log(numberOfCharacters("adsjfdsfsfjsdjfhacabcsbajda"))


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var mayuscula = '';
  var minuscula = '';
  for (let i = 0; i < s.length; i++) {
     if(s[i] === s[i].toUpperCase()){ //si s en la posicion de i es igual a s en la posición de i en mayuscula.
    mayuscula = mayuscula + s[i];
     } else {
    minuscula = minuscula + s[i];
     }
    
  }
  return mayuscula + minuscula; 
}
// console.log(capToFront("soyHENRY"))


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  //convierto la frase a un array y luego invierto cada palabra del array.
  //para luego, llevarla a frase invertida otra vez.
  //SINTETIZADA:
  var strArray = str.split(" "); 
  for(let i = 0; i < strArray.length; i++){
  strArray[i] = strArray[i].split('').reverse().join('');
  
  // var strArray = str.split(" "); //['The', 'Henry', 'Challenge', 'is', 'close!']
  // for(let i = 0; i < strArray.length; i++){
  //   var palabraArray = strArray[i].split(''); //[ c,l,o,s,e,! ]
  //   var palabraReverse = palabraArray.reverse(); //[ !,e,s,o,l,c ]
  //   strArray[i] = palabraReverse.join('');// sin comillas[ 'e,h,T', 'y,r,n,e,H', 'e,g,n,e,l,l,a,h,C', 's,i', '!,e,s,o,l,c' ] //con comillas sin espacio[ 'ehT', 'yrneH', 'egnellahC', 'si', '!esolc' ]
  }
  return strArray.join(' ');// con comillas y espacio :  ehT yrneH egnellahC si !esolc 
}

// console.log(asAmirror("The Henry Challenge is close!"))

function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí

  //ACÁ NO PUEDO USAR LA MISMA LOGICA QUE EL ANTERIOR PORQUE ES UN NUMERO.
  //Asi que aplico método para números y convierto los números en string para poder
  //aplicar métodos string uso toStringt()
  var numeroString = numero.toString(); //"12345"
  var arrStringSplit = numeroString.split(''); //[ '1', '2', '3', '4', '5' ]
  var arrReverso = arrStringSplit.reverse() //[ '5', '4', '3', '2', '1' ]
  var deArrCadena = arrReverso.join('') //54321
  if(deArrCadena === numeroString){
  return 'Es capicua';
  }
return 'No es capicua';
}
// console.log(capicua(12321))//Es capicua
// console.log(capicua(13451))//No es capicua


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  // var restoCadena = [];
  // var cadenaSplit = cadena.split("")//[ 'a', 'b', 'c', 'e', 'f', 'g', 'h' ]
  // for (let i = 0; i < cadenaSplit.length; i++) {
  //   if(cadenaSplit[i] !== "a" && cadenaSplit[i] !== "b" && cadenaSplit[i] !== "c" ){
  //     restoCadena.push(cadenaSplit[i]);
  //   }
  // }
  // return restoCadena.join('');
  
  var restoCadena = '';
   for (let i in cadena) {
    if( cadena[i] !== "a" && 
        cadena[i] !== "b" && 
        cadena[i] !== "c" ){
      restoCadena += cadena[i];
    }
  }
  return restoCadena;
}
console.log(deleteAbc("abchhfg"))


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

