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



const page =document.querySelectorAll(".page");

Foreach
