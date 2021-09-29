function convertToRoman(num) {

  if(num >= 50000){
    document.getElementById("roman_numeral_converter_output").innerHTML="Número demasiado grande.";
    return false;
  }

  let romanNumber = "";
  while(num >= 1000){
    romanNumber = romanNumber.concat("M");
    num-=1000;
  }

  //Solución ineficiente

  switch(true){
    case (num>=900): romanNumber = romanNumber.concat("CM"); num-=900; break;
    case (num>=800): romanNumber = romanNumber.concat("DCCC"); num-=800; break;
    case (num>=700): romanNumber = romanNumber.concat("DCC"); num-=700; break;
    case (num>=600): romanNumber = romanNumber.concat("DC"); num-=600; break;
    case (num>=500): romanNumber = romanNumber.concat("D"); num-=500; break;
    case (num>=400): romanNumber = romanNumber.concat("CD"); num-=400; break;
    case (num>=300): romanNumber = romanNumber.concat("CCC"); num-=300; break;
    case (num>=200): romanNumber = romanNumber.concat("CC"); num-=200; break;
    case (num>=100): romanNumber = romanNumber.concat("C"); num-=100; break;
    default: break;
  }

  switch(true){
    case (num>=90): romanNumber = romanNumber.concat("XC"); num-=90; break;
    case (num>=80): romanNumber = romanNumber.concat("LXXX"); num-=80; break;
    case (num>=70): romanNumber = romanNumber.concat("LXX"); num-=70; break;
    case (num>=60): romanNumber = romanNumber.concat("LX"); num-=60; break;
    case (num>=50): romanNumber = romanNumber.concat("L"); num-=50; break;
    case (num>=40): romanNumber = romanNumber.concat("XL"); num-=40; break;
    case (num>=30): romanNumber = romanNumber.concat("XXX"); num-=30; break;
    case (num>=20): romanNumber = romanNumber.concat("XX"); num-=20; break;
    case (num>=10): romanNumber = romanNumber.concat("X"); num-=10; break;
    default: break;
  }

  switch(num){
    case 9: romanNumber = romanNumber.concat("IX"); num-=9; break;
    case 8: romanNumber = romanNumber.concat("VIII"); num-=8; break;
    case 7: romanNumber = romanNumber.concat("VII"); num-=7; break;
    case 6: romanNumber = romanNumber.concat("VI"); num-=6; break;
    case 5: romanNumber = romanNumber.concat("V"); num-=5; break;
    case 4: romanNumber = romanNumber.concat("IV"); num-=4; break;
    case 3: romanNumber = romanNumber.concat("III"); num-=3; break;
    case 2: romanNumber = romanNumber.concat("II"); num-=2; break;
    case 1: romanNumber = romanNumber.concat("I"); num-=1; break;
    default: break;
  }

  document.getElementById("roman_numeral_converter_output").innerHTML=romanNumber;
  return romanNumber;
}