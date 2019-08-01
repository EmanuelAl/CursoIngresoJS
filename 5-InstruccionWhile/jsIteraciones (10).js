function mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	var sumNeg=0;
	var sumPos=0;
	var contN=0;
	var contP=0;
	contCero=0;
	var resto=0;
	var respuesta=true;
	var contPares=0;
	var promedioPos=0;
	var promedioneg=0;
	var difPosNeg=0;
	while(respuesta)
	{
		do{
			num=prompt("ingrese numero");
			num=parseInt(num);
		}while(isNaN(num));

		if(num<0){
			sumNeg+=num;
			contN++;
		}else {
			if(num>0){
			sumPos+=num;
			contP++;
			}else{
				contCero++;
			}
		}
		resto=num%2;
		if (resto==0){
			contPares++;
		}
		respuesta=confirm("quiere seguir ?");//devuelve true si damos "aceptar"
	}
	if(contP==0){
		promedioPos="no se  ingreso numeros positivos";
	}else{
		promedioPos=sumPos/contP;
	}
	if(contN==0){
		promedioneg="no se ingresaron numeros negativos";
	}else{
		promedioneg=sumNeg/contN;
	}
	difPosNeg=contP-contN;
	document.write("<p> suma de negativos "+ sumNeg +"<br> suma de positivos "+sumPos+
	"<br> cantidad de positivos "+contP+"<br> cantidad de negativos "+contN+"<br> cantidad de ceros "+
	contCero+"<br> cantidad de pares "+contPares+"<br> promedio de positivos "+promedioPos+
	"<br> promedio de negativos "+promedioneg+"<br> diferencia entre positivos y negativos"+
	difPosNeg+"</p>");



}//FIN DE LA FUNCIÓN