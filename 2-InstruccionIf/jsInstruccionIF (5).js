function mostrar()
{
//tomo la edad
var edad;
  edad=document.getElementById("edad").value;
  edad=parseInt(edad);

  if(!(edad > 13&& edad <=17)){// negamos para que todos los casos que no esten entre 13 y 17 aparezca el msj

      alert(" No es adolescente ");
  }

}//FIN DE LA FUNCIÓN
