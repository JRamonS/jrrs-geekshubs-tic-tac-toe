// Guardado de Los Jugadores en SessionStorage
// const expresiones = () => {
//     nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/;} // Letras y espacios, pueden llevar acentos.

const playGame = () => {
    let player1 = document.getElementById("Guest1").value;
    let player2 = document.getElementById("Guest2").value;
    if(player1 != "" && player2 != ""){
    
        sessionStorage.setItem("name1", player1);
        sessionStorage.setItem("name2", player2);
    
        
        window.location.href = "../pages/game.html";

    }
}













// else{
//     alert("Tiene que introducir el nombre")
// }