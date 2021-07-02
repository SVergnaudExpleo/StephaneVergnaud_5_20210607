
/* Reflexion sur code => a supprimer 
-------------------------------------------------*/

// déterminer le cas de recherche
    //si 3 caractère alors trier => retourner recette trier
    //si 3 caractere et tri par tag effectué alors trier les recette tagées
    //si pas 3 caractère alors pas trier => retourner la liste reciepes
        // et gérer la recherche par tag
    
// fonction recherche globale
// fonction créer un tableau filtrer globalement
// fonction recherche par tag
// fonction créer un tableau filtré globalement et par tag

/*
-------------------------------------------------*/

// Recherche barre de recherche globale
function rechercheGlobale(){
    rechGlobale.addEventListener("input",function(){
        var lesRecetteATrier = [];
        var recetteTrieeGlobalBrut = [];
        var unTagOuvert = document.querySelectorAll(".far.fa-times-circle");
        if (rechGlobale.value.length >= 3){
            var valeurChercher = rechGlobale.value.trim()
            var valRechRegex = new RegExp(valeurChercher, 'i');
            if (tableauRecetteFiltreeTag.length > 0){// definit la liste des recettes à trier
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
        }else if (rechGlobale.value.length < 3 && unTagOuvert.length == 0){
            carteBox.innerText="";
            tableauRecetteRechercheGlobale = recipes;
            creerListeCarteRecette(recipes);
        };
        actualiserListeTag(tableauRecetteRechercheGlobale);
        tableauTagClicable = listeTagClicable()
        selectionnerTag(tableauTagClicable,tableauRecetteRechercheGlobale);
        console.log("Recette à triée sortie de la recherche globale ", tableauRecetteRechercheGlobale);
    });
    tableauTagClicable = listeTagClicable();
    selectionnerTag(tableauTagClicable,tableauRecetteRechercheGlobale);
};


// Fonction afficher un message de recherche infructeuse
function pasDeResultat(){
    var carteListe = document.querySelectorAll(".carte");
    carteListe.forEach(function(carte){
        carte.remove();
    });
    carteBox.innerText = "PAS DE RESULTAT POUR VOTRE RECHERCHE";
};




///////////////////////////////////////////////////////////////////





