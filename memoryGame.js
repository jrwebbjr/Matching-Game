//---- CARD OBJECTS ----//
const container = document.querySelector(".card-container");


let currentCards = [];

let matchedCards = [];


//---- game object ----//
const game = {
    moves: 0,
    matches: 0,
}


//---- card 1 object ----//
const card1 = {
    name: "cactus",
    front: "cactus.jpg",
    back: "back.jpg",
    flipped: false
}
console.log(currentCards)
let card1img = document.createElement("img");
container.appendChild(card1img);
card1img.setAttribute("src", card1.front);
card1img.setAttribute("src", card1.back);
card1img.setAttribute("front", card1.front);
card1img.setAttribute("back", card1.back);
card1img.classList.add("card-back");
card1img.classList.add("grid1");
card1img.addEventListener("click", (e) => {
    card1.flipped = !card1.flipped;
    if(card1.flipped){
        card1img.setAttribute("src", card1.front);
        if(currentCards.length === 0){
            console.log("current cards length = 0");
            currentCards.push(card1);
            console.log("Current Cards length now = 1");
            card1img.classList.remove("card-back");
            card1img.classList.add("selected");
        } else if(currentCards.length = 1){
                console.log("currentCards length already = 1");
            }
        }
    //     currentCards.push(card1);
    //     console.log(currentCards)
    //     if(currentCards.length > 0){
    //         if(currentCards[0] === currentCards[1]){
    //             matchedCards.push(currentCards[0]);
    //             matchedCards.push(currentCards[1]);
    //             console.log(matchedCards)
    //         } else {
    //             while (currentCards.length > 0){
    //                 currentCards.pop();
    //             }
    //         }
    //     }
    // } else {
    //     card1img.setAttribute("src", card1.back);

    // }
})
card1img.classList.add("card-back");
card1img.classList.add("grid1");


//---- card 2 object ----//
const card2 = {
    name: "cactus",
    front: "cactus.jpg",
    back: "back.jpg",
    flipped: false
}
let card2img = document.createElement("img");
container.appendChild(card2img);
card2img.setAttribute("src", card2.front);
card2img.setAttribute("src", card2.back);
card2img.setAttribute("front", card2.front);
card2img.setAttribute("back", card2.back);
card2img.addEventListener("click", (e) => {
    card2.flipped = !card2.flipped;
    if(card2.flipped){
        card2img.setAttribute("src", card2.front);
        if(currentCards.length === 0){
            console.log("first card picked");
            currentCards.push(card2);
            console.log(currentCards.length);
            card2img.classList.remove("card-back");
            card2img.classList.add("selected");
        } else if(currentCards.length = 1){
                console.log("this is second card picked");
                if(currentCards.name === currentCards.name){
                    console.log("cards match")
                    card2img.classList.remove("card-back");
                    card2img.classList.add("selected");
                    matchedCards.push(currentCards[0,1])
                    while (currentCards.length > 0){
                        currentCards.pop();
                    }
                    setTimeout(1000);
                    card2img.removeAttribute("src", card2.front)
                    card2img.classList.remove("selected");
                    card2img.classList.remove("card-back");
                    
                } else {
                    card2img.classList.remove("card-back");
                    card2img.classList.add("not-match");
                    setTimeout(1000)
                    card2img.classList.remove("not-match");
                    card2img.classList.add("card-back");
                    card2img.setAttribute("src", card2.back);
                }
            }
        }
        //     currentCards.push(card1);
        //     console.log(currentCards)
        //     if(currentCards.length > 0){
        //         if(currentCards[0] === currentCards[1]){
        //             matchedCards.push(currentCards[0]);
        //             matchedCards.push(currentCards[1]);
        //             console.log(matchedCards)
        //         } else {
        //             while (currentCards.length > 0){
        //                 currentCards.pop();
        //             }
        //         }
        //     }
        // } else {
        //     card1img.setAttribute("src", card1.back);
    
        // }  
    // } else {
    //     card2img.setAttribute("src", card2.back);
    // }
})
card2img.classList.add("card-back");
card2img.classList.add("grid2");


