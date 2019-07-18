function mostrar()
{

  var numero = prompt("ingrese un número entre 0 y 10.");
  var cont=0;
  while(numero<0 || numero >9){//seguirà pidiendo el numero hasta que ingrese un numero entre 0 y 10
    //cont++;
    numero = prompt("ingrese un número entre 0 y 10.");
    numero=parseInt(numero);//validamos que no sea una palabra lo que ingresa
    while(isNaN(numero)){//el isNaN se usa para verificar que no sea un valor null el que està ingresando
      // por ejemplo si ingresa letras,este mientras seguirà pidiendo el numero hasta que ingrese un numero
      numero = prompt("ingrese un número entre 0 y 10.");
      numero=parseInt(numero);
    }
    /*if(cont==2){
      break;
    }*/
  }
  document.getElementById("Numero").value=numero;

}//FIN DE LA FUNCIÓN
/*do{

}while(numero<0 || numero >9);
 esta estructura hace primero el codigo y luego pregunta si es verdarero o false,
nos asegura que al menos se ejecute una vez el codigo.

*/
