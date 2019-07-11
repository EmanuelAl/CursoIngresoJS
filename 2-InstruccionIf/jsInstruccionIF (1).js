function mostrar()
{
//tomo la edad
  var edad;
  edad=document.getElementById("edad").value;
  edad=parseInt(edad);
  if(edad >= 15){
    alert(" niña bonita ");
  }else{
    alert("no es una niña bonita (?");
  }

}//FIN DE LA FUNCIÓN
