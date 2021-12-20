const body = document.querySelector('body');
const gridCon = document.querySelector('#grid-container');
gridCon.setAttribute('style', 'display: flex; height:80%; width:80%; justify-content: center');
//create a function that produces n number of row grid
function rowGrid (n) {
    for (; n > 0; n--) {
        const div = document.createElement('div');
        if (n === 1) {
            div.setAttribute('style', 'border: black solid; display: flex; flex-direction: column; flex: 1');
        } else {
            div.setAttribute('style', 'border: black solid; display: flex; flex-direction: column; flex: 1; border-right: 0px');
        }
        gridCon.appendChild(div);
    }
}
//create a function that creates n number of boxes in a column in the row.
function columnGrid (n, element) {
    for (; n > 0; n--) {
        const newdiv = document.createElement('div');
        if (n === 1) {
            newdiv.setAttribute('style', 'flex: 1');
        } else {
            newdiv.setAttribute('style', 'border-bottom: black solid; flex: 1');
        }
        element.appendChild(newdiv); 
    }
}
//a function that remove excess container divs from being able to be hovered
function removeExcess(n) {
    const hoverDivs = Array.from(document.querySelectorAll('div'));
    hoverDivs.shift();
    //removing column container divs from getting selected
    for (i = 0; i <= n*n; i += n) {
        hoverDivs.splice(i, 1);
    }
    return hoverDivs;
}


//a function that creates a nxn grid
function createGrid(n) {
    while (gridCon.firstChild) {
        gridCon.removeChild(gridCon.lastChild);
    }
    rowGrid(n); //setting initial row grid
    const divArray = Array.from(document.querySelectorAll('div'));
    divArray.shift(); //removing the container from the array
    divArray.forEach(div => columnGrid(n, div));
    return removeExcess(n);
}

let gridArray = createGrid(10);//setting initial grid 

//change the colour of the background if mouse is hover
function changeColour(e) {
    e.target.style.backgroundColor = 'black';
}

//add a button before the first div
let reset = document.createElement('button');
reset.textContent = 'Reset';
body.insertBefore(reset, gridCon);

reset.addEventListener('click', resetAndAsk);

function resetAndAsk () {
    gridArray.forEach(div => div.style.backgroundColor = '');
    let gridLength = +prompt('How many boxes do you want in a row (max 100)?');
    if (!gridLength) {
        alert("Check your input!");
        location.reload();
    }
    gridArray = createGrid(gridLength);
    gridArray.forEach(square => square.addEventListener('mouseover', changeColour));
}
//setting up an event listener for the divs to change when it is hovered
gridArray.forEach(square => square.addEventListener('mouseover', changeColour));
