/////////////////////////////////////
////// PHASE INITIALISATION /////////
/////////////////////////////////////

// Initialiser l'affichage des filtres
filtreDeveloppeIngredient.style.display = "none";
filtreDeveloppeAppareil.style.display = "none";
filtreDeveloppeUstensil.style.display = "none";
// Initialiser l'affichage des recettes
creerListeCarteRecette(recipes);
// Initialiser les liste de tag
actualiserListeTag(recipes)
var listeTagIngredient = document.querySelectorAll("#liste-recherche-ingredient div");
var listeTagAppareil = document.querySelectorAll("#liste-recherche-appareil div");
var listeTagUstensil = document.querySelectorAll("#liste-recherche-ustensil div");
var listeTag = [listeTagIngredient, listeTagAppareil, listeTagUstensil]; // actualiser les listes de tag
selectionnerTag(listeTag , recipes);

//////////////////////////////////////
/////// PHASE AFFICHER FILTRE ////////
//////////////////////////////////////

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

/////////////////////////////////
/////// PHASE DE RECHERCHE //////
/////////////////////////////////

// "bouton-test" simulation de recherche
document.getElementById("bouton-recherche").addEventListener("click",function(){
});

document.getElementById("bouton-test").addEventListener("click",function(){
});
