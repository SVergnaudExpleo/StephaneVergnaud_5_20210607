                                        README

___________________________________________________________________________________________________

                    Bonjour, et bienvenue sur le site "Les Petits Plats"
___________________________________________________________________________________________________

NOTE TECHNIQUE

----------------------------------------- Note 1 --------------------------------------------------

Logiciel de codage : Microsoft Visual Studio Code
HTML => HTML5
CSS => Compilé depuis SASS
JavaScript => JS Vanilla

----------------------------------------- Note 2 --------------------------------------------------

Pour faciliter la maintenance du site (nottamment la mise en forme) vous trouverez ci-dessous,
les versions HTML des tag et des cartes de recette qui sont générés par le JavaScript.

// aspect d'un tag HTML // ________________________________________________________________________

<div class="tag tag--ingredient">
    <div class="valeur-tag">tag test ingredient</div>
    <i class="far fa-times-circle"></i>
</div>

// Aspect d'une carte recette HTML // _____________________________________________________________

<div id="carte-recette" class="carte">
    <div class="carte-miniature"></div>
    <div class="carte-zone1">
        <div class="carte-nom">
            nom test
        </div>
        <div class="carte-duree">
            <i class="far fa-clock"></i>
            <div class="carte-temps">
                xx min
            </div>
        </div>
    </div>
    <div class="carte-zone2">
        <div class="carte-ingredient">
            test ingredient
        </div>
        <div class="carte-description">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed non risus.
            </p>
        </div>
    </div>
</div>
