const calculateBmi = document.querySelector(".calculate-btn");

calculateBmi.addEventListener("click", () => {
  const inputHeight = document.querySelector("#height");
  const inputWeight = document.querySelector("#weight");
  const resultValue = document.querySelector(".result-value");
  const resultMsg = document.querySelector(".result-message");
  const resultContainer = document.querySelector(".result");

  const height = parseFloat(inputHeight.value);
  const weight = parseFloat(inputWeight.value);
  resultContainer.style.display = "block";

  // Prevent Empty-Input Or -ve Values:
  if (
    !height ||
    !weight ||
    height < 0 ||
    weight < 0 ||
    isNaN(height) ||
    isNaN(weight)
  ) {
    resultValue.innerHTML = `Enter Valid Value ):`;
    resultMsg.textContent = ``;
    return;
  }

  // Calculate BMI
  const bmi = (weight / (height / 100) ** 2).toFixed(2);

  // Show Result
  resultValue.textContent = bmi;
  resultMsg.textContent =
    bmi < 18.6 ? "Under-Weight" : bmi <= 24.9 ? "Normal" : "Over-Weight";
});
