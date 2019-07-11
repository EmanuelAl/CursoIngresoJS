function mostrar()
{
var precio;
var porcentaje;
var resultado;

precio = prompt("ingrese el precio ");
porcentaje = prompt("ingrese el porcentaje de descuento ");
precio = parseInt(precio);
porcentaje= parseInt(porcentaje);

resultado=(precio*porcentaje/100);
resultado=(precio - resultado);

document.getElementById("elPrecioFinal").value = resultado;
}
