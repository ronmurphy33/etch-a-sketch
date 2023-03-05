const board = document.querySelector('#container-board');
const sliderBar = document.querySelector('#slider-bar');
const sliderDisplay = document.querySelector('#slider-display')
const gridSquare = document.querySelectorAll('.grid-square');
const blackBtn = document.querySelector('#black-color-btn');
const multiColorBtn = document.querySelector('#multi-color-btn');

let size;
let divCount;
let oldSize;
let gridColor;



function getRandomNumber(){
    return Math.floor(Math.random()*256);
};
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
            if (gridColor == "black"){
                div.style.backgroundColor = 'black';
            } else {
                let randomColor = "rgb("
                +getRandomNumber()+","
                +getRandomNumber()+","
                +getRandomNumber()+")";
                gridColor = randomColor;
                div.style.backgroundColor = gridColor;
            }
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

blackBtn.addEventListener('click', ()=>{
    gridColor = "black";
});

multiColorBtn.addEventListener('click', ()=>{
    gridColor = randomColor;
})





createGrid();