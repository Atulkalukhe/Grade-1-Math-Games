const shapeDisplay = document.getElementById('shape-display');
const shapeFeedback = document.getElementById('shape-feedback');
let currentShape;

// Generate a random shape
function generateShape() {
  const shapes = ['circle', 'square', 'triangle'];
  currentShape = shapes[Math.floor(Math.random() * shapes.length)];

  shapeDisplay.innerHTML = ''; // Clear previous shape

  const shapeElement = document.createElement('div');
  shapeElement.classList.add(currentShape); // Apply shape-specific styling
  shapeDisplay.appendChild(shapeElement);

  shapeFeedback.textContent = ''; // Clear feedback
}

// Check if the selected shape matches the displayed shape
function checkShape() {
  const selectedShape = document.getElementById('shape-choices').value;
  if (selectedShape === currentShape) {
    shapeFeedback.textContent = 'Correct! You matched the shape!';
    shapeFeedback.style.color = 'green';
  } else {
    shapeFeedback.textContent = 'Oops! Try again.';
    shapeFeedback.style.color = 'red';
  }
}

// Initialize the game
generateShape();
