function mostrar()
{
var error = false;// creamos una "bandera"
var cont=0;
var clave = prompt("ingrese el número clave.");
/*while(clave != "utn750"){
  cont++;
  clave=prompt("ingrese el número clave");
  if(cont==3){
    break;
  }

}*/
//a continuacion utilizamos el do{}while() para realizar el codigo anterior y se le agrega la bandera.
do{
    cont++;
    clave=prompt("ingrese el número clave");
    if(cont==3){
      error=true;
      break;
    }
  }while(clave != "utn750");
  if(error){//si error es verdadero,o sea que hay error
    alert("ERROR");
   }else{// si no hay error
    alert("EXITO");
   }


}//FIN DE LA FUNCIÓN
