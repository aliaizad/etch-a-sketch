const gridCon = document.querySelector('#grid-container');
gridCon.setAttribute('style', 'display: flex; height:100vh');
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
        newdiv.setAttribute('style', 'border-bottom: black solid; flex: 1');
        div.appendChild(newdiv); 
    }
}