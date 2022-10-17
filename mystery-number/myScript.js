let mysteryNumber = getRandomArbitrary(0,30);
let input;
while((input = prompt("Guess the mystery number between 0 and 30")) != mysteryNumber) {
    if (input < mysteryNumber) {
        window.alert("Try a bigger number");
    }
    else if(input > mysteryNumber) {
        window.alert("Try a smaller number");
    }

}

window.alert("You found it!! " + mysteryNumber);

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }