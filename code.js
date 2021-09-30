// Matheus

let wasClicked = false;
let clickedBefore = 0

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
    if(hierarq.indexOf(usingDisc)<hierarq.indexOf(searchHighest(column))||searchHighest(column).id===""){
        console.log("ok")
        return true
    }
    else {
        console.log("Esta operação não é permitida")
        return false
    }
}

// smallerDisc("green",columnOffSet)

// Procura qual é o disco do topo
function searchHighest(column){

    let highest = column.firtsElementChild;
    return highest
}
// towers[1].addEventListener("click", wasClickedOn)

// Conferi em qual div foi clicada
function wasClickedOn(event){
    let column = document.getElementById(event.currentTarget.id)
    return column
}

// Cria um novo disco com estilo predefinido
function addDisc(disc,column){
    let newDisc = document.createElement("div")
    // newDisc.className=discs;
    newDisc.id=disc;
    column.appendChild(newDisc)
}
addDisc("green",columnEnd)




function mainFunc (event){
    let columnToGo = wasClickedOn(event)
    let columnFrom = clickedBefore
    let topDiscOut = searchHighest(clickedBefore)
    let topDiscToIn = searchHighest(columnToGo)

    
    if (wasClicked==true){
        // wasClickedOn(event)
        if(smallerDisc(topDiscOut.id,columnToGo)){
            console.log("segundo clique, e smaller disc funcionou")
        }
        else{
            console.log( "não entrou")
        }
        wasClicked=false
    }
    else{
        clickedBefore = wasClickedOn(event)
        // console.log(clickedBefore, "clickedBefore")
        wasClicked = true;
    }
    

    
    // smallerDisc()
    // wasClickedOn()
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