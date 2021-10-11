function God(name, subtitle, imgId, description) {
    this.name = name;
    this.subtitle = subtitle;
    this.imgId = imgId;
    this.description = description;
}

const gods = [
    new God("Coré", "La fille", "img-core", "Coré Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."),
    new God("Demeter", "La mère", "img-demeter", "Demeter Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."),
    new God("Dio", "L'exalté", "img-dio", "Dio Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."),
    new God("Hecate", "L'obscure", "img-hecate", "Hecate Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")
];

const selectGod = document.getElementById('select-god');
selectGod.onclick = function() {
    document.getElementById('home').style.display = 'none';
    $('#result').fadeIn(6000);

    const god = gods[Math.floor(Math.random()*gods.length)];

    document.getElementById('god-name').innerHTML = god.name;
    document.getElementById('god-subtitle').innerHTML = god.subtitle;
    document.getElementById(god.imgId).style.display = 'inline';
    document.getElementById('god-description').innerHTML = god.description;
};
