const rechGlobale = document.getElementById("recherche-globale");
const carteBox = document.getElementById("carte-box");

// "bouton-test"
document.getElementById("bouton-test").addEventListener("click",function(){
    creerCarteRecette();
});


// récupérer les élément du tableau
recipes.forEach(function(recette){ //récup chaque entrée du tableau
    console.log(recette.name);
    
});

// fonction recherche globale

// fonction créer un tableau filtrer globalement

// fonction recherche par tag

// fonction créer un tableau filtré globalement et par tag

// fonction créer une carte
function creerCarteRecette(){
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
            nouvDivNom.textContent = "Nom test" //injecter un textcontent
            nouvDivCarteZ1.appendChild(nouvDivNom);
            const nouvDivDuree = document.createElement("div");
            nouvDivDuree.className = "carte-duree";
            nouvDivCarteZ1.appendChild(nouvDivDuree);
                const nouvILogo = document.createElement("i");
                nouvILogo.className = "far fa-clock";
                nouvDivDuree.appendChild(nouvILogo);
                const nouvDivTemps =  document.createElement("div"); 
                nouvDivTemps.className = "carte-temps";
                nouvDivTemps.textContent = "test 10" + " min";// injecter le temps
                nouvDivDuree.appendChild(nouvDivTemps);
        const nouvDivCarteZ2 = document.createElement("div");
        nouvDivCarteZ2.className = "carte-zone2";
        nouvDivCarte.appendChild(nouvDivCarteZ2);
            const nouvDivIngredient = document.createElement("div"); //injecter liste ingredient
            nouvDivIngredient.className = "carte-ingredient";
            nouvDivIngredient.textContent = "test ingredient /br test ingredient";
            nouvDivCarteZ2.appendChild(nouvDivIngredient);
            const nouvDivDescription = document.createElement("div"); 
            nouvDivDescription.className = "carte-description";
            nouvDivCarteZ2.appendChild(nouvDivDescription);
                const nouvPDescription = document.createElement("p");// injecter description
                nouvPDescription.textContent = "test test Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed non risus. test"
                nouvDivDescription.appendChild(nouvPDescription);
};


