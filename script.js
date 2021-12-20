const gridCon = document.querySelector('#grid-container');
gridCon.setAttribute('style', 'display: flex; height:95vh; margin: 15px 20px 0');
//creating 16 row grid
for (let n = 16; n > 0; n--) {
    const div = document.createElement('div');
    if (n === 1) {
        div.setAttribute('style', 'border: black solid; display: flex; flex-direction: column; flex: 1');
    } else {
        div.setAttribute('style', 'border: black solid; display: flex; flex-direction: column; flex: 1; border-right: 0px');
    }
    gridCon.appendChild(div);
}
//for each of the row grid, creating 16 column grid
const divs = Array.from(document.querySelectorAll('div'));
divs.shift();
for (const div of divs) {
    for (let n = 16; n > 0; n--) {
        const newdiv = document.createElement('div');
        if (n === 1) {
            newdiv.setAttribute('style', 'flex: 1');
        } else {
            newdiv.setAttribute('style', 'border-bottom: black solid; flex: 1');
        }
        div.appendChild(newdiv); 
    }
}

//select all divs except the container;
const hoverDivs = Array.from(document.querySelectorAll('div'));
hoverDivs.shift();
//removing column container divs from getting selected
for (i = 0; i <= 256; i += 16) {
    hoverDivs.splice(i, 1);
}
//setting up an event listener for the divs to change when it is hovered
hoverDivs.forEach(square => square.addEventListener('mouseover', changeColour));

//change the colour of the background if mouse is hover
function changeColour(e) {
    e.target.style.backgroundColor = 'black';
}