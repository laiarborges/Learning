
// Show Lesson 1 and enable navigation
document.getElementById('next1').addEventListener('click', function() {
    document.getElementById('lesson1').style.display = 'none';  // Hide lesson 1
    document.getElementById('lesson2').style.display = 'block'; // Show lesson 2
});

// Show Lesson 2 and enable quiz navigation
document.getElementById('next2').addEventListener('click', function() {
    document.getElementById('lesson2').style.display = 'none';  // Hide lesson 2
    document.getElementById('quiz').style.display = 'block';    // Show quiz
});

// Handle quiz submission and show result
document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page reload on form submission

    const selectedAnswer = document.querySelector('input[name="question1"]:checked');
    const resultDiv = document.getElementById('quizResult');

    if (selectedAnswer) {
        if (selectedAnswer.value === 'HyperText Markup Language') {
            resultDiv.textContent = 'Correct! HTML stands for HyperText Markup Language.';
            resultDiv.style.color = 'green';
        } else {
            resultDiv.textContent = 'Incorrect. The correct answer is "HyperText Markup Language".';
            resultDiv.style.color = 'red';
        }
    } else {
        resultDiv.textContent = 'Please select an answer.';
        resultDiv.style.color = 'orange';
    }

    setTimeout(function() {
        document.getElementById('quiz').style.display = 'none'; // Hide quiz
        document.getElementById('conclusion').style.display = 'block'; // Show conclusion
    }, 2000); // Show conclusion after 2 seconds
});

// Restart the module from the beginning
document.getElementById('restart').addEventListener('click', function() {
    document.getElementById('conclusion').style.display = 'none';  // Hide conclusion
    document.getElementById('lesson1').style.display = 'block';    // Show lesson 1
});
