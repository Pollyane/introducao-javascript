function contaPares() {
  var valor = new Number(document.getElementById("valor").value);

  for (var i = 0; i <= valor; i++) {
    if (i % 2 == 0) {
      document.write("Valor: " + i + "<br />");
    }
  }
}
