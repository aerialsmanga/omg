function God(name, description, src) {
    this.name = name;
    this.description = description;
    this.src = src;
}

const gods = [
    new God("Coré", "Coré description", "core.png"),
    new God("Demeter", "Demeter description", "demeter.png"),
    new God("Dio", "Dio description", "dio.png"),
    new God("Hecate", "Hecate description", "hecate.png")
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

    document.getElementById('god-description').innerHTML = god.description + ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
};
