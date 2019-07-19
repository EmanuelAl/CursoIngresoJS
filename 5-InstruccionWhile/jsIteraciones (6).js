function mostrar()
{

	var contador=0;
  var acumulador=0;
  var cont=0;
  var num;
while(contador <5){
  contador++;
  num = prompt("ingrese numero");
  num =parseInt(num);
  while(isNaN(num)){
  num = prompt("ingrese numero");
  num =parseInt(num);
  }
  //acumulador=acumulador+num;
  acumulador+=num;
}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN
