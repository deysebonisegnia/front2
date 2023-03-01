/* uma forma de fazer ( document.body.style.backgroundColor = "rgb(39,39,39)";)

0utra forma de fazer  mas não funcionou

const toggle = documnet.getElementsById("toggle");
const theme = window.localStorage.getItem("theme");

if (theme === "dark") document.body.classList.add("dark");


toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
if (theme === "dark") {window.localStorage.setItem("theme", "light");
}else
 window.localStorage.setItem("theme", "dark");});*/



// essa forma funcionou dark-light

 function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }
