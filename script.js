const container = document.querySelector("#container");
const resizeBtn = document.querySelector("#resizeBtn");
const changeColorBtn = document.querySelector("#changeColorBtn");
const resetBtn = document.querySelector("#resetBtn");

// FUNC: remove the grids each time the create grid function is called
const remGrids = () => {
  
}
  // select all the rows and columns
  // remove rows and columns containers

// FUNC: create grids inside the container
const createGrids = (size) => {
  // start a for loop iterating from 0 to the event input
    // create row divs appending into the container
    // give it row className
    // another for loop iterating from 0 to the same event input
      // create square divs appending to the container
      // give it class square
      // give it opacity 0.1;
}

// EVENT: type: load, for the window js property, invoke the create grid function
window.addEventListener('load', () => createGrids(16));

// FUNC: create opaque squares s
  // create a variable holding color value;
  // create a variable holding all the squares
  // EVENT: mouseover 
    // give its parameter style at var holding the color value
    // get the current opacity and bent it to a variable
    // change the opacity
  
// EVENT: trigger the random color function
  // bend all the squares in a variable
  
// EVENT: reset the grids background
  // prompt the userr for a value for the grid size
  // bend that input inside a number variable
  // invoke the create grid function

// EVENT: trigger the resize function