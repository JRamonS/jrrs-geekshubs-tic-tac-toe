//Se obtiene los nombres de game y se imprime aquí
let test = sessionStorage.getItem("ganador");

document.getElementById("winning").innerHTML = (JSON.stringify(test));
sessionStorage.clear();



