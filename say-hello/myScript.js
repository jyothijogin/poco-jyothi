
// 1. Say Hello

/* let greeting = "Hello ";
const name = prompt("Enter name");
if(name == "" || name == null) {
    console.log("Please enter valid name");
}
else {
    console.log(greeting + name);
}
 */

let topics = ["html", "css", "javascript","java"];
topics.push("python");
topics.pop();
topics = topics.concat("typescript");
topics.splice(2,1,"hibernate","spring");

document.body.textContent = "Hello";
let str = topics.toString();
console.log(str[5]);



for(i=0; i<topics.length; i++) {

    console.log(topics[i]);
    
}

console.log(topics.sort().toString());


