function God(name, src, description) {
    this.name = name;
    this.src = src;
    this.description = description;
}

const gods = [
    new God("Coré, la fille", "core.png", "Coré Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."),
    new God("Demeter, la mère", "demeter.png", "Demeter Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."),
    new God("Dio, l'exalté", "dio.png", "Dio Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."),
    new God("Hecate, l'obscure", "hecate.png", "Hecate Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")
];

const selectGod = document.getElementById('select-god');
selectGod.onclick = function() {
    document.getElementById('home').style.display = 'none';
    $('#result').fadeIn(6000);

    const god = gods[Math.floor(Math.random()*gods.length)];
    console.log(god);

    document.getElementById('god-name').innerHTML = god.name;

    const godImg = document.getElementById('god-img');
    godImg.src = 'img/' + god.src;
    godImg.alt = god.name;

    document.getElementById('god-description').innerHTML = god.description;
};
