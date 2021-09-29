// Matheus

let blueDisc = document.getElementById("blue")
let purpleDisc = document.getElementById("purple")
let greenDisc = document.getElementById("green")
let redDisc = document.getElementById("red")

let columns = document.querySelector(".column")
let towers = document.querySelectorAll(".tower")
let discs = document.querySelector(".discs")

let sectionGame = document.getElementById("game")

let columnStart = document.getElementById("towerStart")
let columnOffSet = document.getElementById("towerOffSet")
let columnEnd = document.getElementById("towerEnd")

// Testa se o disco é menor que os que estão na coluna ou não 
// (Se o movimento é possível)
function smallerDisc(usingDisc , column){
    let hierarq =  ["red","green", "purple", "blue"];
    if(hierarq.indexOf(usingDisc)<hierarq.indexOf(searchHighest(column))){
        return true
    }
    else{
        console.log("Esta operação não é permitida")
        return false
    }
}
// smallerDisc("green",columnOffSet)

// Procura qual é o disco do topo
function searchHighest(column){
    let highest = column.querySelectorAll("div")[1];
    // console.log(highest.id)
    return highest
}
console.log(searchHighest(columnStart))
// console.log(columnStart.querySelectorAll("div")[1])
// towers[1].addEventListener("click", wasClickedOn)

// Conferi em qual div foi clicada
function wasClickedOn(event){
    let column = document.getElementById(event.currentTarget.id)
    // console.log( searchBigger(column))
    return (column)
}

// Cria um novo disco com estilo predefinido
function addDisc(disc,column){
    let newDisc = document.createElement("div")
    // newDisc.className=discs;
    newDisc.id=disc;
    column.appendChild(newDisc)
}
addDisc("green",columnEnd)

// console.log(wasClickedOn())

let wasClicked = false;
let clickedBefore = 0
function mainFunc (event){
    // console.log(searchHighest(wasClickedOn(event)).id)
    // console.log(wasClickedOn(event))
    // console.log(columnStart)
    // console.log(document.getElementById(wasClickedOn(event)))
    // console.log(searchHighest(wasClickedOn(event)).id)[
    let columnToGo = wasClickedOn(event)
    // let columnFrom = clickedBefore
    let topDiscOut = searchHighest(clickedBefore)
    let topDiscToIn = searchHighest(columnToGo)

    console.log(smallerDisc(topDiscOut.id,columnToGo))

    if (wasClicked==true){
        // wasClickedOn(event)
        if(smallerDisc(topDiscOut.id,columnToGo)){
            console.log(smallerDisc(topDiscOut.id,columnToGo))
        }
        else{
            return("não entrou")
        }
        wasClicked=false
    }
    else{
        clickedBefore = wasClickedOn(event)
        wasClicked = true;
    }
    

    
    smallerDisc()
    wasClickedOn()
    // remover da outra torre


    // Selecionar uma torre
    // fazer a conferencia
    // Quando for selecionada uma segunda torre ele remove o disco do topo e adiciona nessa segunda

}


columnStart.addEventListener("click", mainFunc)
columnOffSet.addEventListener("click", mainFunc)
columnEnd.addEventListener("click", mainFunc)

// Matheus

// Adriel


// Adriel



// main function

// towers.addEventListener("click", mainFunc)

// function checkPosition (whichTower){
//     if (whichTower.style.justify-content=="flex-end"){
//         whichTower.style.justify-content="flex-start"
//     }
//     else if(whichTower.style.justify-content=="flex-start"){
//         whichTower.style.justify-content="flex-end"
//     }
// }
// function myFunction(event) { 
//     alert(event.currentTarget.nodeName);
//   }