//Selectors
const board = document.querySelector('#board');
const squareNumbers = 750;
const colors = ['#FF0083FF', '#DCFF8FFF', '#7C83FFFF', '#40FFECFF', '#FFD104FF'];

//Event Listeners
for(let i = 0; i < squareNumbers; i++){
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => setColor(square));
    square.addEventListener('mouseleave', () => removeColor(square));
    board.append(square);
}

//Functions

function setColor(element){
  const color = getRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}
function removeColor(element){
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow = `0 0 2px #000`;
}
function getRandomColor(){
    const index  = Math.floor(Math.random() * colors.length);
    return colors[index];
}