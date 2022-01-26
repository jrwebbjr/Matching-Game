
//---- Move Counter ----//

// let moveCount = document.querySelector("#move-counter");

// moveCounter = () => {
//     moves++;
//     moveCount.innerHTML = moves;
// }


//---- Move Timer ----//

// let timer;
// let timeLeft = 10; //gives player 10 seconds to choose second card
// moveTimer = () => {
//     start() {
//         timer = setInterval( 1000);
//     }

// }


//---- Game Clock ----//

// let gameClock = document.querySelector("#game-clock");

// let start = Date.now();
// setInterval(function (){
//     let delta = Date.now() - start;
//     output(Math.floor(delta / 1000));
//     output(new Date().toUTCString());
// }, 1000);


//---- Game Play Functions ----//

//---- Function to Check for Match ----//

let matchedCards = [];

matchCheck = () => {
    if(card1.value === Card2.value){
        matchedCards.push(cards[0,1])
        
    } else {

    }
}


//---- Shuffling Cards ----//

let cards = document.querySelectorAll("#card-container");

shuffle = () => {
    for(let i = array.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
    

//---- Button Event Listeners ----//

const newGameBtn = document.querySelector("#new-gameBtn");
const easyCards = document.querySelectorAll(".front");
const hardCards = document.querySelectorAll(".hard-cards");


const hide = (elem) => {
    elem.style.display = "none";
}

newGameBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.reload();
    shuffle(cards);
    hardCards.style.visibility = "hidden";
})

const hardBtn = document.querySelector("#hard-modeBtn");
    hardBtn.addEventListener("click", (e) => {
        e.preventDefault();
        // window.location.reload();
        console.log("Button Working");
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