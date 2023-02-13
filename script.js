const board = document.querySelector('#container-board');
const sliderBar = document.querySelector('#slider-bar');
const sliderDisplay = document.querySelector('#slider-display')
const gridSquare = document.querySelectorAll('.grid-square');

let size;
let divCount;
let oldSize;


function createGrid(){
    size = Number(sliderBar.value);
    divCount = size*size;
    oldSize = size;
    for (var i = 1; i <= divCount; i++){
        const div = document.createElement('div');
        div.classList.add('grid-square');
        div.style.width = `calc(100%/${size})`;
        div.style.height = `calc(100%/${size})`;
        div.style.border = "1px solid black";
        div.addEventListener('mouseover', ()=>{
            div.style.backgroundColor = "black"
        });
        board.appendChild(div);
    };
};

function clearGrid(){
    let divToRemove = oldSize*oldSize;
    let cells = board.querySelectorAll('div');
    cells.forEach(cell => cell.remove());
    };



sliderBar.addEventListener('input', (e) =>{
    sliderDisplay.textContent = e.target.value+'x'+e.target.value;
    size = e.target.value;
    divCount = size*size;
    clearGrid();
    createGrid();
});




createGrid();





