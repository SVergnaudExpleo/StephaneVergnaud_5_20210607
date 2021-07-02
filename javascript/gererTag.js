/*     FONCTION AFFICHER LES FILTRES
-------------------------------------------------*/

// Afficher et masquer le filtre ingredient
function afficherFiltreIngredient(){
    filtreDeveloppeIngredient.style.display = "none";
    switchOnIngredient.addEventListener("click",function(){
        switchOnIngredient.style.display = "none";
        filtreDeveloppeIngredient.style.display = "initial";
    });
    switchOffIngredient.addEventListener("click",function(){
        switchOnIngredient.style.display = "flex";
        filtreDeveloppeIngredient.style.display = "none";
    });
};
// Afficher et masquer le filtre appareil
function afficherFiltreAppareil(){
    filtreDeveloppeAppareil.style.display = "none";
    switchOnAppareil.addEventListener("click",function(){
        switchOnAppareil.style.display = "none";
        filtreDeveloppeAppareil.style.display = "initial";
    });
    switchOffAppareil.addEventListener("click",function(){
        switchOnAppareil.style.display = "flex";
        filtreDeveloppeAppareil.style.display = "none";
    });
};
// Afficher et masquer le filtre ustensil
function afficherFiltreUstensil(){
    filtreDeveloppeUstensil.style.display = "none";
    switchOnUstensil.addEventListener("click",function(){
        switchOnUstensil.style.display = "none";
        filtreDeveloppeUstensil.style.display = "initial";
    });
    switchOffUstensil.addEventListener("click",function(){
        switchOnUstensil.style.display = "flex";
        filtreDeveloppeUstensil.style.display = "none";
    });
};

/*     FONCTION ACTUALISER LES LISTES DE TAG       
-------------------------------------------------*/

// Fonction créer une liste brute d'ingredient
function recupTagIngredient(listeRecettes){
    var listeIngredientBrut = [];
    listeRecettes.forEach(function(recette){
        recette.ingredients.forEach(function(param){        
            listeIngredientBrut.push(param.ingredient);//.toUpperCase()
        });
    });
    return listeIngredientBrut;
};
// Fonction créer une liste brute d'appareil
function recupTagAppareil(listeRecettes){
    var listeAppareilBrut = [];
    listeRecettes.forEach(function(recette){
        listeAppareilBrut.push(recette.appliance);//.toUpperCase()
    });
    return listeAppareilBrut;
};
// Fonction créer une liste brute d'ustensile
function recupTagUstensil(listeRecettes){
    var listeUstensilBrut = [];
    listeRecettes.forEach(function(recette){
        recette.ustensils.forEach(function(unUstensil){
            listeUstensilBrut.push(unUstensil);//.toUpperCase()
        });
    });
    //console.log("liste brut",listeUstensilBrut.sort());
    //console.log("liste sans doublon",supprimerDoublon(listeUstensilBrut));
    return listeUstensilBrut;
};
// Fonction eliminer les doublons d'une liste brut 
function supprimerDoublon(listeATrier){
    var listeTraitee = [];
    listeATrier.forEach(function(elementDeListe){    
        var listeTraiteeLength = listeTraitee.length;
        var compteur = 0;
        listeTraitee.forEach(function(elementTraite){
            if (elementDeListe != elementTraite && listeTraiteeLength > 0){
                compteur ++;
            };
        });
        if (compteur == listeTraiteeLength){
            listeTraitee.push(elementDeListe);
        };
    });
    return listeTraitee.sort();   
};
// Actualiser l'affichage dans les filtres des listes de tag 
function actualiserListeTag(liste){
    var listeIng = supprimerDoublon(recupTagIngredient(liste));
    var listeApp = supprimerDoublon(recupTagAppareil(liste));
    var listeUst = supprimerDoublon(recupTagUstensil(liste));
    listeIngredient.innerHTML = "";
    listeAppareil.innerHTML = "";
    listUstensil.innerHTML = "";
    listeIng.forEach(function(ing){
        var nouvIng = document.createElement("div");
        nouvIng.textContent = ing;
        listeIngredient.appendChild(nouvIng);    
    });
    listeApp.forEach(function(app){
        var nouvApp = document.createElement("div");
        nouvApp.textContent = app;
        listeAppareil.appendChild(nouvApp);    
    });
    listeUst.forEach(function(ust){
        var nouvUst = document.createElement("div");
        nouvUst.textContent = ust;
        listUstensil.appendChild(nouvUst);    
    });
};
// Fonction actualiser la liste des tag clicable
function listeTagClicable(){
    var listeTagIngredient = document.querySelectorAll("#liste-recherche-ingredient div");
    var listeTagAppareil = document.querySelectorAll("#liste-recherche-appareil div");
    var listeTagUstensil = document.querySelectorAll("#liste-recherche-ustensil div");
    var listeTag = [listeTagIngredient, listeTagAppareil, listeTagUstensil];
    return listeTag
};

/* FONCTION SELECTIONNER ET SUPPRIMER UN TAG
-------------------------------------------------*/

