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
    return listeUstensilBrut;
};
// Fonction eliminer les doublons d'une liste brut 
// à retravailler pour gérer les caractères accentués
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
function fermerTag(actuaListe){
    var unTagOuvert = document.querySelectorAll(".far.fa-times-circle");
    if (unTagOuvert != undefined) {
        unTagOuvert.forEach(function(item){
            item.addEventListener('click', function(event){
                event.stopPropagation();
                var maman = item.parentElement;
                var granMaman = maman.parentElement;
                if (granMaman != null){
                    granMaman.removeChild(maman);
                    var filtreParTag = rechercheParTag(actuaListe); // injecter la table à trier
                    if (filtreParTag.length > 0){
                        creerListeCarteRecette(filtreParTag);
                        actualiserListeTag(filtreParTag);
                        var listeTagIngredient = document.querySelectorAll("#liste-recherche-ingredient div");
                        var listeTagAppareil = document.querySelectorAll("#liste-recherche-appareil div");
                        var listeTagUstensil = document.querySelectorAll("#liste-recherche-ustensil div");
                        var listeTag = [listeTagIngredient, listeTagAppareil, listeTagUstensil];
                        selectionnerTag(listeTag,filtreParTag);
                    }else if (filtreParTag.length <= 0){
                        creerListeCarteRecette(recipes);
                        actualiserListeTag(recipes);
                        var listeTagIngredient = document.querySelectorAll("#liste-recherche-ingredient div");
                        var listeTagAppareil = document.querySelectorAll("#liste-recherche-appareil div");
                        var listeTagUstensil = document.querySelectorAll("#liste-recherche-ustensil div");
                        var listeTag = [listeTagIngredient, listeTagAppareil, listeTagUstensil];
                        selectionnerTag(listeTag,recipes);
                    };
                };
            });
        });
    };
};

/*     FONCTION RECHERCHER PAR TAG
-------------------------------------------------*/

// Fonction générer des tableaux pour la recherche par tag
function creerTableTagIngredient(){
    var listeTagBox = tagBox.querySelectorAll(".tag");
    var tableIng = [];
    listeTagBox.forEach(function(tagAClasser){
        if (tagAClasser.className == "tag tag--ingredient"){
            var tagValeur = tagAClasser.querySelector(".valeur-tag").innerText;
            tableIng.push(tagValeur);
        };
    });
    return tableIng;
};
function creerTableTagAppareil(){
    var listeTagBox = tagBox.querySelectorAll(".tag");
    var tableApp = [];
    listeTagBox.forEach(function(tagAClasser){
        if (tagAClasser.className == "tag tag--appareil"){
            var tagValeur = tagAClasser.querySelector(".valeur-tag").innerText;
            tableApp.push(tagValeur);
        };
    });
    return tableApp;
};
function creerTableTagUstensil(){
    var listeTagBox = tagBox.querySelectorAll(".tag");
    var tableUst = [];
    listeTagBox.forEach(function(tagAClasser){
        if (tagAClasser.className == "tag tag--ustensil"){
            var tagValeur = tagAClasser.querySelector(".valeur-tag").innerText;
            tableUst.push(tagValeur);
        };
    });
    return tableUst;
};
// Fonction recherche par tag => retourne un tableau
function rechercheParTag(listeATrier){
    var tableTagIngredient = creerTableTagIngredient();
    var tableTagAppareil = creerTableTagAppareil();
    var tableTagUstensil = creerTableTagUstensil();
    var recetteParTagBrut = [];
    var recetteParTag = [];
    listeATrier.forEach(function(uneRecette){
        if (tableTagIngredient.length > 0){
            uneRecette.ingredients.forEach(function(unIngredient){
                var ing = unIngredient.ingredient;
                tableTagIngredient.forEach(function(tag) {
                    if (ing == tag) {
                        recetteParTagBrut.push(uneRecette);
                    };
                });
            });
        };
        if (tableTagAppareil.length > 0){
            tableTagAppareil.forEach(function(tag){
                if (uneRecette.appliance == tag){
                    recetteParTagBrut.push(uneRecette);
                };
            });
        };
        if (tableTagUstensil.length > 0){
            uneRecette.ustensils.forEach(function(unUstensil){
                tableTagUstensil.forEach(function(tag){
                    if (unUstensil == tag){
                        recetteParTagBrut.push(uneRecette);
                    };
                });
            });
        };
    });
    //trier les doublons//
    if (recetteParTagBrut.length > 0){
        recetteParTag = supprimerDoublon(recetteParTagBrut);
    }else{
        recetteParTag = recetteParTagBrut;
    };
    return recetteParTag;
};

/*     FONCTION PRINCIPALES : SELECTIONNER UN TAG DANS LA LISTE
--------------------------------------------------------------------*/

// Ecouter la selection du tag dans la liste => injecter la table à trier
function selectionnerTag(uneListeDeTag,listeRecetteATrier, comptage = 0){
    var listeRecetteSortie = [];
    var listeTagSortie = [];
    var injectionListe = [];
    var injectionTag = [];
    if (listeRecetteSortie.length > 0){
        injectionListe = listeRecetteSortie;
        injectionTag = listeTagSortie;
    }else{
        injectionListe = listeRecetteATrier;
        injectionTag = uneListeDeTag;
    };
    injectionTag.forEach(function(tag){
        tag.forEach(function(item){
            item.addEventListener("click",function(event){
                event.stopPropagation();
                creerTag(item);
                var filtreParTag = rechercheParTag(injectionListe);
                fermerTag(filtreParTag);
                creerListeCarteRecette(filtreParTag);
                actualiserListeTag(filtreParTag);
                var listeTagIngredient = document.querySelectorAll("#liste-recherche-ingredient div");
                var listeTagAppareil = document.querySelectorAll("#liste-recherche-appareil div");
                var listeTagUstensil = document.querySelectorAll("#liste-recherche-ustensil div");
                var listeTag = [listeTagIngredient, listeTagAppareil, listeTagUstensil];
                listeRecetteSortie = filtreParTag;
                listeTagSortie = listeTag;
                selectionnerTag(listeTagSortie,listeRecetteSortie);
            });
        });
    });
};