//---- card 3 object ----//
const card3 = {
    name: "pepper",
    front: "ChilliPepper.jpg",
    back: "back.jpg",
    flipped: false
}
let card3img = document.createElement("img");
container.appendChild(card3img);
card3img.setAttribute("src", card3.front);
card3img.setAttribute("src", card3.back);
card3img.setAttribute("front", card3.front);
card3img.setAttribute("back", card3.back);
card3img.addEventListener("click", (e) => {
    card3.flipped = !card3.flipped;
    if(card3.flipped){
        card3img.setAttribute("src", card3.front);
    } else {
        card3img.setAttribute("src", card3.back);
    }
})
card3img.classList.add("card-back");
card3img.classList.add("grid3");



//---- card 4 object ----//
const card4 = {
    name: "pepper",
    front: "ChilliPepper.jpg",
    back: "back.jpg",
    flipped: false
}
let card4img = document.createElement("img");
container.appendChild(card4img);
card4img.setAttribute("src", card4.front);
card4img.setAttribute("src", card4.back);
card4img.setAttribute("front", card4.front);
card4img.setAttribute("back", card4.back);
card4img.addEventListener("click", (e) => {
    card4.flipped = !card4.flipped;
    if(card4.flipped){
        card4img.setAttribute("src", card4.front);
    } else {
        card4img.setAttribute("src", card4.back);
    }
})
card4img.classList.add("card-back");
card4img.classList.add("grid4");


//---- card 5 object ----//
const card5 = {
    name: "donut",
    front: "donut.jpg",
    back: "back.jpg",
    flipped: false
}
let card5img = document.createElement("img");
container.appendChild(card5img);
card5img.setAttribute("src", card5.front);
card5img.setAttribute("src", card5.back);
card5img.setAttribute("front", card5.front);
card5img.setAttribute("back", card5.back);
card5img.addEventListener("click", (e) => {
    card5.flipped = !card5.flipped;
    if(card5.flipped){
        card5img.setAttribute("src", card5.front);
    } else {
        card5img.setAttribute("src", card5.back);
    }
})
card5img.classList.add("card-back");
card5img.classList.add("grid5");


//---- card 6 object ----//
const card6 = {
    name: "donut",
    front: "donut.jpg",
    back: "back.jpg",
    flipped: false
}
let card6img = document.createElement("img");
container.appendChild(card6img);
card6img.setAttribute("src", card6.front);
card6img.setAttribute("src", card6.back);
card6img.setAttribute("front", card6.front);
card6img.setAttribute("back", card6.back);
card6img.addEventListener("click", (e) => {
    card6.flipped = !card6.flipped;
    if(card6.flipped){
        card6img.setAttribute("src", card6.front);
    } else {
        card6img.setAttribute("src", card6.back);
    }
})
card6img.classList.add("card-back");
card6img.classList.add("grid6")


//---- card 7 object ----//
const card7 = {
    name: "flower",
    front: "flower.jpg",
    back: "back.jpg",
    flipped: false
}
let card7img = document.createElement("img");
container.appendChild(card7img);
card7img.setAttribute("src", card7.front);
card7img.setAttribute("src", card7.back);
card7img.setAttribute("front", card7.front);
card7img.setAttribute("back", card7.back);
card7img.addEventListener("click", (e) => {
    card7.flipped = !card7.flipped;
    if(card7.flipped){
        card7img.setAttribute("src", card7.front);
    } else {
        card7img.setAttribute("src", card7.back);
    }
})
card7img.classList.add("card-back");
card7img.classList.add("grid7")


//---- card 8 object----//
const card8 = {
    name: "flower",
    front: "flower.jpg",
    back: "back.jpg",
    flipped: false
}
let card8img = document.createElement("img");
container.appendChild(card8img);
card8img.setAttribute("src", card8.front);
card8img.setAttribute("src", card8.back);
card8img.setAttribute("front", card8.front);
card8img.setAttribute("back", card8.back);
card8img.addEventListener("click", (e) => {
    card8.flipped = !card8.flipped;
    if(card8.flipped){
        card8img.setAttribute("src", card8.front);
    } else {
        card8img.setAttribute("src", card8.back);
    }
})
card8img.classList.add("card-back");
card8img.classList.add("grid8")


