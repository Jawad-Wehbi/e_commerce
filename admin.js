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

console.log('test');

const navTab = document.querySelectorAll(".nav-tab");
const sellersTable = document.getElementById('sellersTable');
const client = document.querySelectorAll(".client");
const statistics = document.getElementById("statistics");
const clientTable = document.getElementById("clientsTable");
const table = document.getElementById("table");
/* navTab.forEach((element) => {
    element.addEventListener('click', () => {
    sections.forEach((element) => element.classList.add('display'));
    sections[0].classList.remove('display');
 */

document.onload = function () {
    sellersTable.classList.remove('display');
    clientTable.classList.add('display');
    table.classList.add('display');
    statistics.classList.add('display');
}

// $(window).load(function() {
//     sellersTable.classList.remove('display');
//     clientTable.classList.add('display');
//     table.classList.add('display');
//     statistics.classList.add('display');
// });

navTab[0].addEventListener('click', () => {
    sellersTable.classList.remove('display');
    clientTable.classList.add('display');
    table.classList.add('display');
    statistics.classList.add('display');
});

navTab[1].addEventListener('click', () => {
    sellersTable.classList.add('display');
    clientTable.classList.remove('display');
    table.classList.remove('display');
    statistics.classList.add('display');
});

navTab[2].addEventListener('click', () => {
    sellersTable.classList.add('display');
    clientTable.classList.add('display');
    table.classList.add('display');
    statistics.classList.remove('display');
});

// });
/* const navTab=document.querySelectorall(".nav-tab");
const sections=document.querySelectorall(".page");
navTab.forEach((element) => {
    element.addEventListener('click', () => { */
