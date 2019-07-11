/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
  var importe;
  var resultado;
function mostrarAumento()
{

  importe = document.getElementById("sueldo").value;
  //document.getElementById("resultado").value = resultado;
  importe = parseInt(importe);


  resultado = ((importe*10)/100);
  resultado = resultado + importe;
  document.getElementById("resultado").value = resultado;

}
