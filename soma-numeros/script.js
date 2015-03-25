function somaNumeros(){
  var valorInicial = new Number(document.getElementById("valor-inicial").value);
  var valorFinal = new Number(document.getElementById("valor-final").value);
  var soma = 0;

  for (var i = valorInicial; i <= valorFinal; i++) {
    soma += i;
  }
  console.log("Valor da soma é: " + soma);
}
