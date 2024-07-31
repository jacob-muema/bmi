document.getElementById('bmi-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let weight = parseFloat(document.getElementById('weight').value);
    let height = parseFloat(document.getElementById('height').value);

    if (height > 0 && weight > 0) {
        let bmi = weight / (height * height);
        document.getElementById('result').textContent = `The calculated BMI is: ${bmi.toFixed(2)}`;
    } else {
        document.getElementById('result').textContent = 'Please enter valid weight and height.';
    }
});
