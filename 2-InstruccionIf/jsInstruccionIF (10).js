function mostrar()
{
	//Genero el número RANDOM entre 1 y 10
  var numero;
  numero =Math.floor(Math.random()*(11 - 1) + 1);//asignamos a la variable "numero" un valor random

  if(numero>=9){
    alert("EXCELENTE");
  }else {
    if(numero > 4){
      alert("APROBÓ");
    }else{
      alert("Vamos, la proxima se puede");
    }
  }

}//FIN DE LA FUNCIÓN
