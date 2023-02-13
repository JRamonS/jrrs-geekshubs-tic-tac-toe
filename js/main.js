// Guardado de Los Jugadores en SessionStorage
const playGame = () => {

    let player1 = document.getElementById("Guest1").value;
    let player2 = document.getElementById("Guest2").value;
    if(player1 != "" && player2 != ""){
    
        sessionStorage.setItem("name1", player1);
        sessionStorage.setItem("name2", player2);
        
        window.location.href = "../pages/game.html";

    }else{
        alert("Tiene que introducir el nombre")
    }
}

// botonAceptarPlayer1.addEventListener("click", () => {
//     if (nombrePlayer1.value === "" || nombrePlayer1.value.length < 3) {
//         document.getElementById("pMensaje1").innerHTML = ("Escribe un nombre que contenga <br> entre 3 y 12 caracteres")
//         document.getElementById("namePl1").value = ("");
//     } else {
//         sessionStorage.setItem("nombreJugador1", JSON.stringify(nombrePlayer1.value));
//         document.getElementById("labelNombre1").innerHTML = (nombrePlayer1.value);
//         document.getElementById("namePl1").value = ("");
//         comprobarCampos();
//     }
// });