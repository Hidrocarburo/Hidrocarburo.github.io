function telephoneCheck(str) {
  let regex = /(^([(]\d{3}[)]|\d{3})[\s-]*\d{3}[\s-]*\d{4}$)|(^1\s*([(]\d{3}[)]|\d{3})[\s-]*\d{3}[\s-]*\d{4}$)/

  if(regex.test(str)){
    document.getElementById("telephone_number_validator_output").innerHTML="Es un número de teléfono.";
    return true;
  }

  document.getElementById("telephone_number_validator_output").innerHTML="No es un número de teléfono.";
  return false;
}