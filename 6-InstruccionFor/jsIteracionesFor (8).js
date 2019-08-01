function mostrar()
{
var num=0;
var cont=0;

do{
    num=prompt("ingrese numero");
    num=parseInt(num);
}while(isNaN(num));
for(var i=2;i<num;i++){
    if(num%i==0){
        cont++;
    }
}
if(cont>0){
    alert("no ees primo");
}else{
    alert("es primo");
}


}//FIN DE LA FUNCIÓN