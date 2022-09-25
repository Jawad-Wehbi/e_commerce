// Adding Seller Modal
var modal = document.getElementById("addingSeller");

var btn = document.getElementById("add");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}

const navTab=document.querySelectorall(".nav-tab");
const sections=document.querySelectorall(".page");
navTab.forEach((element) => {
    element.addEventListener('click', () => {
    sections.forEach((element) => element.classList.add('display'));
    sections[0].classList.remove('display');

});

});