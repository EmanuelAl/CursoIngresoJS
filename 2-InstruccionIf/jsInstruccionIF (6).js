function mostrar()
{
//tomo la edad
var edad;
  edad=document.getElementById("edad").value;
  edad=parseInt(edad);

  /*if ( edad >= 13 && edad <=17){
    alert("Es adolescente ");
  }
  if(edad <13) {
    alert("Es niño !");
  }
  if(edad >=18){
    alert("Es mayor de edad");
  } hacer el codigo asi no es correcto,por mas que funcione, se estaria pregunta tres veces sobre la misma variable
  */
  if(edad >=18){
    alert("Es mayor de edad");
  }else{
    if(edad >=13){
      alert("Es adolescente ");
    }else{
      alert("Es niño !");
    }
  }
}//FIN DE LA FUNCIÓN
