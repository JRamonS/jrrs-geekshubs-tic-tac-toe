//Recuperando los nombres de players

const PlayersName = () => {
    document.getElementById("Guest1").innerHTML = sessionStorage.getItem("name1")
    document.getElementById("Guest2").innerHTML = sessionStorage.getItem("name2")

}

PlayersName ();


//


let turno = true;
let playerX = 3;
let playerO = 3;
let currentPlayer = true;
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

 
  
  const compuebaGanador = (miBoardContainer) =>{

    console.log(miBoardContainer)
  }
  


boardContainer.map(
    (cell,) => {
        cell.addEventListener('click', () => {

            if ((cell.innerHTML === "") && (playerX > 0 || playerO > 0 )){
                cell.innerHTML = (turno) ? "X" : "O";
                (turno) ? playerX-- : playerO--;  
                miBoardContainer[cell.id] = (turno) ? "X" : "O";
            
                turno = !turno;
            }
        })
    }
)
