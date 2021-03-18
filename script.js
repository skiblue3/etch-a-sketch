// function to get random value out of 255
function random255() {
    return Math.floor(Math.random() * 255);
}

function makeGrid(size) {
    // deletes previous grid
    document.querySelectorAll('.grid').forEach((div) => {div.remove()});

    // creates new grid using the given size
    for (let i = 0; i < size*size; i++) {
        const div = document.createElement('div');
        div.classList.add('grid');
        container.appendChild(div);
    }
    container.style.gridTemplateColumns = `repeat(${size}, ${360/size}px)`;
    container.style.gridTemplateRows = `repeat(${size}, ${360/size}px)`;

    document.querySelector('main').appendChild(container);

    // checks for which button got clicked
    const colors = document.querySelectorAll('.colors');
    colors.forEach((color) => {
        color.addEventListener('click', () => hoverGrid(color.getAttribute('id'), size));
    });

    // check for hovering event
    const divs = document.querySelectorAll('.grid');
    let color = 0;
    divs.forEach((div) => {
        div.addEventListener('mouseover', function () {
            div.style.backgroundColor = `rgb(${color},${color},${color})`;
        });
    });

    
}    
// need to work on various color values - yet to do
function hoverGrid(value = 'black',) {
    let color;
    document.querySelectorAll('.grid').forEach((div) => {div.remove()});
    for (let i = 0; i < size*size; i++) {
        const div = document.createElement('div');
        div.classList.add('grid');
        container.appendChild(div);
    }
    container.style.gridTemplateColumns = `repeat(${size}, ${360/size}px)`;
    container.style.gridTemplateRows = `repeat(${size}, ${360/size}px)`;

    const divs = document.querySelectorAll('.grid');
    switch(value) {    
        case 'black': 
            color = 0;
            divs.forEach((div) => {
                div.addEventListener('mouseover', function () {
                    div.style.backgroundColor = `rgb(${color},${color},${color})`;
                });
            });
            break;
        case 'gray':
            divs.forEach((div) => {
                div.addEventListener('mouseover', function () {
                    color = getComputedStyle(div).getPropertyValue('background-color').split(', ');
                    color = parseInt(color[1]);
                    color -= 255/10;
                    if (color < 0) color = 0
                    div.style.backgroundColor = `rgb(${color},${color},${color})`;
                });
            });
            break;
        case 'rainbow':
            color = 0;
            divs.forEach((div) => {
                div.addEventListener('mouseover', function () {
                    div.style.backgroundColor = `rgb(${random255()},${random255()},${random255()})`;
                });
            });
            break;
        case 'random':
                color = `rgb(${random255()},${random255()},${random255()})`
                divs.forEach((div) => {
                    div.addEventListener('mouseover', function () {
                        div.style.backgroundColor = color;
                    });
                });
                break;
    }
}

// create a container to store all divs
const container = document.createElement('div');
container.setAttribute('id', 'container');

let size = 16;
makeGrid(16); // default grid of 16x16

// when change size button is clicked
const button = document.querySelector('#sizechange');
button.addEventListener('click', (e) => {
    while (true) {
        size = prompt("enter size: ", "16");
        size = parseInt(size);
        if (size > 0 && size < 100) 
            break;
        else 
            alert("please enter in the range of 1-99!");
    }
    makeGrid(size);
});
