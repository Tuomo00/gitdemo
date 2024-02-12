// Yhteenlaskutehtävän generaattori
function generateQuestion() {
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;
  return { question: `${num1} + ${num2}`, answer: num1 + num2 };
}

let correctCount = 0;
let wrongCount = 0;

// Näytä ensimmäinen kysymys
function showQuestion() {
  const { question, answer } = generateQuestion();
  document.getElementById('question').textContent = question;
  document.getElementById('answer').value = '';
  return answer;
}

// Tarkista vastaus ja päivitä pisteet
function checkAnswer() {
  const userAnswer = parseInt(document.getElementById('answer').value, 10);
  const correctAnswer = showQuestion();

  if (!isNaN(userAnswer)) {
      if (userAnswer === correctAnswer) {
          correctCount++;
      } else {
          wrongCount++;
      }
      updateScore();
  } else {
      alert('Syötä validi numero!');
  }
}

// Päivitä pistemäärät näytölle
function updateScore() {
  document.getElementById('correctCount').textContent = correctCount;
  document.getElementById('wrongCount').textContent = wrongCount;
}

// Alusta sovellus
showQuestion();