const inputHeight = document.querySelector("#height");
const inputWeight = document.querySelector("#weight");
const calculateBmi = document.querySelector(".calculate-btn");
const resultValue = document.querySelector(".result-value");
const resultMsg = document.querySelector(".result-message");
const resultContainer = document.querySelector(".result");

calculateBmi.addEventListener("click", () => {
  const height = parseFloat(inputHeight.value);
  const weight = parseFloat(inputWeight.value);

  // Prevent Empty-Input Or -ve Values:
  if (!height || !weight || height <= 0 || weight <= 0) {
    resultContainer.style.display = "none";
    return;
  }

  // Calculate BMI
  const bmi = Math.round(weight / (height / 100) ** 2);

  // Show Result
  resultContainer.style.display = "block";
  resultValue.textContent = bmi;
  resultMsg.textContent =
    bmi < 18.6 ? "Under-Weight" : bmi <= 24.9 ? "Normal" : "Over-Weight";
});
