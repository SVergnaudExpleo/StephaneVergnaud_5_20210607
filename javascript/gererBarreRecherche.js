///// FONCTION OUTIL /////

// Fonction afficher un message de recherche infructeuse
function pasDeResultat(){
    var carteListe = document.querySelectorAll(".carte");
    carteListe.forEach(function(carte){
        carte.remove();
    });
    carteBox.innerText = "PAS DE RESULTAT POUR VOTRE RECHERCHE";
};

///// FONCTION PRINCIPALE /////

// Recherche dans la barre de recherche globale
function rechercheGlobale(){
    rechGlobale.addEventListener("input",function(){
        var lesRecetteATrier = [];
        var recetteTrieeGlobalBrut = [];
        var unTagOuvert = document.querySelectorAll(".far.fa-times-circle");
        if (rechGlobale.value.length >= 3){
            var valeurChercher = rechGlobale.value.trim()
            var valRechRegex = new RegExp(valeurChercher, 'i');
            if (unTagOuvert.length > 0){// definit la liste des recettes à trier
                lesRecetteATrier = tableauRecetteFiltreeTag;
            }else{
                lesRecetteATrier = recipes;
            };
            lesRecetteATrier.forEach(function(uneRecette){
                if (uneRecette.name.search(valRechRegex) > -1){
                    recetteTrieeGlobalBrut.push(uneRecette);
                };
                uneRecette.ingredients.forEach(function(unIngredient){
                    if (unIngredient.ingredient.search(valRechRegex) > -1){
                        recetteTrieeGlobalBrut.push(uneRecette);
                    };
                });
                if (uneRecette.description.search(valRechRegex) > -1){
                    recetteTrieeGlobalBrut.push(uneRecette);
                };
            });
            if (recetteTrieeGlobalBrut.length > 0){
                tableauRecetteRechercheGlobale = supprimerDoublon(recetteTrieeGlobalBrut);
                carteBox.innerText = "";
                creerListeCarteRecette(tableauRecetteRechercheGlobale);
            }else{
                tableauRecetteRechercheGlobale = recetteTrieeGlobalBrut;
                pasDeResultat();
            };
            actualiserListeTag(tableauRecetteRechercheGlobale);
            tableauTagClicable = listeTagClicable();
        }else if (rechGlobale.value.length < 3 && unTagOuvert.length == 0){
            carteBox.innerText="";
            tableauRecetteFiltreeTag = [];
            tableauRecetteRechercheGlobale = recipes;
            creerListeCarteRecette(recipes);
            actualiserListeTag(tableauRecetteRechercheGlobale);
            tableauTagClicable = listeTagClicable();
        }else if (rechGlobale.value.length < 3 && unTagOuvert.length > 0){
            tableauRecetteRechercheGlobale = recipes;
            rechercheParTagV2()
            creerListeCarteRecette(tableauRecetteFiltreeTag);
            actualiserListeTag(tableauRecetteFiltreeTag);
            tableauTagClicable = listeTagClicable();
        };
        selectionnerTag();
        console.log("Recette à triée sortie de la recherche globale ", tableauRecetteRechercheGlobale);
    });
    tableauTagClicable = listeTagClicable();
    selectionnerTag();
};