//---- CARD OBJECTS ----//
const container = document.querySelector(".card-container");

//---- card 1 object ----//
const card1 = {
    front: "cactus",
}

let card1img = document.createElement("img");
container.appendChild(card1img);
card1img.setAttribute("src", "cactus.jpg");
card1img.setAttribute("src", "back.jpg");
card1img.classList.add("card-back");
card1img.classList.add("grid1");


//---- card 2 object ----//
const card2 = {
    front: "cactus",
}
let card2img = document.createElement("img");
container.appendChild(card2img);
card2img.setAttribute("src", "cactus.jpg");
card2img.setAttribute("src", "back.jpg");
card2img.classList.add("card-back");
card2img.classList.add("grid2");


//---- card 3 object ----//
const card3 = {
    name: "pepper",
}
let card3img = document.createElement("img");
container.appendChild(card3img);
card3img.setAttribute("src", "ChilliPepper.jpg");
card3img.setAttribute("src", "back.jpg");
card3img.classList.add("card-back");
card3img.classList.add("grid3");



//---- card 4 object ----//
const card4 = {
    name: "pepper"
}
let card4img = document.createElement("img");
container.appendChild(card4img);
card4img.setAttribute("src", "ChilliPepper.jpg");
card4img.setAttribute("src", "back.jpg");
card4img.classList.add("card-back");
card4img.classList.add("grid4");


//---- card 5 object ----//
const card5 = {
    name: "donut"
}
let card5img = document.createElement("img");
container.appendChild(card5img);
card5img.setAttribute("src", "donut.jpg");
card5img.setAttribute("src", "back.jpg");
card5img.classList.add("card-back");
card5img.classList.add("grid5");


//---- card 6 object ----//
const card6 = {
    name: "donut"
}
let card6img = document.createElement("img");
container.appendChild(card6img);
card6img.setAttribute("src", "donut.jpg");
card6img.setAttribute("src", "back.jpg");
card6img.classList.add("card-back");
card6img.classList.add("grid6")


//---- card 7 object ----//
const card7 = {
    name: "flower"
}
let card7img = document.createElement("img");
container.appendChild(card7img);
card7img.setAttribute("src", "flower.jpg");
card7img.setAttribute("src", "back.jpg");
card7img.classList.add("card-back");
card7img.classList.add("grid7")


//---- card 8 object----//
const card8 = {
    name: "flower"
}
let card8img = document.createElement("img");
container.appendChild(card8img);
card8img.setAttribute("src", "flower.jpg");
card8img.setAttribute("src", "back.jpg");
card8img.classList.add("card-back");
card8img.classList.add("grid8")


//---- card 9 object ----//
const card9 = {
    name: "moon"
}
let card9img = document.createElement("img");
container.appendChild(card9img);
card9img.setAttribute("src", "moon.jpg");
card9img.setAttribute("src", "back.jpg");
card9img.classList.add("card-back");
card9img.classList.add("grid9")


//---- card 10 object ----//
const card10 = {
    name: "moon"
}
let card10img = document.createElement("img");
container.appendChild(card10img);
card10img.setAttribute("src", "moon.jpg");
card10img.setAttribute("src", "back.jpg");
card10img.classList.add("card-back");
card10img.classList.add("grid10")


//---- card 11 object ----//
const card11 = {
    name: "mushroom"
}
let card11img = document.createElement("img");
container.appendChild(card11img);
card11img.setAttribute("src", "mushroom.jpg");
card11img.setAttribute("src", "back.jpg");
card11img.classList.add("card-back");
card11img.classList.add("grid11")


//---- card 12 object ----//
const card12 = {
    name: "mushroom"
}
let card12img = document.createElement("img");
container.appendChild(card12img);
card12img.setAttribute("src", "mushroom.jpg");
card12img.setAttribute("src", "back.jpg");
card12img.classList.add("card-back");
card12img.classList.add("grid12")


//---- card 13 object ----//
const card13 = {
    name: "palmtree"
}
let card13img = document.createElement("img");
container.appendChild(card13img);
card13img.setAttribute("src", "palmtree.jpg");
card13img.setAttribute("src", "back.jpg");
card13img.classList.add("card-back");
card13img.classList.add("grid13")


//---- card 14 object ----//
const card14 = {
    name: "palmtree"
}
let card14img = document.createElement("img");
container.appendChild(card14img);
card14img.setAttribute("src", "palmtree.jpg");
card14img.setAttribute("src", "back.jpg");
card14img.classList.add("card-back");
card14img.classList.add("grid14")


//---- card 15 object ----//
const card15 = {
    name: "peach"
}
let card15img = document.createElement("img");
container.appendChild(card15img);
card15img.setAttribute("src", "peach.jpg");
card15img.setAttribute("src", "back.jpg");
card15img.classList.add("card-back");
card15img.classList.add("grid15");


//---- card 16 object ----// 
const card16 = {
    name: "peach"
}
let card16img = document.createElement("img");
container.appendChild(card16img);
card16img.setAttribute("src", "peach.jpg");
card16img.setAttribute("src", "back.jpg");
card16img.classList.add("card-back");
card16img.classList.add("grid16");






//---- Move Counter ----//

// let moveCount = document.querySelector("#move-counter");

// moveCounter = () => {
//     moves++;
//     moveCount.innerHTML = moves;
// }


//---- Move Timer ----//

let secondTimer = 0;

const updateTimer = () => {
    secondTimer = 10;
    secondTimer--
    document.querySelector('#move-timer').textContent = "Move Timer: " + secondTimer;
}

const timers = setInterval(updateTimer, 1000);


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

// let matchedCards = [];

// matchCheck = () => {
//     if(card[0].value === Card[1].value){
//         matchedCards.push(cards[0,1])
        
//     } else {

//     }
// }


//---- Shuffling Cards ----//

// let cards = document.querySelectorAll("#card-container");

// shuffle = () => {
//     for(let i = array.length - 1; i > 0; i--){
//         const j = Math.floor(Math.random() * (i + 1));
//         [array[i], array[j]] = [array[j], array[i]];
//     }
// }
    

//---- Button Event Listeners ----//

const newGameBtn = document.querySelector("#new-gameBtn");
const easyCards = document.querySelectorAll(".front");
const hardCards = document.querySelectorAll(".hard-cards");


//---- Start Game ----//
newGameBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.reload();
    // shuffle(cards);
    hardCards.classList.add("hidden");
})

const hardBtn = document.querySelector("#hard-modeBtn");
    hardBtn.addEventListener("click", (e) => {
        e.preventDefault();
        window.location.reload();
        easyCards.classList.add("hidden");
    })




/*Game Play - 
on start screen randomize card*/
// let cardbackEl = document.querySelector(".card-back");
// cardbackEl.style.gridArea = "1/3/1/3";


















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