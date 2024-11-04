document.getElementById("quiz-form").addEventListener("submit", (event) => {
  event.preventDefault();

  const answerInput = document.getElementById("answer");
  const errorMessage = document.getElementById("errorMessage");

  const correctAnswer = "8";

  if (answerInput.value.trim() === correctAnswer) {
    alert("Correct! You may proceed to the next room.");
    window.location.href = "../room2/index.html";
  } else {
    errorMessage.style.display = "block";
    answerInput.style.borderColor = "#ff007b";
    answerInput.style.color = "#ff007b";
  }
});
