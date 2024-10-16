function calculateScore() {
    const answers = {
      q1: "a", // Correct answer for question 1
      q2: "a", // Correct answer for question 2
      // Add the correct answers for all questions
    };

    let score = 0;

    // Loop through each question and compare user answers with correct answers
    for (let i = 1; i <= 2; i++) {
      const userAnswer = document.querySelector(
        `input[name="q${i}"]:checked`
      );
      if (userAnswer && userAnswer.value === answers[`q${i}`]) {
        score++;
      }
    }

    // Show the result
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `<h3>Your Score: ${score} / 2</h3>`;
  }