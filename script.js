let gridSize = 16
const gridSizeButton = document.querySelector('#grid-size-button');
document.addEventListener('DOMContentLoaded', createGrid);
gridSizeButton.addEventListener('click', changeGridSize);

function createGrid() {
  const gridContainer = document.querySelector('.container');

  for (let i = 0; i < gridSize; i++) {
    const gridRow = document.createElement('div');
    gridRow.classList.add('grid-row')

    for (let i = 0; i < gridSize; i++) {
      const gridItem = document.createElement('div');
      gridItem.classList.add('grid-item')

      gridRow.appendChild(gridItem)
      gridItem.addEventListener('mouseenter', paintItem)
    }

    gridContainer.appendChild(gridRow);
  }
}

function paintItem(e) {
  const fillColor = `rgb(${Math.floor(Math.random() * 255) + 1}, ${Math.floor(Math.random() * 255) + 1}, ${Math.floor(Math.random() * 255) + 1})`;
  e.target.style.backgroundColor = fillColor;
}

function changeGridSize() {
  do {
    gridSize = Number( prompt("Enter a size upto 100") );
  } while(isNaN(gridSize) || gridSize > 101);

  if (gridSize > 16 && gridSize < 101) {
    while (document.querySelectorAll('.grid-item').length > 0) {
      document.querySelectorAll('.grid-item')[0].remove();
    }
  
    createGrid()
  } else {

  }

}