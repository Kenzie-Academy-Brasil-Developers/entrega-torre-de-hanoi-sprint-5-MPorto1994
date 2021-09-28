// Matheus

function smallerDisc(usingDisc , column){
    // Testa se o disco é menor que os que estão na coluna oou não
    let hierarq =  [red,green, purple, blue];
    if(hierarq.indexOf(usingDisc)>column.Disc){
        return true
    }
}

let blueDisc = document.getElementById("blue")
let purpleDisc = document.getElementById("purple")
let greenDisc = document.getElementById("green")
let redDisc = document.getElementById("red")

let columns = document.querySelector(".column")
let towers = document.querySelector(".tower")

let redDisc = document.getElementById("game")

let columnStart = document.getElementById("towerStart")
let columnOffSet = document.getElementById("towerOffSet")
let columnEnd = document.getElementById("towerEnd")



// main function

towers.addEventListener("click", mainFunc)

function checkPosition (whichTower){
    if (whichTower.style.justify-content=="flex-end"){
        whichTower.style.justify-content="flex-start"
    }
    else if(whichTower.style.justify-content=="flex-start"){
        whichTower.style.justify-content="flex-end"
    }
}

function mainFunc (){

}


// Matheus

// Adriel


// Adriel