//---- card 9 object ----//
const card9 = {
    name: "moon",
    front: "moon.jpg",
    back: "back.jpg",
    flipped: false
}
let card9img = document.createElement("img");
container.appendChild(card9img);
card9img.setAttribute("src", card9.front);
card9img.setAttribute("src", card9.back);
card9img.setAttribute("front", card9.front);
card9img.setAttribute("back", card9.back);
card9img.addEventListener("click", (e) => {
    card9.flipped = !card9.flipped;
    if(card9.flipped){
        card9img.setAttribute("src", card9.front);
    } else {
        card9img.setAttribute("src", card9.back);
    }
})
card9img.classList.add("card-back");
card9img.classList.add("grid9")


//---- card 10 object ----//
const card10 = {
    name: "moon",
    front: "moon.jpg",
    back: "back.jpg",
    flipped: false
}
let card10img = document.createElement("img");
container.appendChild(card10img);
card10img.setAttribute("src", card10.front);
card10img.setAttribute("src", card10.back);
card10img.setAttribute("front", card10.front);
card10img.setAttribute("back", card10.back);
card10img.addEventListener("click", (e) => {
    card10.flipped = !card4.flipped;
    if(card10.flipped){
        card10img.setAttribute("src", card10.front);
    } else {
        card10img.setAttribute("src", card10.back);
    }
})
card10img.classList.add("card-back");
card10img.classList.add("grid10")


//---- card 11 object ----//
const card11 = {
    name: "mushroom",
    front: "moon.jpg",
    back: "back.jpg",
    flipped: false
}
let card11img = document.createElement("img");
container.appendChild(card11img);
card11img.setAttribute("src", card11.front);
card11img.setAttribute("src", card11.back);
card11img.setAttribute("front", card11.front);
card11img.setAttribute("back", card11.back);
card11img.addEventListener("click", (e) => {
    card11.flipped = !card11.flipped;
    if(card11.flipped){
        card11img.setAttribute("src", card11.front);
    } else {
        card11img.setAttribute("src", card11.back);
    }
})
card11img.classList.add("card-back");
card11img.classList.add("grid11")


//---- card 12 object ----//
const card12 = {
    name: "mushroom",
    front: "mushroom.jpg",
    back: "back.jpg",
    flipped: false
}
let card12img = document.createElement("img");
container.appendChild(card12img);
card12img.setAttribute("src", card12.front);
card12img.setAttribute("src", card12.back);
card12img.setAttribute("front", card12.front);
card12img.setAttribute("back", card12.back);
card12img.addEventListener("click", (e) => {
    card12.flipped = !card12.flipped;
    if(card12.flipped){
        card12img.setAttribute("src", card12.front);
    } else {
        card12img.setAttribute("src", card12.back);
    }
})
card12img.classList.add("card-back");
card12img.classList.add("grid12")


//---- card 13 object ----//
const card13 = {
    name: "palmtree",
    front: "palmtree.jpg",
    back: "back.jpg",
    flipped: false
}
let card13img = document.createElement("img");
container.appendChild(card13img);
card13img.setAttribute("src", card13.front);
card13img.setAttribute("src", card13.back);
card13img.setAttribute("front", card13.front);
card13img.setAttribute("back", card13.back);
card13img.addEventListener("click", (e) => {
    card13.flipped = !card13.flipped;
    if(card13.flipped){
        card13img.setAttribute("src", card13.front);
    } else {
        card13img.setAttribute("src", card13.back);
    }
})
card13img.classList.add("card-back");
card13img.classList.add("grid13")


//---- card 14 object ----//
const card14 = {
    name: "palmtree",
    front: "palmtree.jpg",
    back: "back.jpg",
    flipped: false
}
let card14img = document.createElement("img");
container.appendChild(card14img);
card14img.setAttribute("src", card14.front);
card14img.setAttribute("src", card14.back);
card14img.setAttribute("front", card14.front);
card14img.setAttribute("back", card14.back);
card14img.addEventListener("click", (e) => {
    card14.flipped = !card14.flipped;
    if(card14.flipped){
        card14img.setAttribute("src", card14.front);
    } else {
        card14img.setAttribute("src", card14.back);
    }
})
card14img.classList.add("card-back");
card14img.classList.add("grid14")


