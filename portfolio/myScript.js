// displaying skills, education and experience bar

var tabLinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-contents");

function openTab(tabName) {
    for (tabLink of tabLinks) {
        tabLink.classList.remove("active-link");
    }

    for (tabContent of tabContents) {
        tabContent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabName).classList.add("active-tab");     
}
 // For mobile phone screens toggle the menu bar
let sideMenu = document.getElementById("sidemenu");

function openMenu() {
    sideMenu.style.right = "0";
}

function closeMenu() {
    sideMenu.style.right = "-200px";
}

// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
//script to send the contact form details to google sheets

const scriptURL = 'https://script.google.com/macros/s/AKfycbxOe-cZB_2eatThGOjdvw4CarJ7MR5pliucCCG_SIT6iva9qlIyhnX5R2bR7cZlMRylig/exec';
  const form = document.forms['submit-to-google-sheet'];
  const msg=document.getElementById("successMsg");
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML ="Message sent successfully";
        setTimeout(function() {
          msg.innerHTML = "";
        },4000)
        form.reset();
      })
      .catch(error => console.error('Error!', error.message))
  })

  
