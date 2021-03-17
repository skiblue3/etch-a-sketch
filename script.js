const container = document.createElement('div');
container.setAttribute('id', 'container');

for (let i = 0; i < 16*16; i++) {
    const div = document.createElement('div');
    div.classList.add('grid');
    container.appendChild(div);
}

document.querySelector('body').appendChild(container);

// function to get random value out of 255
function random255() {
    return Math.floor(Math.random() * 255);
}

// check for hovering event
const divs = document.querySelectorAll('.grid');

divs.forEach((div) => {
    div.addEventListener('mouseover', function (e) {
        div.style.backgroundColor = `rgb(${random255()},${random255()},${random255()})`;
    });
});