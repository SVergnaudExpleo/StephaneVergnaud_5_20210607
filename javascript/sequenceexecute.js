/*     PHASE INITIALISATION
-------------------------------------------------*/

// Initialiser l'affichage des filtres
afficherFiltreIngredient();
afficherFiltreAppareil();
afficherFiltreUstensil();
// Initialiser l'affichage des recettes
creerListeCarteRecette(recipes);
// Initialiser les liste de tag
actualiserListeTag(recipes)

/*     PHASE DE RECHERCHE
-------------------------------------------------*/

var listeTagIngredient = document.querySelectorAll("#liste-recherche-ingredient div");
var listeTagAppareil = document.querySelectorAll("#liste-recherche-appareil div");
var listeTagUstensil = document.querySelectorAll("#liste-recherche-ustensil div");
var listeTag = [listeTagIngredient, listeTagAppareil, listeTagUstensil]; // actualiser les listes de tag
selectionnerTag(listeTag , recipes);



// "bouton-test" simulation de recherche

document.getElementById("bouton-test").addEventListener("click",function(){
});
