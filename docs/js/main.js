function God(name, subtitle, imgId, description) {
    this.name = name;
    this.subtitle = subtitle;
    this.imgId = imgId;
    this.description = description;
}

const gods = [
    new God("Coré", "La fille", "img-core", "Déesse du renouveau, elle brille par sa douceur et par son calme absolu. Les prêtres et prêtresses de Coré sont spécialisés dans les sorts de guérison et d'altération physique."),
    new God("Demeter", "La mère", "img-demeter", "Déesse de la nature et divinité principale d'Eleusis, elle est sévère mais avant tout bienveillante. Elle accorde à ses fidèles les pouvoirs des éléments. (Feu, eau, air, terre.) Les sorts qu'elle inspire aux Mystes sont simples mais très puissants et d'une grande stabilité."),
    new God("Dio", "L'exalté", "img-dio", "Dieu de la démesure. Excentrique et épicurien, Dio accueille avec joie tous ses fidèles. Les Mystes sous son égide pourront utiliser des sorts de manipulation mentale."),
    new God("Hecate", "L'obscure", "img-hecate", "Déesse de la nuit et des ténèbres, elle est lunatique et imprévisible. Les Mystes qu'elle choisit seront capables de manipuler les pouvoirs liés à la nuit et à la mort. Ces sorts demandent la plus grande prudence car ils sont instables et peuvent se retourner contre leur utilisateur.")
];

const selectGod = document.getElementById('select-god');
selectGod.onclick = function() {
    document.getElementById('home').style.display = 'none';
    $('#result').fadeIn(10000);

    const god = gods[Math.floor(Math.random()*gods.length)];

    document.getElementById('god-name').innerHTML = god.name;
    document.getElementById('god-subtitle').innerHTML = god.subtitle;
    document.getElementById(god.imgId).style.display = 'inline';
    document.getElementById('god-description').innerHTML = god.description;
};
