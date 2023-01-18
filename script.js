const container = document.querySelector('#container');


let length = 16;
let width = 16; 
let divCount = length*width ;
for (var i = 1; i <= divCount; i++){
    const div = document.createElement('div');
    div.classList.add('grid-square');
    container.appendChild(div);
};

const divDom = document.querySelectorAll('.grid-square');

divDom.forEach((square) =>{
    square.addEventListener('mouseover', ()=>{
        square.style.backgroundColor = "blue";
    })
})