

function validarFormulario() {
  var nome = document.forms["myForm"]["nome"];
  if (nome.value == null || nome.value == "") {
    nome.style.border = "solid 1px red";
    document.getElementById("msg").innerHTML = " O campo nome deve ser preenchido";
    return false;
  }
  return true;
}
