/*     PHASE INITIALISATION
-------------------------------------------------*/

// initialiser un tableau de recette filtré par recherche
var tableauRecetteRechercheGlobale = [];
// Initialiser un tableau de recette filtré par tag
var tableauRecetteFiltreeTag = [];
// Initialiser l'indicateur de suppression en cours
var suppressionEnCours = 0;

// Initialiser l'affichage des filtres
afficherFiltreIngredient();
afficherFiltreAppareil();
afficherFiltreUstensil();
// Initialiser l'affichage des recettes
creerListeCarteRecette(recipes);
// Initialiser les liste de tag
actualiserListeTag(recipes);
// Initialiser un tableau de stockage des liste de tag clicable
var tableauTagClicable = listeTagClicable();


/*     PHASE DE RECHERCHE
-------------------------------------------------*/
rechercheGlobale();




// "bouton-test" simulation de recherche

document.getElementById("bouton-test").addEventListener("click",function(){
}); 
