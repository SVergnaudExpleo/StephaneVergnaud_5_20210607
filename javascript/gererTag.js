///////////////////////////////////////////
//////////// FONCTION OUTIL ///////////////
///////////////////////////////////////////

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
// Fonction actualiser la liste des boutons fermeture tag
function actualiserListeFermerTag(){
    return document.querySelectorAll(".far.fa-times-circle");
};
// Fonction créer un tag depuis une liste de tag
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
// Fonction fermer un tag
function fermerTag(){
    actualiserListeFermerTag().forEach(function(item){
        item.addEventListener('click', function(event){
            event.stopPropagation();
            item.parentElement.style.display = "none";
        });
    });
};

//////////////////////////////////////////////
//////////// FONCTION PRINCIPALES ////////////
//////////////////////////////////////////////

// Actualiser les listes des tag
function actualiserListeTag(liste){
    var listeIng = supprimerDoublon(recupTagIngredient(liste));
    var listeApp = supprimerDoublon(recupTagAppareil(liste));
    var listeUst = supprimerDoublon(recupTagUstensil(liste));
    listeIngredient.innerHTML = "";
    listeAppareil.innerHTML = "";
    listUstensil.innerHTML = "";
    listeIng.forEach(function(ing){
        var nouvIng = document.createElement("div");
        nouvIng.textContent = ing
        listeIngredient.appendChild(nouvIng);    
    });
    listeApp.forEach(function(app){
        var nouvApp = document.createElement("div");
        nouvApp.textContent = app
        listeAppareil.appendChild(nouvApp);    
    });
    listeUst.forEach(function(ust){
        var nouvUst = document.createElement("div");
        nouvUst.textContent = ust
        listUstensil.appendChild(nouvUst);    
    });
};
// Ecouter la selection du tag dans la liste 
function selectrionnerTag(uneListeDeTag){
    uneListeDeTag.forEach(function(tag){
        tag.forEach(function(item){
            item.addEventListener("click",function(event){
                event.stopPropagation();
                creerTag(item);
                fermerTag();
            });
        });
    });
};