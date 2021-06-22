// Fonction actualiser la liste des boutons fermeture tag
function actualiserListeTag(){
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
    actualiserListeTag().forEach(function(item){
        item.addEventListener('click', function(event){
            event.stopPropagation();
            item.parentElement.style.display = "none";
        })
    });
};
// Ecouter la selection du tag dans la liste 
listeTag.forEach(function(tag){
    tag.forEach(function(item){
        item.addEventListener("click",function(event){
            event.stopPropagation();
            creerTag(item);
            fermerTag();
        });
    });
});