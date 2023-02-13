//Recuperando los nombres de players

const PlayersName = () => {
    document.getElementById("Guest1").innerHTML = sessionStorage.getItem("name1")
    document.getElementById("Guest2").innerHTML = sessionStorage.getItem("name2")

}

PlayersName ();


//

let running = true;
let turno = true;
let playerX = 3;
let playerO = 3;
// let currentPlayer = true;
let boardContainer = Array.from(document.getElementsByClassName("box"));

let miBoardContainer = ["","","","","","","","",""];
console.log(miBoardContainer)

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
                // console.log(cell);
                // (turno) ? playerX-- : playerO--;

                (turno) ? playerX-- : playerO--;  
                miBoardContainer[cell.id] = (turno) ? "X" : "O";
                // compuebaGanador();
                turno = !turno;
            }
        
        })
    }
)

const checkWinner = () => {
    let roundWon = false;

    for(let i = 0; i < wincombo.length; i++){

        let condition = wincombo[i];
        let boxA = miBoardContainer[condition[0]];
        let boxB = miBoardContainer[condition[1]];
        let boxC = miBoardContainer[condition[2]];

        if(boxA == "" || boxB == "" || boxC == ""){
            continue;
        }
        if(boxA == boxB && boxB == boxC){
            roundWon = true;
            break;
        }
        console.log(roundWon);
    }

    if (roundWon){
        status
    }
    }
    
    
