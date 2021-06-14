//constante du DOM ingredient
const switchOnIngredient = document.getElementById("switch-on-ingredient");
const switchOffIngredient = document.getElementById("switch-off-ingredient");
const zoneFiltreIngredient = document.getElementById("zone-filtre-ingredient");
const dropdownmenuIngredient = document.getElementById("dropdown-menu-ingredient");
const dropdownRechercheIngredient = document.getElementById("dropdown-recherche-ingredient")


// initialiser la mise page avec JS
zoneFiltreIngredient.style.display = "none";

// afficher et masquer le filtre
switchOnIngredient.addEventListener("click",function(){
    switchOnIngredient.style.display = "none";
    zoneFiltreIngredient.style.display = "grid";
    
    
});
switchOffIngredient.addEventListener("click",function(){
    switchOnIngredient.style.display = "initial";
    zoneFiltreIngredient.style.display = "none";
});

// redimentionner la zone recherche
zoneFiltreIngredient.style.width = dropdownmenuIngredient.clientWidth;