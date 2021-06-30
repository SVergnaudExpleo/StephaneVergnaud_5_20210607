
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
function rechercheGlobale(listeATrier){
    rechGlobale.addEventListener("input",function(){
        var recetteTrieeGlobalBrut = [];
        var recetteTrieeGlobal = [];
        if (rechGlobale.value.length >= 3){
            var valeurChercher = rechGlobale.value.trim()
            var valRechRegex = new RegExp(valeurChercher, 'i');
            listeATrier.forEach(function(uneRecette){
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
                recetteTrieeGlobal = supprimerDoublon(recetteTrieeGlobalBrut);
                carteBox.innerText = "";
                creerListeCarteRecette(recetteTrieeGlobal);
            }else{
                recetteTrieeGlobal = recetteTrieeGlobalBrut;
                pasDeResultat();
            };
        }else if (rechGlobale.value.length < 3) {
            carteBox.innerText="";
            recetteTrieeGlobal = listeATrier;
            creerListeCarteRecette(listeATrier);
        };
        console.log(recetteTrieeGlobal);
        return recetteTrieeGlobal;
    }); 
};

function pasDeResultat(){
    var carteListe = document.querySelectorAll(".carte");
    carteListe.forEach(function(carte){
        carte.remove();
    });
    carteBox.innerText = "PAS DE RESULTAT POUR VOTRE RECHERCHE"
}

