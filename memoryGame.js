//---- GAME FUNCTIONS ----//

const newGameBtn = document.querySelector("#new-gameBtn");//new game function
newGameBtn.addEventListener("click", (e) => {
    shuffle()
    window.location.reload();
    shuffle();
})

let moveCount = document.querySelector("#move-counter"); //move counter function
const moveCounter = () => {
    game.moves++;
    moveCount.innerHTML = "Player Moves = " + game.moves;
}
let matchCount = document.querySelector("#match-counter");//count player matches
const matchCounter = () => {
    game.matches++;
    matchCount.innerHTML = "Player Matches = " + game.matches;
}

//---- CARD OBJECTS ----//
const container = document.querySelector(".card-container");

let currentCards = [];

let matchedCards = [];

let selectedCard = null;


//---- game object ----//
const states = {
    pickFirstCard: 0,
    pickSecondCard: 1,
    resetting: 2,
}

let currentState = states.pickFirstCard;

const game = {
    moves: 0,
    matches: 0,
}

let cardFactory = (name) => {
    let card = {
        name: name,
        front: name + ".jpg",
        back: "back.jpg",
        matched: false,
    }

    let cardimgEl = document.createElement("img");
    container.appendChild(cardimgEl);
    cardimgEl.setAttribute("src", card.front);
    cardimgEl.setAttribute("src", card.back);
    cardimgEl.setAttribute("front", card.front);
    cardimgEl.setAttribute("back", card.back);
    cardimgEl.classList.add("card-back");
    cardimgEl.addEventListener("click", (e) => {
        if(currentState === states.resetting){ // Not allowing more clicks while cards are selected
            return
        }
        if(selectedCard === card || card.matched === true) {
            return
        }
        console.log("my card name is " + card.name)
        cardimgEl.setAttribute("src", card.front);
        card.image.classList.remove("card-back");
        card.image.classList.add("selected");
        if(currentState == states.pickFirstCard) {
            currentState = states.pickSecondCard
            selectedCard = card
        } else if (currentState === states.pickSecondCard){
            moveCounter();
            card.image.classList.add("selected");
            selectedCard.image.classList.add("selected");
            console.log(card.name === selectedCard.name);
            if(card.name === selectedCard.name){
                card.matched = true;
                selectedCard.matched = true;
                matchCounter();
                card.image.classList.remove("card-back")
                card.image.classList.add("card-match");
                selectedCard.image.classList.remove("card-back")
                selectedCard.image.classList.add("card-match");
                currentState = states.pickFirstCard;
                selectedCard = null;
                if(game.matches === 8){

                }
                console.log("made a match");
            } else {
                selectedCard.image.classList.add("not-match");
                card.image.classList.add("not-match");
                currentState = states.resetting
                setTimeout(() => {
                    selectedCard.image.classList.remove("not-match");
                    card.image.classList.remove("not-match");
                    selectedCard.image.classList.add("card-back");
                    card.image.classList.add("card-back");
                    cardimgEl.setAttribute("src", card.back);
                    selectedCard.image.setAttribute("src", card.back);
                    currentState = states.pickFirstCard;
                    selectedCard = null;
                }, 1000);
                return
            }
        } else {
            console.log("ERROR WTF You Selected a Card in the Wrong State");
        }
    })
    card.image = cardimgEl;
    return card;

}
//---- make cards ----//
let cards = [
    cardFactory("cactus"),
    cardFactory("donut"),
    cardFactory("moon"),
    cardFactory("mushroom"),
    cardFactory("palmtree"),
    cardFactory("peach"),
    cardFactory("pepper"),
    cardFactory("flower"),
    cardFactory("cactus"),
    cardFactory("donut"),
    cardFactory("moon"),
    cardFactory("mushroom"),
    cardFactory("palmtree"),
    cardFactory("peach"),
    cardFactory("pepper"),
    cardFactory("flower"),
];

//---- place cards in grid ----//
for(let i=0; i < cards.length; ++i) {
    cards[i].image.classList.add("grid" + i);
}

//---- Shuffle Cards Function ----//
const shuffle = () => { 
    for(let i = cards.length - 1; i > 0; i--){
        let j = Math.floor(Math.random() * (i + 1));
        let temp = cards[i];
        cards[i] = cards[j]
        cards[j] = temp;
    }
}