
let moveCount = document.getElementById("move-counter");

moveCounter = () => {
    moves++;
    moveCount.innerHTML = moves;
}
const timer;
let timeLeft = 10; //gives player 10 seconds to choose second card
moveTimer = () => {

}

let matchedCards
matchCheck = () => {
    if(cards[0] === cards[1]){
        matchedCards.push()
    }
}



let cards = document.querySelectorAll("card-container");
console.dir(cards)

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