//constante du DOM ingredient
const switchOnIngredient = document.getElementById("switch-on-ingredient");
const switchOffIngredient = document.getElementById("switch-off-ingredient");
const filtreDeveloppeIngredient = document.getElementById("filtre-developpe-ingredient");


// initialiser la mise page avec JS
filtreDeveloppeIngredient.style.display = "none";

// afficher et masquer le filtre
switchOnIngredient.addEventListener("click",function(){
    switchOnIngredient.style.display = "none";
    filtreDeveloppeIngredient.style.display = "initial";
    
    
});
switchOffIngredient.addEventListener("click",function(){
    switchOnIngredient.style.display = "flex";
    filtreDeveloppeIngredient.style.display = "none";
});