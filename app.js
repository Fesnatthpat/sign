function calculateScore() {
  const answers = {
    q1: "a",  // คำตอบที่ถูกต้องสำหรับคำถาม 1
    q2: "b",  // คำตอบที่ถูกต้องสำหรับคำถาม 2
    q3: "c",  // คำตอบที่ถูกต้องสำหรับคำถาม 3
    q4: "a",  // คำตอบที่ถูกต้องสำหรับคำถาม 4
    q5: "c",  // คำตอบที่ถูกต้องสำหรับคำถาม 5
    q6: "b",  // คำตอบที่ถูกต้องสำหรับคำถาม 6
    q7: "c",  // คำตอบที่ถูกต้องสำหรับคำถาม 7
    q8: "a",  // คำตอบที่ถูกต้องสำหรับคำถาม 8
    q9: "b",  // คำตอบที่ถูกต้องสำหรับคำถาม 9
    q10: "a"  // คำตอบที่ถูกต้องสำหรับคำถาม 10
  };

  let score = 0; // ตัวแปรเก็บคะแนน
  const totalQuestions = 10; // จำนวนคำถามทั้งหมด

  // ลูปเพื่อนับคะแนน
  for (let i = 1; i <= totalQuestions; i++) {
    const userAnswer = document.querySelector(`input[name="q${i}"]:checked`);
    if (userAnswer && userAnswer.value === answers[`q${i}`]) {
      score++; // เพิ่มคะแนนถ้าคำตอบถูกต้อง
    }
  }

  // แสดงผลคะแนน
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `<h3>คะแนนของคุณ: ${score} / ${totalQuestions}</h3>`;
}
