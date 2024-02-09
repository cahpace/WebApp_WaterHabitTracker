//email validation

//pegar o alor do email colocado no input
//verificar se email nao é vazio e valido
//se form valido entao habilitar botao de entrar e de recuperar senha
function validateField(){
    //pegar valor de email do input
    let userEmail = document.getElementById("email").value;
    //verificar se é vazio valor do email
    if(!userEmail){
        document.getElementById("recover-password-button").disabled = true;
    }else if(validateEmail(userEmail)){
        document.getElementById("recover-password-button").disabled = false;
    }else{
        document.getElementById("recover-password-button").disabled = true;
    }
}

function validateEmail(userEmail) {
    return /\S+@\S+\.\S+/.test(userEmail);
}