// Fonction générer l'affichage HTML d'un tag  depuis une liste de tag
function creerTag(param){
    const nouvDiv = document.createElement("div");
    const divTagValeur = document.createElement("div");
    const nouvLogo = document.createElement("i");
    const idParam = param.parentElement.id;
    if (idParam == "liste-recherche-ingredient"){
        nouvDiv.className = "tag tag--ingredient";
    }else if (idParam == "liste-recherche-appareil"){
        nouvDiv.className = "tag tag--appareil";
    }else if (idParam == "liste-recherche-ustensil"){
        nouvDiv.className = "tag tag--ustensil";
    };
    divTagValeur.className = "valeur-tag";
    divTagValeur.textContent = param.textContent;
    nouvLogo.className = "far fa-times-circle";
    tagBox.appendChild(nouvDiv);
    nouvDiv.appendChild(divTagValeur);
    nouvDiv.appendChild(nouvLogo);
};
// Fonction supprimer un tag de tagBox
function fermerTagV2(){
    var unTagOuvert = document.querySelectorAll(".far.fa-times-circle");
    if (unTagOuvert.length > 0){
        unTagOuvert.forEach(function(item){
            item.addEventListener('click', function(event){
                event.stopPropagation();
                var parent = item.parentElement;
                suppressionEnCours = 1;
                parent.remove();
                // si pas de tag selectionné et pas de recherche
                if (document.querySelectorAll(".far.fa-times-circle").length == 0 && rechGlobale.value.length < 3){
                    tableauRecetteRechercheGlobale = [];
                    tableauRecetteFiltreeTag = [];
                    creerListeCarteRecette(recipes);
                    actualiserListeTag(recipes);
                    tableauTagClicable = listeTagClicable();
                    selectionnerTag();
                }else if (document.querySelectorAll(".far.fa-times-circle").length == 0 && rechGlobale.value.length >= 3){
                    tableauRecetteFiltreeTag = [];
                    creerListeCarteRecette(tableauRecetteRechercheGlobale);
                    actualiserListeTag(tableauRecetteRechercheGlobale);
                    tableauTagClicable = listeTagClicable();
                    selectionnerTag();
                }else if (document.querySelectorAll(".far.fa-times-circle").length > 0){
                    rechercheParTagV2();
                    creerListeCarteRecette(tableauRecetteFiltreeTag);
                    actualiserListeTag(tableauRecetteFiltreeTag);
                    tableauTagClicable = listeTagClicable();
                    selectionnerTag();
                }; 
                suppressionEnCours = 0;
                fermerTagV2();
            });
        });  
    };
};

/*     FONCTION RECHERCHER PAR TAG
-------------------------------------------------*/

// Fonction rechercher par le dernier tag entré
function rechercheParTagV2(){
    var recetteParTagBrut = [];
    var recetteParTag = [];
    var lesRecettesATrier = [];
    var listeTagBox = tagBox.querySelectorAll(".tag");
    // si pas de recherche par tag effectué et recherche globale effectué => utiliser table de recherche globale
    if (tableauRecetteFiltreeTag.length == 0 && rechGlobale.value.length >= 3 && suppressionEnCours == 0){
        lesRecettesATrier = tableauRecetteRechercheGlobale; 
    // Si une recherche par tag a été effectuée et recherche globale effectué => utiliser table de recherche par tag
    }else if (tableauRecetteFiltreeTag.length > 0 && rechGlobale.value.length >= 3 && suppressionEnCours == 0){
        lesRecettesATrier = tableauRecetteFiltreeTag; 
    // si un tag est selectionné et pas de recherche en cours => utiliser table de recette generale
    }else if (tableauRecetteFiltreeTag.length == 0 && rechGlobale.value.length < 3 && suppressionEnCours == 0){
        lesRecettesATrier = recipes;
    }else if (tableauRecetteFiltreeTag.length > 0 && rechGlobale.value.length < 3 && suppressionEnCours == 0){
        lesRecettesATrier = tableauRecetteFiltreeTag;
    // Si un tag est selectionné et une recherche en cours et une suppression en cours => utiliser table de recherche globale
    }else if (rechGlobale.value.length >= 3 && suppressionEnCours == 1){
        lesRecettesATrier = tableauRecetteRechercheGlobale;        
    }else if (rechGlobale.value.length < 3 && suppressionEnCours == 1){
        lesRecettesATrier = recipes;        
    //}else{
    //    lesRecettesATrier = recipes;
    };
    listeTagBox.forEach(function(unTag){
        recetteParTagBrut = [];
        lesRecettesATrier.forEach(function(uneRecette){
            if (unTag.className == "tag tag--ingredient"){
                uneRecette.ingredients.forEach(function(unIngredient){
                    if (unIngredient.ingredient == unTag.innerText) {
                        recetteParTagBrut.push(uneRecette);
                    };
                });
            };
            if (unTag.className == "tag tag--appareil"){
                if (uneRecette.appliance == unTag.innerText){
                    recetteParTagBrut.push(uneRecette);
                };
            };
            if (unTag.className == "tag tag--ustensil"){
                uneRecette.ustensils.forEach(function(unUstensil){
                    if (unUstensil == unTag.innerText){
                        recetteParTagBrut.push(uneRecette);
                    };
                });
            };
        });
        if (recetteParTagBrut.length > 1){
            recetteParTag = supprimerDoublon(recetteParTagBrut);
        }else{
            recetteParTag = recetteParTagBrut;
        };
        tableauRecetteFiltreeTag = recetteParTag;
    });
    tableauRecetteFiltreeTag = recetteParTag;
    console.log("Recette à triée sortie du filtre par tag", tableauRecetteFiltreeTag);
    return tableauRecetteFiltreeTag;
};

/*     FONCTION PRINCIPALES : SELECTIONNER UN TAG DANS LA LISTE
--------------------------------------------------------------------*/

// Ecouter la selection du tag dans la liste
function selectionnerTag(){
    var listeTagLvl1 = listeTagClicable();
    listeTagLvl1.forEach(function(tag){
        tag.forEach(function(item){
            item.addEventListener("click",function(event){
                event.stopPropagation();
                creerTag(item);
                //var filtreParTag = rechercheParTagV2();
                rechercheParTagV2();
                fermerTagV2();
                creerListeCarteRecette(tableauRecetteFiltreeTag);
                actualiserListeTag(tableauRecetteFiltreeTag);
                selectionnerTag();
            });
        });
    });
};