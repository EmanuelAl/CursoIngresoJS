function mostrar()
{
//tomo la edad
var edad;
  edad=document.getElementById("edad").value;
  edad=parseInt(edad);

  if ( edad > 13 && edad <=17){
    alert("usted es adolescente ");
  }
  if(edad <13 || edad >17) {
    alert("eres un niño !");
  }
}//FIN DE LA FUNCIÓN
