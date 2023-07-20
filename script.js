// Function to calculate BMI
function calculateBMI(weight, height) {
  const heightInMeters = height / 100;
  return weight / (heightInMeters * heightInMeters);
}

// Function to display BMI result
function displayResult(bmi, gender) {
  const resultElement = document.getElementById("result");
  let statusBMI;

  if (gender === "Pria") {
    if (bmi < 18.5) {
      statusBMI = "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
      statusBMI = "Normal weight";
    } else if (bmi >= 25 && bmi < 30) {
      statusBMI = "Overweight";
    } else {
      statusBMI = "Obese";
    }
  } else {
    if (bmi < 18.5) {
      statusBMI = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24) {
      statusBMI = "Normal weight";
    } else if (bmi >= 24 && bmi < 29) {
      statusBMI = "Overweight";
    } else {
      statusBMI = "Obese";
    }
  }

  resultElement.innerText = `BMI Anda: ${bmi.toFixed(2)} - ${statusBMI}`;
}

function handleFormSubmit(event) {
  event.preventDefault();

  const weightInput = document.getElementById("weight");
  const heightInput = document.getElementById("height");
  const genderSelect = document.getElementById("gender");

  const weight = parseFloat(weightInput.value);
  const height = parseFloat(heightInput.value);
  const gender = genderSelect.value;

  if (isNaN(weight) || isNaN(height)) {
    alert("Please enter valid weight and height.");
    return;
  }

  const bmi = calculateBMI(weight, height);
  displayResult(bmi, gender);
}

const bmiForm = document.getElementById("bmiForm");
bmiForm.addEventListener("submit", handleFormSubmit);
