

function helloWorld(lang) {
    let header = document.getElementById('myHeader');

    switch(lang) {
        case "de" : header.innerText = "HALLO WELT!!";
                    break;

        case "it" : header.innerText = "CIAO MONDO!!";
                    break;
        
        case "fr" : header.innerText = "BONJOUR LE MONDE!!";
                    break;

        case "en" : header.innerText = "HELLO WORLD";
                    break;
        default   : break;
    }
    
}