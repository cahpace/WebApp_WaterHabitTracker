const emailInput = document.querySelector("#user-email");
const passwordInput = document.querySelector("#user-password");
const buttonLogin = document.querySelector("#login");
const emailWarning = document.querySelector("#emailWarning");
const passwordWarning = document.querySelector("#passwordWarning");

const passwordLength = 5;

//validations
buttonLogin.addEventListener("click", (event) =>{
    event.preventDefault();
    
    //verify if email is empty or if it is not valid
    if(emailInput.value === "" || !isMailValid(emailInput.value)){
        emailWarning.style.display = "flex";
        //alert("preencha seu email");
       return;
    }
    //verify if there are more than 8 caracteres in the password
    if(passwordInput.value.length < passwordLength){
        passwordWarning.style.display = "flex";
        //alert("senha precisa ter no minimo 5 caracteres");
        return;
    }

})
//email validation
function isMailValid(email){
    //cria regex para validara email
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-z]{2,}/
    );
    if(emailRegex.test(email)){
        return true;
    }
    return false; 
}