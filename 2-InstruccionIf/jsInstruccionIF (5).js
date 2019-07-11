function mostrar()
{
//tomo la edad
var edad;
  edad=document.getElementById("edad").value;
  edad=parseInt(edad);
  //if(edad >= 18){
    //alert(" No es adolescente ");
  //}
  if(!(edad > 13&& edad <=17)){// negamos y obtenemos lo mismo que la liena anterior

      alert(" No es adolescente ");
  }

}//FIN DE LA FUNCIÓN
