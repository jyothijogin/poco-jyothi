// 3. Printing Quotes

const authorName = prompt("Enter Author's name");
const quote = prompt("Enter the quote");

if (authorName === "" || quote === "") {
  window.alert("Empty author or quote!!");
} else {
  window.alert(authorName + " says, " + '"' + quote + '"');
}
