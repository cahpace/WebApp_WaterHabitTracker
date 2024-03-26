const quantityAdded = document.querySelector("#quantity-drunk");
const buttonCalculator = document.querySelector("#button-calculator");

buttonCalculator.addEventListener("click", isQuantityAddedLessThanZero);

function isQuantityAddedLessThanZero() {
    if(quantityAdded.value <= 0){
        console.log("tem que ser maior que zero");
        return;
    }
    else{
       console.log("correto");
    }
    
}