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



    nav-tab[0].addEventListener('click', () => {
    nav-tab.forEach((element) => element.classList.remove('current'));
    nav-tab[0].classList.add('current');
    sections.forEach((element) => element.classList.add('display'));
    sections[0].classList.remove('display');
    footer.classList.remove('display');
});
nav-tab.forEach((element) => element.classList.remove('current'));