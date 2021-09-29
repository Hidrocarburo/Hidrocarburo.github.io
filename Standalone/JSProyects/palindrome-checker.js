function palindrome(str) {
  str = str.toLowerCase();
  let getPalindrome = str.match(/[a-z0-9]/g);

  for (let i=0; i<getPalindrome.length/2; i++){
    let j = (getPalindrome.length-1) - i;
    if (getPalindrome[i] != getPalindrome[j]){

      document.getElementById("palindrome_checker_output").innerHTML="No es palíndromo";
      return false;
    }
  }
  document.getElementById("palindrome_checker_output").innerHTML="Es palíndromo";

  return true;
}