function mostrar()
{
//tomo la edad
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
switch (mesDelAño){
  case "Enero":
  case "Febrero":
  case "Marzo":
  case "Abril":
  case "Mayo":
    alert("Falta para el invierno.");
    break;
  case "Junio":
  case "Julio":
    //alert("Abrigate que hace frio.");
    //break;
  case "Agosto":
    alert("Abrigate que hace frio.");
    break;
  case "Septiembre":
  case "Octubre":
  case "Noviembre":
  case "Diciembre":
    alert("Ya pasamos el frio, ahora calor ");

}


}//FIN DE LA FUNCIÓN
