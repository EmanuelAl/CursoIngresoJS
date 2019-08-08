function mostrar()
{
    var nota;
    var sexo;
    var notaMin=0;
    var sexoMin;
    var bandera=true;
    var  contVarones=0;
    var promedio;
    var cont=0;
    var sumNota=0;
    while(cont < 5){
        
        do{
            nota=prompt("ingrese nota ");  
            nota=parseInt(nota);
        }while(nota<0 || nota>10);
        do{
            sexo=prompt("ingrese sexo ");
        }while(sexo!="f" && sexo!="m");

        if(bandera){
            notaMin=nota;
            sexoMin=sexo;
            bandera=false;
        }
        if(nota<notaMin){
            notaMin=nota;
            sexoMin=sexo;
        }
        if(sexo=="m" &&  nota>=6){
            contVarones++;
        }
        sumNota=sumNota + nota;
        cont++;
    }
    promedio=sumNota/cont;
    alert("el promedio es "+promedio);
    alert("la nota mas baja es "+notaMin+" y su sexo es "+sexoMin);
    alert(" la cantidad de varones con notas mayor o igual a 6 "+ contVarones);

}
