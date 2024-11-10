const additionProblem = document.getElementById('addition-problem');
const additionFeedback = document.getElementById('addition-feedback');
let num1, num2, correctSum;

// Generate random numbers and display the addition problem
function generateAdditionProblem() {
  num1 = Math.floor(Math.random() * 10) + 1; // Random number between 1 and 10
  num2 = Math.floor(Math.random() * 10) + 1;
  correctSum = num1 + num2;

  additionProblem.textContent = `What is ${num1} + ${num2}?`;
  additionFeedback.textContent = ''; // Clear previous feedback
}

// Check if the user's answer is correct
function checkAddition() {
  const userAnswer = parseInt(document.getElementById('addition-answer').value, 10);
  if (userAnswer === correctSum) {
    additionFeedback.textContent = 'Correct! Great job!';
    additionFeedback.style.color = 'green';
  } else {
    additionFeedback.textContent = 'Oops! Try again.';
    additionFeedback.style.color = 'red';
  }
}

// Initialize the game
generateAdditionProblem();
