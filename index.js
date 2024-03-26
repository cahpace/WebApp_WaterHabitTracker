
//Para poder fazer o login:

//TODO: validar email, se email nao for valido, colocar um warning avisando
//TODO: validar se campo email e senha estao preenchidos para habilitar botao entrar




/*let userMail = document.getElementById("email");
     userMail.addEventListener("input", validateMail);
     function validateMail(userMail){
        result = /\S+@\S+\.\S+/.test(userMail);
        //return result;
        console.log(result);
        if(!result){
            document.getElementById("entrar").disable = false;

        }
     }*/
     






/*
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

   
     //teste - ta impoossivel fazer o pararafo aparecer
     function chamar(){
        document.getElementById("emailWarning").style.display = "block";
        /*let space = document.getElementById("space");
        let aux = document.getElementById("emailWarning");
        aux.style.display = "block"
        space= aux;*/    /*
        console.log("clicou");
    }
    
   function validateEntry(){
        if((document.getElementById("email").value)&&(document.getElementById("senha").value)){
            document.getElementById("entrar").disabled = false;
            //console.log("worked")
        }else if(!document.getElementById("email").value){
            //document.getElementById("emailWarning").innerHTML = p.entrar;
            document.getElementById("emailWarning").style.display = "block";
            console.log("email invalido")
            //mostrar aviso de colocar um email valido
        }
        /*else if (!document.getElementById("senha").value){
            //aviso de colocar senha 
            console.log("senha invalida")
        }*/
   // }
    