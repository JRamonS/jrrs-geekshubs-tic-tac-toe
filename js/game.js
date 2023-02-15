//Recuperando los nombres de players
const PlayersName = () => {
    document.getElementById("Guest1").innerHTML = sessionStorage.getItem("name1")
    document.getElementById("Guest2").innerHTML = sessionStorage.getItem("name2")
}
PlayersName ();
let boardContainer = Array.from(document.getElementsByClassName("box"));
let turno = true;
let playerX = 3;
let playerO = 3;
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
   //Mapeo para conseguir el que se marque la X o o y cambio de turno
  boardContainer.map(
    (cell) => {
        cell.addEventListener('click', () => {
        
            if ((cell.innerHTML === "") && (playerX > 0 || playerO > 0 )){
                cell.innerHTML = (turno) ? "X" : "O";
                // console.log(miBoard);
                (turno) ? playerX-- : playerO--;  
                miBoard[cell.id] = (turno) ? "X" : "O";  
                turno = !turno;
                checkWinner();
              
            }
        
        })
    }
)
//combinación ganadora
let result =[]

const checkWinner = (victoria) => {
  for(let i = 0; i < wincombo.length; i++){
    let column = wincombo[i]
    let column1 = boardContainer[column[0]].innerHTML
    let column2 = boardContainer[column[1]].innerHTML
    let column3 = boardContainer[column[2]].innerHTML
    if(column1 === "" || column2 === "" || column3 ===""){
      continue;
    }

    if(column1 === column2 && column2 === column3){
      window.location.href = "../pages/winner.html"
      // result.push(column1).innerHTML
      return (victoria, ganador());
    }
  }

}

 let ganador = () => {

  if (result[0] === "X"){
    sessionStorage.setItem("ganador" , sessionStorage.getItem("name1"));
  }else {
    sessionStorage.setItem("ganador" , sessionStorage.getItem("name2"));
  }
  }
 




















