/////////////////////////////////
////////// FONCTION OUTIL ///////
/////////////////////////////////

// Traiter l'orthographe de "quantity" des recettes
function traitementCaseQt(ing){ 
    if(ing.quantity != "" && ing.quantity != undefined){
        return ing.quantity;
    }else if(ing.quantite != "" && ing.quantite != undefined){
        return ing.quantite;
    }else{
        return "Selon votre goût";
    };
};
// Traiter présence et type de "unit" des recettes 
function traitementUnit(ing){
    var casGramme = "grammes" || "gramme";
    var casCuillereSoupe = "cuillères à soupe" || "cuillère à soupe";
    var casCuillereCafe = "cuillères à café" || "cuillère à café";
    if (ing.unit != casGramme && ing.unit != casCuillereSoupe && ing.unit != casCuillereCafe && ing.unit != "" && ing.unit!= undefined) {
        return ing.unit;
    }else if(ing.unit == casGramme){
        return "g";
    }else if(ing.unit == casCuillereSoupe){
        return "Cuillère(s)";
    }else if(ing.unit == casCuillereCafe){
        return "Cuillère(s)";
    }else if(ing.unit == undefined ){
        return "";
    };
};
// Fonction créer une carte
function creerCarteRecette(traiterUneRecette){
    const nouvDivCarte = document.createElement("div");
    nouvDivCarte.className = "carte";
    carteBox.appendChild(nouvDivCarte);
        const nouvDivMiniature = document.createElement("div");
        nouvDivMiniature.className = "carte-miniature";
        nouvDivCarte.appendChild(nouvDivMiniature);
        const nouvDivCarteZ1 = document.createElement("div");
        nouvDivCarteZ1.className = "carte-zone1";
        nouvDivCarte.appendChild(nouvDivCarteZ1);
            const nouvDivNom = document.createElement("div"); 
            nouvDivNom.className = "carte-nom";
            nouvDivNom.textContent = traiterUneRecette.name; // Injecter le nom
            nouvDivCarteZ1.appendChild(nouvDivNom);
            const nouvDivDuree = document.createElement("div");
            nouvDivDuree.className = "carte-duree";
            nouvDivCarteZ1.appendChild(nouvDivDuree);
                const nouvILogo = document.createElement("i");
                nouvILogo.className = "far fa-clock";
                nouvDivDuree.appendChild(nouvILogo);
                const nouvDivTemps =  document.createElement("div"); 
                nouvDivTemps.className = "carte-temps";
                nouvDivTemps.textContent = traiterUneRecette.time + " min"; // Injecter le temps
                nouvDivDuree.appendChild(nouvDivTemps);
        const nouvDivCarteZ2 = document.createElement("div");
        nouvDivCarteZ2.className = "carte-zone2";
        nouvDivCarte.appendChild(nouvDivCarteZ2);
            const nouvDivIngredient = document.createElement("div"); 
            nouvDivIngredient.className = "carte-ingredient";
            nouvDivCarteZ2.appendChild(nouvDivIngredient);
                traiterUneRecette.ingredients.forEach(function(unIngredient){ // Injecter liste ingredient
                    const nouvIng = document.createElement("div");
                    nouvDivIngredient.appendChild(nouvIng);
                    nouvIng.textContent = unIngredient.ingredient +" : "+traitementCaseQt(unIngredient)+" "+traitementUnit(unIngredient);
                });
            const nouvDivDescription = document.createElement("div"); 
            nouvDivDescription.className = "carte-description";
            nouvDivCarteZ2.appendChild(nouvDivDescription);
                const nouvPDescription = document.createElement("p");// injecter description
                nouvPDescription.textContent = traiterUneRecette.description;
                nouvDivDescription.appendChild(nouvPDescription);
};

//////////////////////////////////
////// FONCTION PRINCIPALE ///////
//////////////////////////////////

// Fonction afficher les cartes de recettes
function creerListeCarteRecette(tableRecette){
    tableRecette.forEach(function(recette){
        creerCarteRecette(recette);
    });
};
