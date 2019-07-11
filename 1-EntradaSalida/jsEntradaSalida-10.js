/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
var importe;
var resultado;
function mostrarAumento()
{
  importe = document.getElementById("importe").value;
  //document.getElementById("resultado").value = resultado;
  importe = parseInt(importe);


  resultado = ((importe*25)/100);
  resultado = importe - resultado;
  document.getElementById("resultado").value = resultado;
}
