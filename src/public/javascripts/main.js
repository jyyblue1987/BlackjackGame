
document.addEventListener('DOMContentLoaded', (event) => {
    main();
});
function main() {
    console.log("main");
    initEvents();
}

console.log("Start");

function initEvents() {
    document.querySelector('.playBtn').addEventListener('click', function(e) {
        console.log("playBtn");
        e.preventDefault();
        startGame();
    });
}

function startGame() {
    // hide form
    document.querySelector('form').style.display = 'none';

    var startValues = document.querySelector('#startValues').value;

    // get card list by spliting
    var card_list = startValues.split(",");
    console.log(card_list);
}
