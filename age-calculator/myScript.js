const birthYear = prompt("Enter your birth year");
const birthMonth = prompt("Enter the birth month in number");
let bool = true;
if (birthMonth <= 0 || birthMonth > 12 || birthMonth === "") {
  window.alert("Incorrect month");
  bool = false;
}
if (bool === true) {
  const futureYear = prompt("Enter a future year");
  const futureMonth = prompt("Enter the future month in number");
  if (futureMonth <= 0 || futureMonth > 12 || futureMonth === "") {
    window.alert("Incorrect month");
    bool = false;
  }
  if (bool === true) {
    let age1 = futureYear - birthYear;
    let age2 = age1 - 1;
    if (futureYear < birthYear) {
      window.alert("Futureyear is smaller");
      bool = false;
    }
    if (bool === true) {
      if (birthMonth >= futureMonth) {
        window.alert('"I will be ' + age2 + " in " + futureYear + '"');
      } else {
        window.alert('"I will be ' + age1 + " in " + futureYear + '"');
      }
    }
  }
}

/* else {
    window.alert("Invalid month");
    
}  */

/* if(birthYear > currentYear || futureYear < birthYear) {
    window.alert("Incorrect input");
}

else {
    window.alert('"I will be either ' + age2 + ' or ' + age1 + ' in ' + futureYear +'"');
}  */
