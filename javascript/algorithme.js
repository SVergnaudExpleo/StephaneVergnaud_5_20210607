/*     PHASE INITIALISATION _______________________________________*/

// Initialiser un tableau de recette filtré par recherche
var tableauRecetteRechercheGlobale = [];
// Initialiser un tableau de recette filtré par tag
var tableauRecetteFiltreeTag = [];
// Initialiser l'indicateur de suppression en cours
var suppressionEnCours = 0;
// Initialiser l'affichage des filtres / recette / listes de tag
afficherFiltreIngredient();
afficherFiltreAppareil();
afficherFiltreUstensil();
creerListeCarteRecette(recipes);
actualiserListeTag(recipes);
// Initialiser un tableau de stockage des liste de tag clicable
var tableauTagClicable = listeTagClicable();

/*     PHASE DESACTIVER LA RECHERCHE DANS LES TAGS ________________*/

retirerRechercheTag();

/*     PHASE DE RECHERCHE _________________________________________*/

rechercheGlobale();