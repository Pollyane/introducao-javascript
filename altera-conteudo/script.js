function alteraConteudo(elemento) {
  var conteudo = document.getElementById("conteudo").value;
  var elemento = document.getElementById(elemento);
  elemento.innerHTML = conteudo;
}
