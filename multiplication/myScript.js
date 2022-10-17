const input = prompt("Enter a number between 0 and 10");
if(input < 0 || input > 10) {
    window.alert("Incorrect Input");
}

else {
    window.alert(input + " * " + "9 = " + input * 9);
}