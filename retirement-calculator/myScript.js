function calculate() {
    const age1 = document.getElementById('age').value;
    const age2 = document.getElementById('retire-age').value;
    let yearsLeftToRetire = age2 - age1;
    let date =  new Date().getFullYear();
    const result = document.getElementById('result');
    result.innerText = "You have " + yearsLeftToRetire + " years left until you can retire." + ' Its '  + date + " , so you can retire in " + (date + yearsLeftToRetire) + "!!"; 
}