var i = 2;

function alteraTitulo() {
  var texto = "";
  if (i == 1) {
    texto = "Titulo original";
    i = 2;
  } else {
    texto = "Titulo alterado";
    i = 1;
  }
  console.log("i: " + i);
  document.getElementById('titulo').innerHTML = texto;
}
