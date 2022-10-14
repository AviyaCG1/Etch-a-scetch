
const resolution = 60; // determine the number of squares in each row
const gridSize = 400;
const container = document.querySelector("#grid");
container.style = `grid-template-columns: repeat(${resolution}, 1fr); 
                    grid-template-columns: repeat(${resolution}, 1fr);`;

function darker(e){
    if (e.target.style.backgroundColor === ''){
        e.target.style.backgroundColor = 'rgb(255, 255, 255)';
    }
    let rgbNumbers = e.target.style.backgroundColor.slice(4,-1).split(', ');
    rgbNumbers.forEach((x, i, rgbNumbers) => rgbNumbers[i] = Math.max(parseInt(x) - 20, 0));
    e.target.style.backgroundColor = `rgb(${rgbNumbers[0]}, ${rgbNumbers[1]}, ${rgbNumbers[2]})`;
}

function lighter(e){
    if (e.target.style.backgroundColor === ''){
        e.target.style.backgroundColor = 'rgb(255, 255, 255)';
    }
    let rgbNumbers = e.target.style.backgroundColor.slice(4,-1).split(', ');
    rgbNumbers.forEach((x, i, rgbNumbers) => rgbNumbers[i] = Math.min(parseInt(x) + 20, 255));
    e.target.style.backgroundColor = `rgb(${rgbNumbers[0]}, ${rgbNumbers[1]}, ${rgbNumbers[2]})`;
}

function mouseHover(e){
    //break if mouse is not clicked
    if (e.buttons !== 1) {
        return;
    }if (eraser.value === 'on'){
        e.target.style.backgroundColor = '';
    } else if (shade.value === 'on'){
        darker(e);
    } else if (lighten.value === 'on'){
        lighter(e);
    } else if(color.value === 'on'){ 
        e.target.style.backgroundColor = colorPicker.value;
    }
}

// create resolution**2 squares to fill the grid
function createPixels(){
  //delete old pixels
  document.querySelectorAll('#grid>div').forEach(pixel => {
        container.removeChild(pixel);
    });
  //create new pixels
  let newSquare;
  for (let i = 0; i < resolution; i++) {
      for (let j = 0; j < resolution; j++) {
          newSquare = document.createElement('div');
          newSquare.classList = "pixel";
          //add hover event that paint the square
          newSquare.addEventListener('mouseenter', mouseHover) // paint a pixel when mouse clicks and enter a pixel area
          newSquare.addEventListener('mousedown', mouseHover) // paint a single pixel when clicked
          newSquare.addEventListener('dragstart', (e) => { e.preventDefault() }); // disable drag event

          container.appendChild(newSquare);
      }
  }
}
createPixels();
// Tools buttons
function clear(){
    document.querySelectorAll('.pixel').forEach((square) => square.style = '');
}
const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', clear);

const colorPicker = document.querySelector('#colorpicker');
function turnoffButton(button){
    button.value = 'off';
    button.classList = '';
}
function toggleButton(e){
    if (e.target.value === "off"){
        document.querySelectorAll('#tools > button').forEach(turnoffButton);
        e.target.value = 'on';
        e.target.classList = 'clicked';
    }else if (e.target.value === 'on'){
        return;
    } else {console.log('button valueError')}
}
const eraser = document.querySelector('#eraser');
eraser.addEventListener('click', toggleButton);
const shade = document.querySelector('#shade');
shade.addEventListener('click', toggleButton);
const lighten = document.querySelector('#lighten');
lighten.addEventListener('click', toggleButton);
const color = document.querySelector('#color');
color.addEventListener('click', toggleButton);





