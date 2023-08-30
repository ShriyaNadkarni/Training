function calculate() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operator = document.getElementById("operator").value;
    const resultElement = document.getElementById("result");

    if (isNaN(num1) || isNaN(num2)) {
        resultElement.textContent = "Invalid input. Please enter valid numbers.";
    } else {
        let result;
        switch (operator) {
            case "+":
                result = num1 + num2;
                break;
            case "-":
                result = num1 - num2;
                break;
            case "*":
                result = num1 * num2;
                break;
            case "/":
                if (num2 === 0) {
                    result = "Division by zero is not allowed.";
                } else {
                    result = num1 / num2;
                }
                break;
            default:
                result = "Invalid operator. Please enter +, -, *, or /.";
                break;
        }

        resultElement.textContent = 'Result:' +result;
    }
}