const boxList = document.querySelectorAll('.boardContainer .box')
let turn = true;
const movesArray = new Array(9).fill(null)
boxList.forEach(function (box, index) {
    box.addEventListener('click', function () {
        if(turn){
            box.textContent = 'X'
        }else{
            box.textContent = 'O'
        }
        movesArray[index] = turn
        if (movesArray [0] == movesArray[1] &&
            movesArray [1] == movesArray[2] &&
            movesArray[0] != null)
        turn = !turn
    }, {once : true})
})