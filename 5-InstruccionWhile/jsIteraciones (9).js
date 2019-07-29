function mostrar()
{

	var contador=0;
	// declarar variables
	var num=0;
	var max=0;
	var min=0;
	var bandera=true;
	var respuesta=true;

	while(respuesta)
	{
		do{
			num = prompt("ingrese numero");
			num =parseInt(num);
	 	}while(isNaN(num));
		if(bandera){
			max=num;
			min=num;
			bandera=false;
		}
		if(num>max){
			max=num;
		}else if(num<min){
				min=num;
			}
		respuesta=confirm("quiere seguir ?");//devuelve true si damos "aceptar"

	}
	document.getElementById('maximo').value=max;
	document.getElementById('minimo').value=min;

}//FIN DE LA FUNCIÓN