//---- card 15 object ----//
const card15 = {
    name: "peach",
    front: "peach.jpg",
    back: "back.jpg",
    flipped: false
}
let card15img = document.createElement("img");
container.appendChild(card15img);
card15img.setAttribute("src", card15.front);
card15img.setAttribute("src", card15.back);
card15img.setAttribute("front", card15.front);
card15img.setAttribute("back", card15.back);
card15img.addEventListener("click", (e) => {
    card15.flipped = !card15.flipped;
    if(card15.flipped){
        card15img.setAttribute("src", card15.front);
    } else {
        card15img.setAttribute("src", card15.back);
    }
})
card15img.classList.add("card-back");
card15img.classList.add("grid15");


//---- card 16 object ----// 
const card16 = {
    name: "peach",
    front: "peach.jpg",
    back: "back.jpg",
    flipped: false
}
let card16img = document.createElement("img");
container.appendChild(card16img);
card16img.setAttribute("src", card16.front);
card16img.setAttribute("src", card16.back);
card16img.setAttribute("front", card16.front);
card16img.setAttribute("back", card16.back);
card16img.addEventListener("click", (e) => {
    card16.flipped = !card16.flipped;
    if(card16.flipped){
        card16img.setAttribute("src", card16.front);
    } else {
        card16img.setAttribute("src", card16.back);
    }
})
card16img.classList.add("card-back");
card16img.classList.add("grid16");




//---- card images array ----//


//---- Move Counter ----//

let moveCount = document.querySelector("#move-counter");

moveCounter = () => {
    moves++;
    moveCount.innerHTML = moves;
}


//---- Move Timer ----//

// let secondTimer = 0;

// const updateTimer = () => {
//     secondTimer = 10;
//     secondTimer--
//     document.querySelector('#move-timer').textContent = "Move Timer: " + secondTimer;
// }

// const timers = setInterval(updateTimer, 1000);


//---- Game Clock ----//

// let secondTimer = 0
// let minuteTimer = 0

// const updateTimer = () => {
//   if(secondTimer >= 60){
//     secondTimer = 0
//     minuteTimer++
//     document.querySelector('#minutes').textContent = minuteTimer;
//   } else {
//     secondTimer++
//   }
//     document.querySelector('#seconds').textContent = secondTimer;
// }

// const timers = setInterval(updateTimer, 1000);


//---- Game Play Functions ----//

//---- Function to Check for Match ----//



//---- Durstenfeld Shuffle Function ----//

// shuffle = () => {
//     for(let i = cards.length - 1; i > 0; i--){
//         const j = Math.floor(Math.random() * (i + 1));
//         let temp = cards[i];
//         cards[i] = cards[j]
//         cards[j] = temp;
//     }
// }
    

//---- Button Event Listeners ----//

const newGameBtn = document.querySelector("#new-gameBtn");



//---- Start Game ----//
newGameBtn.addEventListener("click", (e) => {
    window.location.reload();
})



















//---function to assign grid area to cards array----//

// const updateArr = (row, column) => {
//     const arr = [1, 1, 1, 1] 
  
//       arr.splice(0, 1, row === 1 ? 1 : row)
//       arr.splice(2, 1, row === 1 ? 1 : row)
//       arr.splice(1, 1, column === 1 ? 1 : column)
//       arr.splice(3, 1, column === 1 ? 1 : column)
//       return arr
//   }
  
//   const increment = () => {
//     // let rowNum = 0
//     // const rowMax = 4
//     let result = []
//     let row = 1
//     let column = 1
//     for (let i = 1; i <= 16; i++){
//       const newValues = updateArr(row, column)
//       // console.log(newValues)
      
//       result.push(newValues.join("/"))
  
//               column++
  
  
//       switch (i) {
//         case 4 :
//           row++
//           column = 1
//         break;
  
//         case 8 :
//           row++
//           column = 1
//         break;
  
//         case 12 :
//           row++
//           column = 1               
//         break;
//       }
  
//     }
//    return result 
    
//   }
//   const result = increment()
  
//   const elArr = []
  
//   result.forEach((value, x) => {
//     elArr[x].style.gridArea = value
//   })