const board = document.querySelector('#container-board');


let size = 25; 
let divCount = size*size ;
for (var i = 1; i <= divCount; i++){
    const div = document.createElement('div');
    div.classList.add('grid-square');
    div.style.width = `calc(100%/${size})`;
    div.style.height = `calc(100%/${size})`;
    div.style.border = "1px solid black";
    board.appendChild(div);
};


const divDom = document.querySelectorAll('.grid-square');

divDom.forEach((square) =>{
    square.addEventListener('mouseover', ()=>{
        square.style.backgroundColor = "blue";
    })
})

