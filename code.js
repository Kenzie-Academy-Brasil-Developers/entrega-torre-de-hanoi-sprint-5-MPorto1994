let wasClicked = false;
let clickedBefore = 0

let columns = document.querySelector(".column")
let towers = document.querySelectorAll(".tower")
let discs = document.querySelector(".discs")

let sectionGame = document.getElementById("game")
let sectionResult = document.getElementById("result")

let columnStart = document.createElement("div")
columnStart.classList.add("tower")
columnStart.id="towerStart"
sectionGame.appendChild(columnStart)

let columnOffSet = document.createElement("div")
columnOffSet.classList.add("tower")
columnOffSet.id="towerOffSet"
sectionGame.appendChild(columnOffSet)

let columnEnd = document.createElement("div")
columnEnd.classList.add("tower")
columnEnd.id="towerEnd"
sectionGame.appendChild(columnEnd)

function createScenery(){

    let blueDisc = document.createElement("div")
    blueDisc.classList.add("discs")
    blueDisc.id="blue"
    columnStart.appendChild(blueDisc)

    let purpleDisc = document.createElement("div")
    purpleDisc.classList.add("discs")
    purpleDisc.id="purple"
    columnStart.appendChild(purpleDisc)

    let greenDisc = document.createElement("div")
    greenDisc.classList.add("discs")
    greenDisc.id="green"
    columnStart.appendChild(greenDisc)
    
    let redDisc = document.createElement("div")
    redDisc.classList.add("discs")
    redDisc.id="red"
    columnStart.appendChild(redDisc)

    let columnO = document.createElement("div")
    columnO.classList.add("column")
    columnOffSet.appendChild(columnO)

    let columnS = document.createElement("div")
    columnS.classList.add("column")
    columnStart.appendChild(columnS)

    let columnE = document.createElement("div")
    columnE.classList.add("column")
    columnEnd.appendChild(columnE)
}
createScenery()

// let purpleDisc = document.getElementById("purple")

// let greenDisc = document.getElementById("green")
// let redDisc = document.getElementById("red")



function smallerDisc(discFrom , discFor){
    console.log("width do disco de saida", discFrom, discFrom.offsetWidth)
    console.log("width do disco de entrada", discFor,discFor.offsetWidth)
    if(discFrom.offsetWidth>10){
        if(discFrom.offsetWidth<discFor.offsetWidth ||discFor.offsetWidth==10){
            
            return true
        }
        else {
            console.log("Esta operação não é permitida")
            return false
        }
    }
}

function searchHighest(column){
    let highest = column.firstElementChild;
    return highest
}
function wasClickedOn(event){
    let column = document.getElementById(event.currentTarget.id)
    return column
}

function addDisc(disc,column){
    let newDisc = document.createElement("div")
    newDisc.id=disc;
    column.insertBefore(newDisc,column.firstElementChild)   
}

function checkVictory(){
    if (columnEnd.children.length>=5){
        return true
    }
}
function showResult(){
    let divResult = document.createElement("div")
    let pResult = document.createElement("p")
    let h2Result = document.createElement("h2")
    divResult.className = "result"
    pResult.innerText="Você venceu!!!"
    divResult.appendChild(pResult)
    divResult.appendChild(h2Result)
    
    
    sectionResult.appendChild(divResult)
}



function mainFunc (event){
    let columnToGo = wasClickedOn(event)
    let columnFrom = clickedBefore
    let topDiscToIn = searchHighest(columnToGo)

    if (wasClicked==true){
        let topDiscOut = searchHighest(clickedBefore)
        if(smallerDisc(topDiscOut,topDiscToIn)){
            topDiscOut.remove()
            addDisc(topDiscOut.id,columnToGo)
        }
        else{
            
            console.log( "não entrou")
        }
        wasClicked=false
    }
    else{
        clickedBefore = wasClickedOn(event)
        wasClicked = true;
    }
    if(checkVictory()){
        showResult()
    }
}


columnStart.addEventListener("click", mainFunc)
columnOffSet.addEventListener("click", mainFunc)
columnEnd.addEventListener("click", mainFunc)

