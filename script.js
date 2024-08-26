let gridSize = 16;
let selectedColor = '#ff0000';
let container = document.querySelector('.container');
let gridSizeButton = document.querySelector('button');

document.addEventListener( 'DOMContentLoaded', () => makeGrid(gridSize) );
gridSizeButton.addEventListener('click', changeGridSize);
container.addEventListener('mouseover', (e) => {
  if (e.target !== e.currentTarget) {
    e.target.style.backgroundColor = selectedColor;
  }
})

function makeGrid(size) {
  const totalDivs = size ** 2;
  const divDimnesion = (960 / size);
  for (let i = 1; i <= totalDivs; i++) {
    let box = document.createElement('div');
    box.style.width = divDimnesion + 'px';
    box.style.height = divDimnesion + 'px';
    box.classList.add("box");
    container.appendChild(box);
  }
}

function changeGridSize() {
  let size;
  do {
    size = Number( prompt("Enter a size upto 100") );
  } while(isNaN(size) || size > 100);
  
  if (size) {
    container.textContent = '';
    makeGrid(size);
  } 
}

// function paintBox(box) {
//   box.style.backgroundColor = selectedColor;
// }