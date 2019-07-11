/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
  var numDividendo;
  var numDivisor;
  var resultado;
function SacarResto()
{

  numDividendo = document.getElementById("numeroDividendo").value;
  numDivisor = document.getElementById("numeroDivisor").value;
  numDividendo = parseInt(numDividendo);
  numDivisor = parseInt(numDivisor);

  resultado = numDividendo%numDivisor;
  alert("el resto es : " + resultado);
}
