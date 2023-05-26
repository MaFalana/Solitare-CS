/**************************************
 TITLE: index.js							
 AUTHOR: Malik Falana (MF)			
 CREATE DATE: 05/18/2023	
 PURPOSE: To use jquery and functions for 2D Graphic Demo
 LAST MODIFIED ON: 05/18/2023	
 LAST MODIFIED BY: Malik Falana (MF)
 MODIFICATION HISTORY:
 05/18/2023: Original Build
***************************************/

$(document).ready(function() 
{
    const gameStates = [];
    const deck = [];
    const stack1 = [];

    //const orignalGameState;

    
    // function createCard(suit, rank) {
    //     var card = document.createElement("div");
    //     card.className = "card";
    //     card.id = `${suit}-${rank}`;
    //     card.draggable = true;
    //     card.setAttribute("ondragstart", "drag(event)");
      
    //     var front = document.createElement("div");
    //     front.className = "front";
    //     card.appendChild(front);
      
    //     var frontImage = document.createElement("img");
    //     frontImage.src = `assets/${suit}-${rank}.png`;
    //     front.appendChild(frontImage);
      
    //     var back = document.createElement("div");
    //     back.className = "back";
    //     card.appendChild(back);
      
    //     var backImage = document.createElement("img");
    //     backImage.src = "assets/back-maroon.png";
    //     back.appendChild(backImage);
      
    //     return card;
    //   }

    //   function flipCard() {
    //     var $card = $(this);

    //     $card.children().toggleClass("flip, down");

        
    //     if ($card.children.hasClass("flip")) {
    //       $card.children(".back").hide();
    //       $card.children(".face").show();
    //     } else {
    //       $card.children(".face").hide();
    //       $card.children(".back").show();
    //     }
    //   }

    function createCard(suit, rank) // creates a card
    {
        var card = document.createElement("img");
        card.className = "card back";
        card.id = `${suit}-${rank}`;
        card.src = `assets/back-maroon.png`; // should change when card is flipped
        card.draggable = true;
        //card.ondragstart = drag;
        card.setAttribute("ondragstart", "drag(event)");
        //card.setAttribute("onclick", "flipCard()");
        return card;
    }

    function createDeck() // create a deck of cards
    {
        for(var i = 1; i <= 13; i++) // create hearts
        {
            var card = createCard(`heart`, `${i}`);
            deck.push(card); //append card to deck
        }

        for(var i = 1; i <= 13; i++) // create spades
        {
            var card = createCard(`spades`, `${i}`);
            deck.push(card); //append card to deck
        }

        for(var i = 1; i <= 13; i++) // create clubs
        {
            var card = createCard(`clubs`, `${i}`);
            deck.push(card); //append card to deck
        }

        for(var i = 1; i <= 13; i++) // create diamonds
        {
            var card = createCard(`diamond`, `${i}`);
            deck.push(card); //append card to deck
        }
        
        //document.querySelector(".deck#stack-0").appendChild(card); // add card to deck
    }

    function shuffleCards() // shuffle cards
    {
        deck.sort(() => Math.random() - 0.5);
    }

    function dealCards() // deal cards
    {
        createDeck();
        shuffleCards();

        for(var i = 0; i < 52; i++)
        {
            document.querySelector(".deck#stack-0").appendChild(deck[i]); 
        }

        for(var i = 0; i < 7; i++)
        {
            createStack(i, i + 1);  
        }
    }

    function createStack(id, val) // create a stack
    {
        for(var i = 0; i < val; i++)
        {
            var card = deck.pop();
            //var card = $(".deck#stack-0").children(".card:last");
            $(`.bottom-row .deck#stack-${id}`).append(card);
            $(card).css("margin-top", i * 30 + "px");
            if (i === val - 1) 
            {
                var cardId = $(card).attr("id");
                $(card).toggleClass("back face");
                $(card).attr("src", `assets/${cardId}.png`); //make the last card face up
                
            }
        }

        //var faceCard = $(`.bottom-row .deck#stack-${id} .card:last`);
        
        //faceCard.toggleClass("back face");


        console.log(`stack-${id}`);
    }
      
    function drawCard() // draws a card from the deck
    {
        saveGameState(); // Before moving the card, save the game state

        //var deckId = $(this).attr("id");
        var firstCard = $(this).children(".card:last");

        //firstCard.on("click",flipCard);
    
        if (firstCard.length) 
        {
            var cardId = firstCard.attr("id");
            firstCard.animate({left: '170px'});
            firstCard.toggleClass("back face");
            firstCard.attr("src", `assets/${cardId}.png`); //make the last card face up
            $("#stack-1").append(firstCard); // Move the card to the target deck
        }

        if ($("#stack-0").children(".card").length === 0)
        {
            $("#stack-0").on("click", resetDeck);
        }

        //saveGameState(); // After moving the card, save the game state
 
    }

    function resetDeck() {
        $(".top-row .deck").each(function() {
            var stackId = $(this).attr("id");
            var cards = $(this).children(".card");
            
            cards.each(function() {
                
                $(this).toggleClass("back face");
                $(this).attr("src", "assets/back-maroon.png");
            });
    
            $(".top-row .deck#stack-0").append(cards.get().reverse());
        });
    }

    function flipCard() // flip cards from front to back or vice versa
    {
        $(this).toggleClass("back face");
        var cardId = $(this).attr("id");
        var src = $(this).attr("src");
        
        if ($(this).hasClass("face")) 
        {

            $(this).attr("src", `assets/${cardId}.png`);
        } 
        else 
        {
            $(this).attr("src", "assets/back-maroon.png");
        }
    }

    function startGame() // start the game
    {
        dealCards();
    }

    function saveGameState() 
    {
        const gameState = 
        {
            deckContent: $(".deck#stack-0").html(),
            stack1Content: $("#stack-1").html()
            // Add other relevant div contents here
        };
        gameStates.push(gameState);

        console.log(gameStates);
    }

    function restoreGameState() 
    {
        const gameState = gameStates.pop();
        $(".deck#stack-0").html(gameState.deckContent);
        $("#stack-1").html(gameState.stack1Content);
        // Restore other relevant div contents here
    }

    function undoAction() // undo the last action
    {

    }

    function redoAction() // redo the last action
    {

    }

    function resetGame() // reset the game
    {
        $(".deck").empty();
        //deck.clear();
        dealCards();
    }

    function allowDrop(ev) 
    {
        ev.preventDefault();
    }
      
    function drag(ev) 
    {
        ev.dataTransfer.setData("text/plain", ev.target.id);

    }
    
    function drop(ev) {
        ev.preventDefault();
        var cardId = ev.dataTransfer.getData("text/plain");
        var card = document.getElementById(cardId);
        ev.target.appendChild(card);
    }

    

    //$("#card").click(flipCard)
    $(".undo").click(undoAction)
    $(".redo").click(redoAction)
    $(".reset").click(resetGame)

    $(".top-row .deck#stack-0").on("click", drawCard); //only the last card can be drawn

    
    //$("#stack-1.card").click(flipCard);

    //$(".card").on("click", flipCard);

    //$(".deck").on("click", ".card", flipCard);

    $(".bottom-row .deck").on("click", ".card:last", flipCard); //only the last card can be flipped

    // $(".bottom-row .deck").on("dragstart", ".card:last", drag);

    // $(".bottom-row .deck").on("dragover", ".card:last", function(ev) {ev.preventDefault();});

    // $(".bottom-row .deck").on("drop", ".card:last", drop);


    $("#undo").on("click", undoAction);
    $("#redo").on("click", redoAction);
    $("#reset").on("click", resetGame);

    

    $(".deck").on("dragstart", drag);
    

    $(".deck").on("dragover", function(ev) {
        ev.preventDefault();
    });

    $(".deck").on("drop", drop);

    startGame();
    
    

});  // end of $(document).ready()