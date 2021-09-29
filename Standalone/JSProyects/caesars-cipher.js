function rot13(str) {

  let cipherCode = "";
  let cipherChar = "";
  str = str.toUpperCase();

  for(let i=0; i<str.length; i++){
    if(/[A-M]/.test(str[i])){
      cipherChar = str.charCodeAt(i);
      cipherChar += 13;
      cipherChar = String.fromCharCode(cipherChar);
      cipherCode = cipherCode.concat(cipherChar);

    }else if(/[N-Z]/.test(str[i])){
      cipherChar = str.charCodeAt(i);
      cipherChar -= 13;
      cipherChar = String.fromCharCode(cipherChar);
      cipherCode = cipherCode.concat(cipherChar);
    }else{
      cipherCode = cipherCode.concat(str[i]);
    }
  }

  document.getElementById("caesars_cipher_output").innerHTML=cipherCode;
  return cipherCode;
}