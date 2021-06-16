// initialiser l'affichage des filtres
filtreDeveloppeIngredient.style.display = "none";
filtreDeveloppeAppareil.style.display = "none";
filtreDeveloppeUstensil.style.display = "none";
// Afficher et masquer le filtre ingredient
switchOnIngredient.addEventListener("click",function(){
    switchOnIngredient.style.display = "none";
    filtreDeveloppeIngredient.style.display = "initial";
});
switchOffIngredient.addEventListener("click",function(){
    switchOnIngredient.style.display = "flex";
    filtreDeveloppeIngredient.style.display = "none";
});
// Afficher et masquer le filtre appareil
switchOnAppareil.addEventListener("click",function(){
    switchOnAppareil.style.display = "none";
    filtreDeveloppeAppareil.style.display = "initial";
});
switchOffAppareil.addEventListener("click",function(){
    switchOnAppareil.style.display = "flex";
    filtreDeveloppeAppareil.style.display = "none";
});
// Afficher et masquer le filtre ustensil
switchOnUstensil.addEventListener("click",function(){
    switchOnUstensil.style.display = "none";
    filtreDeveloppeUstensil.style.display = "initial";
});
switchOffUstensil.addEventListener("click",function(){
    switchOnUstensil.style.display = "flex";
    filtreDeveloppeUstensil.style.display = "none";
})