
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

    displayGame([2, 3], [4, 5]);
}

function displayGame(com_cards, player_cards) {
    var html = '<div class="game">' +
                    '<div class="score"><b>Computer Hand - Total: ?</b></div>';

    html += '<div class="cards">';
    for(var i = 0; i < com_cards.length; i++)
    {
        html += '<img src="/images/2C.png" style="margin-left:' + (-50 + 95 * i) + 'px"/>'
    }
    html += '</div>';
                    
    html += '<div class="score"><b>Player Hand - Total: 8</b></div>';
                

    html += '<div class="cards">';
    for(var i = 0; i < player_cards.length; i++)
    {
        html += '<img src="/images/2C.png" style="margin-left:' + (-50 + 95 * i) + 'px"/>'
    }
    html += '</div>';

    html += '<div class="action">';
    html += "<button>Hit</button>";
    html += "<button>Stand</button>";
    html += '</div>';    


    querySelector = document.querySelector(".start").innerHTML = html;
}
