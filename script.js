const container = document.querySelector('#container');
const gridSizeInput = document.querySelector('#gridSize');
const generateGridBtn = document.querySelector('#generateGridBtn');
const resetBtn = document.querySelector('#resetBtn');

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const setGrids = (size) => {
  // Clear the container safely
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
    square.style.height = `${squareSize}px`;

    // Add hover effect on mouseover
    square.addEventListener('mouseover', (e) => {
      e.target.style.backgroundColor = getRandomColor();
      let currentOpacity = parseFloat(e.target.style.opacity) || 0;
      e.target.style.opacity = currentOpacity + 0.1;
    });


    container.appendChild(square);
  }
};

// Validate user input
const validateGridSize = () => {
  let size = parseInt(gridSizeInput.value);

  // Ensure the input validation
  if (size < 2 || size > 100 || isNaN(size)) {
    alert('Please enter a valid number between 2 and 100');
    return;
  }

  setGrids(size);
}

// Remove the hover effect
const resetGrid = () => {
  const squares = document.querySelectorAll('.square');
  squares.forEach(square => {
    square.style.backgroundColor = ''; // Reset background color
    square.style.opacity = ''; // Reset opacity
  });
};

resetBtn.addEventListener('click', resetGrid);

// Event listener for the buttons
gridSizeInput.addEventListener('change', validateGridSize);

// Set default grid size
window.onload = () => setGrids(16);
