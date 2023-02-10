// play selection 
const playGame = () => {

    let player1 = document.getElementById("Guest1").value;
    let player2 = document.getElementById("Guest2").value;
    if(player1 != "" && player2 != ""){
    
        sessionStorage.setItem("name1", player1);
        sessionStorage.setItem("name2", player2);
        
        window.location.href = "../"

    }else{
        alert("Tiene que introducir el nombre")
    }
}