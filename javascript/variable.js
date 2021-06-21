// Constante du DOM ingredient
const switchOnIngredient = document.getElementById("switch-on-ingredient");
const switchOffIngredient = document.getElementById("switch-off-ingredient");
const filtreDeveloppeIngredient = document.getElementById("filtre-developpe-ingredient");
// Constante du DOM appareil
const switchOnAppareil = document.getElementById("switch-on-appareil");
const switchOffAppareil = document.getElementById("switch-off-appareil");
const filtreDeveloppeAppareil = document.getElementById("filtre-developpe-appareil");
// Constante du DOM ustensile
const switchOnUstensil = document.getElementById("switch-on-ustensil");
const switchOffUstensil = document.getElementById("switch-off-ustensil");
const filtreDeveloppeUstensil = document.getElementById("filtre-developpe-ustensil");

// Constante du DOM selectionner un tag
const listeRechIngredient = document.getElementById("liste-recherche-ingredient");
const listeRechIngredientChild = listeRechIngredient.innerHTML;
const tagBox = document.getElementById("tag-box");
const ingTagClass = document.getElementsByClassName("ing-tag");
const listeTagIngredient = document.querySelectorAll("#liste-recherche-ingredient div");
const listeTagAppareil = document.querySelectorAll("#liste-recherche-appareil div");
const listeTagUstensil = document.querySelectorAll("#liste-recherche-ustensil div");
const listeTag = [listeTagIngredient, listeTagAppareil, listeTagUstensil];