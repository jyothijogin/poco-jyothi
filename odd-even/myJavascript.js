 const input = prompt("Enter a number between 0 and 20");

if(input < 0 || input > 20) {
    window.alert("Incorrect value");
}

else if (input % 2 === 0 ) {
    window.alert(input + " is even");
}
else {
    window.alert(input + " is odd");
} 
