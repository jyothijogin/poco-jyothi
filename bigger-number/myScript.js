function compare() {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    
     const result = document.getElementById('result');
    
     if (num1 > num2) {
        result.innerText= "The greater number of " + num1 + " and " +num2 + " is " + num1;
     }
        else if (num1 < num2) {
            result.innerText="The smaller number of " + num1 + " and " +num2 + " is " + num1;
        } 

        else {
            result.innerText= "They are equal";
        }
}