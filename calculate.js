const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const weight = parseFloat(document.querySelector('#weight').value)
    const height = parseFloat(document.querySelector('#height').value)
    const result = document.querySelector('#result')
    const after_result = document.querySelector('#after_result')
    if(isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        result.innerText = "Please enter valid weight and height values."
        return
    }
    const bmi = (weight / (height * height) * 1000000).toFixed(2)
    let category = ""

        if (bmi < 18.5) {
            category = "Underweight"
        }
        else if (bmi >= 18.5 && bmi < 25) {
            category = "Normal weight"
        }
        else if (bmi >= 25 && bmi < 30) {
            category = "Overweight"                             
        }
        else {
            category = "Obesity"
        }

        after_result.innerText = `Your BMI is: ${bmi} .You are in ${category} category.`;
});