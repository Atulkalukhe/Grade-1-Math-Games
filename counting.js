const itemContainer = document.getElementById('item-container');
const feedback = document.getElementById('feedback');
let correctCount;

// Generate random items to count
function generateItems() {
  itemContainer.innerHTML = '';
  correctCount = Math.floor(Math.random() * 10) + 1; // Random count between 1 and 10

  for (let i = 0; i < correctCount; i++) {
    const item = document.createElement('div');
    item.classList.add('count-item'); // style as a star or circle in CSS
    itemContainer.appendChild(item);
  }

  feedback.textContent = ''; // Clear feedback
}

// Check if the user's answer is correct
function checkAnswer() {
  const userAnswer = parseInt(document.getElementById('user-answer').value, 10);
  if (userAnswer === correctCount) {
    feedback.textContent = 'Correct! Great job!';
    feedback.style.color = 'green';
  } else {
    feedback.textContent = 'Oops! Try again.';
    feedback.style.color = 'red';
  }
}

// Initialize the game
generateItems();
