let boardContainer = Array.from(document.getElementsByClassName("box"));

let turno = true;

let player1 = 3;
let player2 = 3;

boardContainer.map(
    (cell) => {
        cell.addEventListener('click', () => {

            if ((cell.innerHTML === "") && (player1 > 0 || player2 > 0 )){
                cell.innerHTML = (turno) ? "X" : "O";

                turno = !turno;
            }
        })
    }
)