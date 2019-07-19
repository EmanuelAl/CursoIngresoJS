function mostrar()
{

	var contador=0;
	var acumulador=0;
  var respuesta=true;
  var num=0;
  while(respuesta){
    contador++;
    num = prompt("ingrese numero");
    num =parseInt(num);

    /*do{
      num = prompt("ingrese numero");
     // num =parseInt(num);
      if(num==null){
        break;
      }
      num =parseInt(num);
    }while(isNaN(num));*/
    while(isNaN(num)){
      num = prompt("ingrese numero");
      num =parseInt(num);
    }
    acumulador+=num;
    respuesta=confirm("quiere seguir ?");//devuelve true si damos "aceptar"
  }

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN
