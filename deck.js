/**************************************
 TITLE: deck.js							
 AUTHOR: Malik Falana (MF)			
 CREATE DATE: 05/26/2023	
 PURPOSE: To use jquery and functions for 2D Graphic Demo
 LAST MODIFIED ON: 05/26/2023	
 LAST MODIFIED BY: Malik Falana (MF)
 MODIFICATION HISTORY:
 05/26/2023: Original Build
***************************************/


//$(document).ready(function()
//{
    const SUIT = ["clubs", "diamond", "heart", "spades"]; // constant variables for the suit and rank of the cards
    const RANK = [1,2,3,4,5,6,7,8,9,10,11,12,13];

    export default class Deck
    {
        constructor(cards = createDeck())
        {
            
            this.deck = shuffleDeck(cards);;
        }
    }

    class Card
    {
        constructor(suit, rank)
        {
            this.suit = suit;
            this.rank = rank;
        }
    }

    function createDeck() // creates a deck of fifty-two cards by combining the suit and rank arrays
    {
        return SUIT.flatMap(suit => {
            return RANK.map(rank => {
                return new Card(suit, rank);
            });
        });
    }

    function shuffleDeck(deck) // shuffles the deck
    {
        return deck.sort(() => Math.random() - 0.5);
    }


//});  // end of $(document).ready()