
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


var card_list = [];
var com_cards_list = [];
var player_cards_list = [];
var card_top = 0;

function startGame() {
    // hide form
    document.querySelector('form').style.display = 'none';

    var startValues = document.querySelector('#startValues').value;

    // get card list by spliting
    card_list = startValues.split(",");
    console.log(card_list);
    card_top = 0;

    com_cards_list.push(pickCard());
    player_cards_list.push(pickCard());
    com_cards_list.push(pickCard());
    player_cards_list.push(pickCard());

    displayGame(com_cards_list, player_cards_list);
}

function calcTotalScore(cards) {
    // player score
    var sum = 0;
    for(var i = 0; i < cards.length; i++)
    {
        var num = cards[i];     
        if( num == 'A' )
            num = 1;
        else if( num == 'J' || num == 'Q' || num == 'K' )
            num = 10;
        else 
            num = parseInt(num);


        sum += num;
    }

    return sum;
}

function displayGame(com_cards, player_cards) {
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
        var num = com_cards[i];
        var card = document.createElement("IMG");
        card.setAttribute("src", "/images/" + num + "D.png");
        card.style.marginLeft = (-50 + 95 * i) + 'px';
        computerCard.appendChild(card);
    }

    gameDiv.appendChild(computerCard);


    // player score
    var playerSum = calcTotalScore(player_cards);
    
    var playerScore = document.createElement("DIV");
    playerScore.classList.add('score');
    playerScore.innerHTML = '<b>Player Hand - Total: ' + playerSum + '</b>';
    gameDiv.appendChild(playerScore);

    // player card
    var playerCard = document.createElement("DIV");
    playerCard.classList.add('cards');

    for(var i = 0; i < player_cards.length; i++)
    {
        var num = player_cards[i];
        var card = document.createElement("IMG");
        card.setAttribute("src", "/images/" + num + "D.png");
        card.style.marginLeft = (-50 + 95 * i) + 'px';
        playerCard.appendChild(card);
    }
    gameDiv.appendChild(playerCard);

    // Button layer
    var actionDiv = document.createElement("DIV");
    actionDiv.classList.add('action');

    var hitButton = document.createElement("Button");
    hitButton.innerHTML = "Hit";
    actionDiv.appendChild(hitButton);

    var standButton = document.createElement("Button");
    standButton.innerHTML = "Stand";
    actionDiv.appendChild(standButton);

    gameDiv.appendChild(actionDiv);

    hitButton.addEventListener('click', function(e) {
        console.log("hitButton");
        
    });

    standButton.addEventListener('click', function(e) {
        console.log("hitButton");
    });
}

function pickRandomCard()
{
    // pick random
    var card = Math.floor(Math.random() * 13) + 1;
    if( card == 1 )
        card = 'A';
    else if( card == 11 )
        card = 'J';
    else if( card == 12 )
        card = 'Q';
    else if( card == 13 )
        card = 'K';

    return card;
}

function pickCard() {
    var card = "";
    if( card_top >= card_list.length )
    {
        // pick random
        card = pickRandomCard();
    }
    else
    {
        card = card_list[card_top];
        if( card == "" )
            card = pickRandomCard();
        
        card_top++;
    }

    return card;
}