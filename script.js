
const resolution = 16; // determine the number of squares in each row
const gridSize = 400;
const container = document.querySelector("#grid");
container.style = `grid-template-columns: repeat(${resolution}, 1fr); 
                    grid-template-columns: repeat(${resolution}, 1fr);`;

function mouseHover(e){
    //break if mouse is not clicked
    if (e.buttons !== 1) {
        return;
    }if (eraser.value === 'on'){
        e.target.style.backgroundColor = '';
    } else{ 
        e.target.style.backgroundColor = colorPicker.value;
    }
}

// create resolution**2 squares to fill the grid
let newSquare;
for (let i = 0; i < resolution; i++) {
    for (let j = 0; j < resolution; j++) {
        newSquare = document.createElement('div');
        newSquare.classList = "pixel";
        //add hover event that paint the square
        newSquare.addEventListener('mouseenter', mouseHover)
        newSquare.addEventListener('mousedown', mouseHover)
        newSquare.addEventListener('dragstart', (e) => { e.preventDefault() }); // disable drag event

        container.appendChild(newSquare);
    }
}

// Tools buttons
function clear(){
    document.querySelectorAll('.pixel').forEach((square) => square.style = '');
}
const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', clear);

const colorPicker = document.querySelector('#colorpicker');

function toggleEraser(e){
    if (e.target.value === "off"){
        e.target.value = 'on';
        e.target.classList = 'clicked';
    }else if (e.target.value === 'on'){
        e.target.value = 'off';
        e.target.classList = '';
    } else {console.log('eraser valueError')}
}
const eraser = document.querySelector('#eraser');
eraser.addEventListener('click', toggleEraser);

// asdasf




