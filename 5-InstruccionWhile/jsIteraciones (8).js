function mostrar()
{
  var num;
	var contador=0;
	var positivo=0;
	var negativo=1;//porque si multiplicamos por cero siempre darà cero.

	var respuesta=true;
  while (respuesta){
    /*
    num = prompt("ingrese numero");
    num =parseInt(num);
    while(isNaN(num)){//validamos si es NaN,si es true seguira preguntando
      num = prompt("ingrese numero");
      num =parseInt(num);
    }*/
    do{
      num = prompt("ingrese numero");
      num =parseInt(num);
    }while(isNaN(num));
    if(num>=0){//si es num positivo
      positivo+=num;
    }else{
      //negativo=negativo*num;
      negativo*=num;
    }
    respuesta=confirm("quiere seguir ?");//devuelve true si damos "aceptar"
  }
//
document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN
