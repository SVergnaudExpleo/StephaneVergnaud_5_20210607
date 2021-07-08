/*      FONCTION OUTIL ________________________*/

// Fonction afficher un message de recherche infructeuse
function pasDeResultat() {
    var carteListe = document.querySelectorAll(".carte");
    carteListe.forEach(function (carte){
        carte.remove();
    });
    carteBox.innerText = "Aucune recette ne correspond à votre critère… vous pouvez chercher « tarte aux pommes », « poisson », etc.";
}

/* FONCTION PRINCIPALE ________________________*/

// Recherche dans la barre de recherche globale
function rechercheGlobale() {
    rechGlobale.addEventListener("input", function () {
        var lesRecetteATrier = [];
        var recetteTrieeGlobalBrut = [];
        var unTagOuvert = document.querySelectorAll(".far.fa-times-circle");
        if (rechGlobale.value.length >= 3) {
            var valeurChercher = rechGlobale.value.trim();
            var valRechRegex = new RegExp(valeurChercher, 'i');
            if (unTagOuvert.length > 0) {
                lesRecetteATrier = tableauRecetteFiltreeTag;
            } else {
                lesRecetteATrier = recipes;
            }
            lesRecetteATrier.forEach(function (uneRecette) {
                if (uneRecette.name.search(valRechRegex) > -1){
                    recetteTrieeGlobalBrut.push(uneRecette);
                }
                uneRecette.ingredients.forEach(function (unIngredient) {
                    if (unIngredient.ingredient.search(valRechRegex) > -1) {
                        recetteTrieeGlobalBrut.push(uneRecette);
                    }
                });
                if (uneRecette.description.search(valRechRegex) > -1) {
                    recetteTrieeGlobalBrut.push(uneRecette);
                }
            });
            if (recetteTrieeGlobalBrut.length > 0) {
                tableauRecetteRechercheGlobale = supprimerDoublon(recetteTrieeGlobalBrut);
                carteBox.innerText = "";
                creerListeCarteRecette(tableauRecetteRechercheGlobale);
            } else {
                tableauRecetteRechercheGlobale = recetteTrieeGlobalBrut;
                pasDeResultat();
            }
            actualiserListeTag(tableauRecetteRechercheGlobale);
            tableauTagClicable = listeTagClicable();
        } else if (rechGlobale.value.length < 3 && unTagOuvert.length === 0) {
            carteBox.innerText = "";
            tableauRecetteFiltreeTag = [];
            tableauRecetteRechercheGlobale = recipes;
            creerListeCarteRecette(recipes);
            actualiserListeTag(tableauRecetteRechercheGlobale);
            tableauTagClicable = listeTagClicable();
        } else if (rechGlobale.value.length < 3 && unTagOuvert.length > 0) {
            carteBox.innerText = "";
            tableauRecetteRechercheGlobale = recipes;
            rechercheParTagV2();
            creerListeCarteRecette(tableauRecetteFiltreeTag);
            actualiserListeTag(tableauRecetteFiltreeTag);
            tableauTagClicable = listeTagClicable();
        }
        selectionnerTag();
        //console.log("Recette à triée sortie de la recherche globale ", tableauRecetteRechercheGlobale);
    });
    tableauTagClicable = listeTagClicable();
    selectionnerTag();
}

// Rechercher dans les listes de tag
function rechercherTag() {
    var listeTagIngredient = document.querySelectorAll("#liste-recherche-ingredient div");
    var listeTagAppareil = document.querySelectorAll("#liste-recherche-appareil div");
    var listeTagUstensil = document.querySelectorAll("#liste-recherche-ustensil div");
    rechIngredient.addEventListener("input", function () {
        var valeurChercher = rechIngredient.value.trim();
        var valRechRegex = new RegExp(valeurChercher, 'i');
        var listeIngRechercher = [];
        if (valeurChercher.length > 0) {
            listeTagIngredient.forEach(function (tagIng) {
                if (tagIng.innerText.search(valRechRegex) > -1) {
                    listeIngRechercher.push(tagIng);
                }
            });
        } else {
            listeIngRechercher = listeTagIngredient;
        }
        if (listeIngRechercher.length > 0) {
            listeIngredient.innerHTML = "";
            listeIngRechercher.forEach(function (divIng) {
                listeIngredient.appendChild(divIng);
            });
        } else {
            listeIngredient.innerHTML = "";
            listeIngredient.innerHTML = "<div>Aucun tag ne correspond à la recherche<div/>";
        }
    });
    rechAppareil.addEventListener("input", function () {
        var valeurChercher = rechAppareil.value.trim();
        var valRechRegex = new RegExp(valeurChercher, 'i');
        var listeAppRechercher = [];
        if (valeurChercher.length > 0) {
            listeTagAppareil.forEach(function (tagApp) {
                if (tagApp.innerText.search(valRechRegex) > -1) {
                    listeAppRechercher.push(tagApp);
                }
            });
        } else {
            listeAppRechercher = listeTagAppareil;
        }
        if (listeAppRechercher.length > 0) {
            listeAppareil.innerHTML = "";
            listeAppRechercher.forEach(function (divApp) {
                listeAppareil.appendChild(divApp);
            });
        } else {
            listeAppareil.innerHTML = "";
            listeAppareil.innerHTML = "<div>Aucun tag ne correspond à la recherche<div/>";
        }
    });
    rechUstensil.addEventListener("input", function () {
        var valeurChercher = rechUstensil.value.trim();
        var valRechRegex = new RegExp(valeurChercher, 'i');
        var listeUstRechercher = [];
        if (valeurChercher.length > 0) {
            listeTagUstensil.forEach(function (tagUst) {
                if (tagUst.innerText.search(valRechRegex) > -1) {
                    listeUstRechercher.push(tagUst);
                }
            });
        } else {
            listeUstRechercher = listeTagUstensil;
        }
        if (listeUstRechercher.length > 0) {
            listUstensil.innerHTML = "";
            listeUstRechercher.forEach(function (divUst) {
                listUstensil.appendChild(divUst);    
            });
        } else {
            listUstensil.innerHTML = "";
            listUstensil.innerHTML = "<div>Aucun tag ne correspond à la recherche<div/>";
        }
    });
}