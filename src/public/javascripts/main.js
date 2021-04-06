
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
    // var html = '<div class="game">' +
    //                 '<div class="score"><b>Computer Hand - Total: ?</b></div>';

    // html += '<div class="cards">';
    // for(var i = 0; i < com_cards.length; i++)
    // {
    //     html += '<img src="/images/2C.png" style="margin-left:' + (-50 + 95 * i) + 'px"/>'
    // }
    // html += '</div>';
                    
    // html += '<div class="score"><b>Player Hand - Total: 8</b></div>';
                

    // html += '<div class="cards">';
    // for(var i = 0; i < player_cards.length; i++)
    // {
    //     html += '<img src="/images/2C.png" style="margin-left:' + (-50 + 95 * i) + 'px"/>'
    // }
    // html += '</div>';

    // html += '<div class="action">';
    // html += "<button>Hit</button>";
    // html += "<button>Stand</button>";
    // html += '</div>';    


    // document.querySelector(".start").innerHTML = html;

    var gameDiv = document.querySelector(".game");

    // computer score
    var computerScore = document.createElement("DIV");
    computerScore.classList.add('score');
    computerScore.innerHTML = '<b>Computer Hand - Total: ?</b>';
    gameDiv.appendChild(computerScore);

    // computer card
    var computerCard = document.createElement("DIV");
    computerCard.classList.add('cards');

    for(var i = 0; i < com_cards.length; i++)
    {
        var card = document.createElement("IMG");
        card.setAttribute("src", "/images/2C.png");
        card.style.marginLeft = (-50 + 95 * i) + 'px';
        computerCard.appendChild(card);
    }

    gameDiv.appendChild(computerCard);


    // player score score
    var playerScore = document.createElement("DIV");
    playerScore.classList.add('score');
    playerScore.innerHTML = '<b>Player Hand - Total: 8</b>';
    gameDiv.appendChild(playerScore);

    // player card
    var playerCard = document.createElement("DIV");
    playerCard.classList.add('cards');

    for(var i = 0; i < player_cards.length; i++)
    {
        var card = document.createElement("IMG");
        card.setAttribute("src", "/images/2C.png");
        card.style.marginLeft = (-50 + 95 * i) + 'px';
        playerCard.appendChild(card);
    }
    gameDiv.appendChild(playerCard);

    // Button layer
    var actionDiv = document.createElement("DIV");
    actionDiv.classList.add('score');

    var hitButton = document.createElement("Button");
    hitButton.innerHTML = "Hit";
    actionDiv.appendChild(hitButton);

    var standButton = document.createElement("Button");
    standButton.innerHTML = "Stand";
    actionDiv.appendChild(standButton);

    gameDiv.appendChild(actionDiv);
    



}
