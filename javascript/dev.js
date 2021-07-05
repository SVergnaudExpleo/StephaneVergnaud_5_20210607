
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

// Fonction rechercher dans les listes de tag

function rechercherTag(){
    var listeTagIngredient = document.querySelectorAll("#liste-recherche-ingredient div");
    var listeTagAppareil = document.querySelectorAll("#liste-recherche-appareil div");
    var listeTagUstensil = document.querySelectorAll("#liste-recherche-ustensil div");
    rechIngredient.addEventListener("input",function(){
        var valeurChercher = rechIngredient.value.trim();
        var valRechRegex = new RegExp(valeurChercher, 'i');
        var listeIngRechercher = [];
        if (valeurChercher.length > 0){
            listeTagIngredient.forEach(function(tagIng){
                if (tagIng.innerText.search(valRechRegex) > -1){
                    listeIngRechercher.push(tagIng);
                };
            });
        }else{
            listeIngRechercher = listeTagIngredient;
        };
        if (listeIngRechercher.length > 0){
            listeIngredient.innerHTML = "";
            listeIngRechercher.forEach(function(divIng){
            listeIngredient.appendChild(divIng);    
        });
        }else{
            listeIngredient.innerHTML = "";
            listeIngredient.innerHTML = "<div>Aucun tag ne correspond à la recherche<div/>";
        };
    });
    rechAppareil.addEventListener("input",function(){
        var valeurChercher = rechAppareil.value.trim();
        var valRechRegex = new RegExp(valeurChercher, 'i');
        var listeAppRechercher = [];
        if (valeurChercher.length > 0){
            listeTagAppareil.forEach(function(tagApp){
                if (tagApp.innerText.search(valRechRegex) > -1){
                    listeAppRechercher.push(tagApp);
                };
            });
        }else{
            listeAppRechercher = listeTagAppareil;
        };
        if (listeAppRechercher.length > 0){
            listeAppareil.innerHTML = "";
            listeAppRechercher.forEach(function(divApp){
            listeAppareil.appendChild(divApp);    
        });
        }else{
            listeAppareil.innerHTML = "";
            listeAppareil.innerHTML = "<div>Aucun tag ne correspond à la recherche<div/>";
        };
    });
    rechUstensil.addEventListener("input",function(){
        var valeurChercher = rechUstensil.value.trim();
        var valRechRegex = new RegExp(valeurChercher, 'i');
        var listeUstRechercher = [];
        if (valeurChercher.length > 0){
            listeTagUstensil.forEach(function(tagUst){
                if (tagUst.innerText.search(valRechRegex) > -1){
                    listeUstRechercher.push(tagUst);
                };
            });
        }else{
            listeUstRechercher = listeTagUstensil;
        };
        if (listeUstRechercher.length > 0){
            listUstensil.innerHTML = "";
            listeUstRechercher.forEach(function(divUst){
            listUstensil.appendChild(divUst);    
        });
        }else{
            listUstensil.innerHTML = "";
            listUstensil.innerHTML = "<div>Aucun tag ne correspond à la recherche<div/>";
        };
    });
};

