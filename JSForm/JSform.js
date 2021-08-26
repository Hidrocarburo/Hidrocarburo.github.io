/* https://www.w3schools.com/js/js_htmldom.asp */

function verifyFields() {
    /* Variables for verifying submit */
    let textVerify = false;
    let numVerify = false;
    let mailVerify = false;
    
    /* Text field verify */
    if (document.getElementById("text-field").value.length > 0){
        let regex = /[\d]|[\W]/g; /* Only allow letters */
        if (regex.test(document.getElementById("text-field").value) == true){
            /* Runs when there's not a letter in the input */
            document.getElementById("text-label").innerHTML = "No se permiten números y símbolos.";
            document.getElementById("text-label").style.display = "inline";
            textVerify = false;
        }else{
            document.getElementById("text-label").style.display = "none";
            textVerify = true;
            /* Fulfills the text field condition to submit */
        }
    }else{
        document.getElementById("text-label").innerHTML = "Rellene el campo.";
        document.getElementById("text-label").style.display = "inline";
        textVerify = false;
    }

    /* Number field verify */
    if (document.getElementById("num-field").value.length > 0){
        let regex = /[\D]/g; /* Only allow numbers */
        if (regex.test(document.getElementById("num-field").value) == true){
            /* Runs when there's not a number in the input */
            document.getElementById("num-label").innerHTML = "Solo se permiten números.";
            document.getElementById("num-label").style.display = "inline";
            numVerify = false;
        }else{
            document.getElementById("num-label").style.display = "none";
            numVerify = true;
            /* Fulfills the number field condition to submit */
        }
    }else{
        document.getElementById("num-label").innerHTML = "Rellene el campo.";
        document.getElementById("num-label").style.display = "inline";
        numVerify = false;
    }

    /* Mail field verify */
    if (document.getElementById("mail-field").value.length > 0){
        let regex = /\w@\w+\w*\.[a-z\.]+$/g; /* Only allow format: x@x.x (no symbols and numbers) */
        if (regex.test(document.getElementById("mail-field").value) == false){
            /* Runs when the email format isn't fulfilled */
            document.getElementById("mail-label").innerHTML = "Ingresa un correo electrónico válido.";
            document.getElementById("mail-label").style.display = "inline";
            mailVerify = false;
        }else{
            document.getElementById("mail-label").style.display = "none";
            mailVerify = true;
            /* Fulfills the mail field condition to submit */
        }
    }else{
        document.getElementById("mail-label").innerHTML = "Rellene el campo.";
        document.getElementById("mail-label").style.display = "inline";
        mailVerify = false;
    }

    /* If all 3 previous conditions were fulfilled, submit the form */
    if ((textVerify == true) && (numVerify == true) && (mailVerify == true)){
        document.getElementById("form").submit();
    }
};