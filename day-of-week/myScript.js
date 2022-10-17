function functionDay() {
  const input = document.getElementById("day");
  switch (input.value.toLowerCase()) {
    case "monday":
      document.getElementById("resultLabel").innerHTML = "Montag";
      break;
    case "tuesday":
      document.getElementById("resultLabel").innerHTML = "Dienstag";
      break;
    case "wednesday":
      document.getElementById("resultLabel").innerHTML = "Mittwoch";
      break;
    case "thursday":
      document.getElementById("resultLabel").innerHTML = "Donnerstag";
      break;
    case "friday":
      document.getElementById("resultLabel").innerHTML = "Freitag";
      break;
    case "saturday":
      document.getElementById("resultLabel").innerHTML = "Samstag";
      break;
    case "sunday":
      document.getElementById("resultLabel").innerHTML = "Sonntag";
      break;
    default:
      document.getElementById("resultLabel").innerHTML = "Incorrect Input";
  }
}
