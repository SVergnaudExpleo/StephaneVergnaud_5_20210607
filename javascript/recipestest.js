const recipesTest = [
    {
        "id": 1,
        "name" : "Limonade de Coco",
        "servings" : 1,
        "ingredients": [
            {
                "ingredient" : "Lait de coco",
                "quantity" : 400,
                "unit" : "ml"
            },
            {
                "ingredient" : "Jus de citron",
                "quantity" : 2
            },
            {
                "ingredient" : "Crème de coco",
                "quantity" : 2,
                "unit" : "cuillères à soupe"
            },
            {
                "ingredient" : "Sucre",
                "quantite" : 30,
                "unit" : "grammes"
            },
            {
                "ingredient": "Glaçons"
            }
        ],
        "time": 10,
        "description": "Mettre les glaçons à votre goût dans le blender, ajouter le lait, la crème de coco, le jus de 2 citrons et le sucre. Mixer jusqu'à avoir la consistence désirée",
        "appliance": "Blender",
        "ustensils": ["cuillère à Soupe", "verres", "presse citron" ]
    }
]

/*
// Fonction générer des tableaux pour la recherche par tag // a supprimer
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
// Fonction recherche par tag => retourne un tableau // a supprimer
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
    if (recetteParTagBrut.length > 1){
        tableauRecetteATrier = supprimerDoublon(recetteParTagBrut);
        //recetteParTag = supprimerDoublon(recetteParTagBrut);
    }else{
        tableauRecetteATrier = recetteParTagBrut;
        //recetteParTag = recetteParTagBrut;
    };
    return tableauRecetteATrier; //recetteParTag;
};
*/