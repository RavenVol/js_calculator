function calculateMe(form) {
    let firstDigit = form.firstNumber.value;
    let secondDigit = form.secondNumber.value;
    const operator = form.operator.value;
    let result = "";

    isNaN(firstDigit) ? 
        result = result + "!!! WRONG DATA TYPE WARNING !!! \n Number must be entered on the first position.\n\n"
        :
        firstDigit = Number(firstDigit);
    
    isNaN(secondDigit) ? 
        result = result + "!!! WRONG DATA TYPE WARNING !!! \n Number must be entered on the second position.\n\n"
        :
        secondDigit = Number(secondDigit);
    
    operator != '+' 
        && operator != '-' 
        && operator != '*' 
        && operator != '/' ? 
        result = result + "!!! OPERATOR MISMATCH WARNING !!!\n" + operator + " has a wrong data format.\n\n"
        :
        null;

    operator == '/' && secondDigit == 0 ? 
        result = result + "!!! ERROR !!!\n Devision by zero!" 
        : 
        null;

    if (result) {
        document.getElementById("result").textContent = 'ERROR';
        alert(result);
    } else {
        switch (operator) {
            case '+':
                result = firstDigit + secondDigit;
                break;
            case '-': 
                result = firstDigit - secondDigit;
                break;
            case '*':
                result = firstDigit * secondDigit;
                break;
            case '/':
                result = firstDigit / secondDigit;
                break;
        }
        document.getElementById("result").textContent = result;
    }
}
