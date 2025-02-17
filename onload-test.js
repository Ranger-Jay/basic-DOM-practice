let test2 = document.createElement("p");
test2.textContent = "Hello, from the JS file. This P was dynamically created. If you see me on page, test is successful";

let container = document.getElementById("content")
container.appendChild(test2);