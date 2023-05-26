// Desc: Main entry point for solitare game
// $(document).ready(function()
// {
    import Deck from './deck.js';
    //import {resetGame, undoAction, redoAction} from './game.js';

    const source = new Deck();
    const deck = [];
    
    class gameState
    {
        constructor()
        {
            this.states = [];
            this.stack0 = $(".top-row .deck#stack-0");
            this.stack1 = $(".top-row .deck#stack-1");
            this.saveState(); // Save the initial state of the game

        }

        saveState() // method to save the state of the game
        {
            this.states.push({
                stack0: this.stack0.html(),
                stack1: this.stack1.html()
            });
        }

        restoreState() // method to restore the state of the game
        {
            if (this.states.length > 0) {
                const lastState = this.states.pop(); // pop the last state off the stack
                this.stack0.html(lastState.stack0);
                this.stack1.html(lastState.stack1);
            }
        }


    }

    export function createBoard() // creates the starting playing field
    {
        source.deck.forEach(element => {
            var x = createCard(element.suit, element.rank)   //card "element" is assigned to x
            deck.push(x); //append card to deck
        });

        console.log(deck);

        for(var i = 0; i < 7; i++) // populate the stacks
        {
            createStack(i, i + 1);  
        }

        for(var i = 0; i < deck.length; i++) // add rest of the cards to the draw pile
        {
            document.querySelector(".deck#stack-0").appendChild(deck[i]); 
        }

        console.log(document.querySelector(".deck#stack-0").children.length);
    }

    function createCard(suit, rank) // creates a card element
    {
        var card = document.createElement("img");
        card.className = "card back";
        card.id = `${suit}-${rank}`;
        card.src = `assets/back-maroon.png`; // should change when card is flipped
        card.draggable = true;
        card.setAttribute("ondragstart", "drag(event)");
        return card;
    }

    function createStack(id, val) // create a stack
    {
        for(var i = 0; i < val; i++)
        {
            var card = deck.pop();
            $(`.bottom-row .deck#stack-${id}`).append(card);
            $(card).css("margin-top", i * 30 + "px");
            if (i === val - 1) 
            {
                var cardId = $(card).attr("id");
                $(card).toggleClass("back face");
                $(card).attr("src", `assets/${cardId}.png`); //make the last card face up
            }
        }
    }

    function drawCard() // draw a card from the draw pile
    { 
        game.saveState(); // the current state should be saved before drawing a card
        var card = deck.pop();
        $(card).animate({left: '170px'}); // animate the card moving to the draw pile
        $(card).toggleClass("back face");
        $(card).attr("src", `assets/${$(card).attr("id")}.png`); //make the last card face up
        $(".top-row .deck#stack-1").append(card);
    }


    
    


    function startGame() // start the game
    {
        

        createBoard();
        //state.saveState(); // the current state should be saved before drawing a card
        
    }

    function resetGame() // reset the game to the starting state
    {
        $(".deck").empty();
        startGame();
    }


    function undoAction() // undo the last action
    {
        game.saveState(); // the current state should be saved before undoing an action
        game.restoreState();
    }

    function redoAction() // redo the last action
    {
        game.saveState(); // the current state should be saved before redoing an action
        game.restoreState();
    }

    
    startGame(); // start the game
    const game = new gameState(); // create a new game state

    $("#undo").on("click", undoAction); // undos the last action taken when called upon
    $("#redo").on("click", redoAction); // redos the last action taken when called upon
    $("#reset").on("click", resetGame); // resets the game to the starting state
    $(".top-row .deck#stack-0").on("click", drawCard); //only the last card can be drawn



// });  // end of $(document).ready()