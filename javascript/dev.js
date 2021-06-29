
// déterminer le cas de recherche
    //si 3 caractère alors trier => retourner recette trier
    //si 3 caractere et tri par tag effectué alors trier les recette tagées
    //si pas 3 caractère alors pas trier => retourner la liste reciepes
        // et gérer la recherche par tag
    

// fonction recherche globale
// fonction créer un tableau filtrer globalement
// fonction recherche par tag
// fonction créer un tableau filtré globalement et par tag


// Générer des tableaux pour la recherche par tag
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
// fonction recherche par tag => retourne un tableau
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
        recetteParTagBrut.forEach(function(recetteBrut){
            var i = 0;
            if (recetteParTagBrut.length == 1){
                recetteParTag.push(recetteBrut)
            }else if (recetteParTagBrut.length > 1){
                while (i<recetteParTagBrut.length){
                    if (recetteBrut[i].id !== recetteBrut[i+1].id){
                        recetteParTag.push(recetteBrut);
                    };
                    i++;
                };
            };
        });
    }else{
        recetteParTag = recetteParTagBrut;
    };
    return recetteParTag;
};










//choisir le tableau à trier
function choixTableTriTag(){
    if (rechGlobale.textContent.length >= 3){
        return "recipes";
    }else{
        return "recipes"; // mettre le tableau retourner de recherche globale
    };
};

