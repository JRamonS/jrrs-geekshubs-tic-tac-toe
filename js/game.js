//Recuperando los nombres de players
    document.getElementById("Guest1").innerHTML = sessionStorage.getItem("name1")
    document.getElementById("Guest2").innerHTML = sessionStorage.getItem("name2")



// Creo las variables, mi tabla, y la tabla de la combinación ganadora
let boardContainer = Array.from(document.getElementsByClassName("box"));
let turno = true;
let playerX = 3;
let playerO = 3;
let miBoard = ["","","","","","","","",""];
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
   //Mapeo para conseguir que se marque la X o O y cambio de turno
  boardContainer.map(
    (box) => {
        box.addEventListener('click', () => {
        
            if ((box.innerHTML === "") && (playerX > 0 || playerO > 0 )){
                box.innerHTML = (turno) ? "X" : "O";
                (turno) ? playerX-- : playerO--;  
                miBoard[box.id] = (turno) ? "X" : "O";
                checkWinner();
                turno = !turno;
              
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
//colecciono los nombre de game para imprimirlo en winner
let ganador = () => {

  if (result[0] !== "X"){
    sessionStorage.setItem('ganador', sessionStorage.getItem("name1"));

  }else {
    sessionStorage.setItem('ganador' , sessionStorage.getItem("name2"));
  }
  }


 






















