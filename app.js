function calculateScore() {
  const answers = {
    q1: "a",
    q2: "b",
    q3: "c",
    q4: "a",
    q5: "c",
    q6: "b",
    q7: "c",
    q8: "a",
    q9: "b",
    q10: "a",
  };

  let score = 0;
  const totalQuestions = 10;

  for (let i = 1; i <= totalQuestions; i++) {
    const userAnswer = document.querySelector(`input[name="q${i}"]:checked`);
    if (userAnswer && userAnswer.value === answers[`q${i}`]) {
      score++;
    }
  }

  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `<h3>คะแนนของคุณ: ${score} / ${totalQuestions}</h3>`;
}
