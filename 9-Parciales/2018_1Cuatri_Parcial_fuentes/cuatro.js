function mostrar()
{
var numero1=0;
var numero2=0;
var resta=0;
var suma=0;
do{ 
    numero1=prompt("ingrese primer numero ");
    numero1=parseInt(numero1);

}while(isNaN(numero1));
do{
    numero2=prompt("ingrese el segundo numero ");
    numero2=parseInt(numero2);

}while(isNaN(numero2));
if(numero1==numero2){
    alert(numero1+" "+numero2);
}else {
    if(numero1>numero2){
        resta=numero1-numero2;
        alert("el resultado es "+" "+ resta);
    }else{
        suma=numero1+numero2;
        alert("el resultado es "+ suma);
    }
}
if(suma>10){
    alert("la suma es "+suma+"y supero el 10");
}

}

