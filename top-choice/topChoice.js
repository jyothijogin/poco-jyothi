var favFood = ["Biryani", "Butter Chicken", "Egg Roast", "Pizza", "Pasta", "Noodles"];
var choice = 1;
var symbols = ["st", "nd", "rd", "th"];
for (i = 0,j=0; i < favFood.length; i++) {
    if(choice > 4)
        j--;
  console.log("My " + choice++ + symbols[j++] + " choice is " + favFood[i]);
}
