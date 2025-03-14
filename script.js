document.getElementById('startQuiz').addEventListener('click', function() {
    document.getElementById('quizSection').style.display = 'block';
});

document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from refreshing the page

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
});
