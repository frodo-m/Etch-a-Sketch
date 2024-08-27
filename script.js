const container = document.querySelector('#container');
const gridSizeInput = document.querySelector('#gridSize');
const generateGridBtn = document.querySelector('#generateGridBtn')
const resetBtn = document.querySelector('#resetBtn');


const setGrids = (size) => {
  // Clear the container safely
  // Instead of container.innerHTML = '';
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  // Calculate the size of each square based on the container size
  const squareSize = container.clientWidth / size;

  // Generate the grid
  for (let i = 0; i < size * size; i++) {
    const square = document.createElement('div');
    square.className = 'square';
    square.style.width = `${squareSize}px`;
    square.style.heigh = `${squareSize}px`;
    container.appendChild(square);

    // Hover effect
    square.addEventListener('mouseover', (e) => {
      square.classList.add('hovered');
    });
    container.appendChild(square);
  }
};


const validateGridSize = () => {
  let size = parseInt(gridSizeInput.value);

  // Ensure the input validation
  if (size < 2 || size > 100 || isNaN(size)) {
    alert('Please enter a valid number between 2 and 100');
    return;
  }

  setGrids(size);
}

const resetGrid = () => {
  // Remove the hover effect
  const squares = document.querySelectorAll('.square');
  squares.forEach(square => {
    square.classList.remove('hovered');
  });
};
resetBtn.addEventListener('click', resetGrid);

// Event listener for the buttons
gridSizeInput.addEventListener('change', validateGridSize);

// Set default grid size


window.onload = () => setGrids(16);

