// Adding Seller Modal
let modal = document.getElementById("addingSeller");

let btn = document.getElementById("add");

let span = document.getElementsByClassName("close")[0];

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
const sellersTable = document.getElementById('sellersPage');
const client = document.querySelectorAll(".client");
const statistics = document.getElementById("statistics");
const clientTable = document.getElementById("clientsPage");
const table = document.getElementById("table");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const nameIn = document.getElementById("namein");
const emaiIn = document.getElementById("emailin");
const password = document.querySelector(".Password");
const addBtn = document.getElementById("addbtn");
const sellerTable = document.getElementById("sellerTable");


document.onload = function () {
    sellersTable.classList.remove('display');
    clientTable.classList.add('display');
    table.classList.add('display');
    statistics.classList.add('display');
}


navTab[0].addEventListener('click', () => {
    sellersTable.classList.remove('display');
    clientTable.classList.add('display');
    table.classList.add('display');
    statistics.classList.add('display');
    btn1.classList.add('nav-tab-selected');
    btn2.classList.remove('nav-tab-selected');
    btn3.classList.remove('nav-tab-selected');
});

navTab[1].addEventListener('click', () => {
    sellersTable.classList.add('display');
    clientTable.classList.remove('display');
    table.classList.remove('display');
    statistics.classList.add('display');
    btn1.classList.remove('nav-tab-selected');
    btn2.classList.add('nav-tab-selected');
    btn3.classList.remove('nav-tab-selected');
});

navTab[2].addEventListener('click', () => {
    sellersTable.classList.add('display');
    clientTable.classList.add('display');
    table.classList.add('display');
    statistics.classList.remove('display');
    btn1.classList.remove('nav-tab-selected');
    btn2.classList.remove('nav-tab-selected');
    btn3.classList.add('nav-tab-selected');
});

// Saving seller data to the server

addBtn.addEventListener("click",addSeller());

// });



// Add a seller
function addSeller() {
    let addSellerInput = {name:nameIn.value ,email: emaiIn.value, password: password.value };

    axios
        .post("http://localhost/e_commerce/ecommerce-server/admin-api/add_seller.php",addSellerInput)
        .then((res) => {
            console.log(res.data);
           
        })
        .catch(error => {
            console.log(error);
        });
};

// addSeller();

function getSellers() {
    sellerTable.innerHTML="";
    axios
        .get("http://localhost/e_commerce/ecommerce-server/admin-api/get_allsellers.php")
        .then((res)=>{
            let result = res.data;
            result.forEach(element => {
                sellerTable.innerHTML+=
                    `<tr>
                        <div class="card">
                            <img src="assets/logo.png" alt="" class="image">
                            <div class="name">
                                <h2><b>${element.seller_name}</b></h2> 
                            </div>
                            <div class="cardbuttons">
                                <button class="button editbutton">Edit</button>
                                <button class="button deletebutton">Delete</button>
                            </div> 
                        </div>
                    </tr>`;
            });
            console.log(res.data);
        })

}

getSellers();
