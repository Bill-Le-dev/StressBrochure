document.addEventListener("DOMContentLoaded", function () {
  // Get elements
  const popupForm = document.getElementById("popupForm");
  const openFormBtn = document.getElementById("openFormBtn");
  const closeBtn = document.querySelector(".close-btn");
  const resultDiv = document.getElementById("result");

  // Check if elements are found
  if (openFormBtn && popupForm && closeBtn) {
      // Show the pop-up form
      openFormBtn.addEventListener("click", () => {
          popupForm.style.display = "flex";
      });

      // Close the pop-up form
      closeBtn.addEventListener("click", () => {
          popupForm.style.display = "none";
          resultDiv.innerHTML = ""; // Clear result when closing
      });

      // Evaluate stress level
      function evaluateStress() {
          const answers = document.forms["stressForm"].elements;
          let score = 0;

          for (let i = 0; i < answers.length; i++) {
              if (answers[i].checked) {
                  score += parseInt(answers[i].value);
              }
          }

          let resultText;
          if (score >= 20) {
              resultText = "High stress level. Consider speaking with a counselor or finding ways to manage stress.";
          } else if (score >= 10) {
              resultText = "Moderate stress level. Try to take breaks and practice relaxation techniques.";
          } else {
              resultText = "Low stress level. Keep up the healthy balance!";
          }

          resultDiv.innerHTML = `<p>${resultText}</p>`;
      }

      // Make evaluateStress accessible globally
      window.evaluateStress = evaluateStress;
  } else {
      console.error("One or more required elements (#openFormBtn, #popupForm, .close-btn) are missing.");
  }
});
