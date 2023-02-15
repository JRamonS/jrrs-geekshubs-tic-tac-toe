//Recuperando los nombres de players
const PlayersName = () => {
    document.getElementById("Guest1").innerHTML = sessionStorage.getItem("name1")
    document.getElementById("Guest2").innerHTML = sessionStorage.getItem("name2")
}
PlayersName ();


//
// let restartBtn = document.querySelector("#restartBtn")
let boardContainer = Array.from(document.getElementsByClassName("box"));
// let statusText = document.querySelector("#statusText");
let turno = true;
let playerX = 3;
let playerO = 3;
let currentPlayer = "X";
let miBoard = ["","","","","","","","",""];
console.log(miBoard)
let running = false;
const wincombo = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
   
//   const compuebaGanador = () =>{

//     if ((miBoardContainer[wincombo[0][0]] ==="x") && (miBoardContainer[wincombo[0][1]] ==="x") && 
//         console.log(miBoardContainer[wincombo[0][0]] ==="x")
//     (miBoardContainer[wincombo[0][2]] ==="x")){ 
//         console.log("X Ha ganado")
//     }

//   }


  boardContainer.map(
    (cell,) => {
        cell.addEventListener('click', () => {
        
            if ((cell.innerHTML === "") && (playerX > 0 || playerO > 0 )){
                cell.innerHTML = (turno) ? "X" : "O";
                (turno) ? playerX-- : playerO--;  
                miBoard[cell.id] = (turno) ? "X" : "O"  
                turno = !turno;
                statusText.textContent = `${currentPlayer }'s turn`
                // chengePlayer();
                running = true;
              
            }
        
        })
    }
)


const checkWinner = () => {
   let winner = ["X", "O"];
   let rau = "";

   for(i = 0; i < winner.length; i++){
    rau = winner [i];

    if(miBoard[0] == winner && miBoard[1] == winner && miBoard[2] == winner){
      console.log("He ganadp")
    }
   }
}



































