// Product modal
const product = document.querySelectorAll('.product');
const productModal = document.getElementById('productModal');
const productQuit = document.getElementById('productQuit');

// Voucher modal
const voucherModal = document.querySelector('.voucher-modal');
const sendVoucher = document.querySelector('.send-voucher');
const voucherQuit = document.getElementById('voucherQuit');

// Nav elements and body sections
const navItems = document.querySelectorAll('.nav-items-element');
const sections = document.querySelectorAll('.section');
const footer = document.querySelector('.footer');
const nav = document.querySelector('.nav-items');
/* const home = document.getElementById('home');
const categories = document.getElementById('categories');
const favourites = document.getElementById('favourites');
const wishlist = document.getElementById('wishlist');
const cart = document.getElementById('cart');
const chatPage = document.getElementById('chatPage');
const account = document.getElementById('accout');
const wishlistIcon = document.getElementById('wishlistIcon');
const cartIcon = document.getElementById('cartIcon'); */

// Buttons and inputs
const chatContainer = document.querySelector('.chat-container');
const wishlistIcon = document.getElementById('wishlistIcon');
const cartIcon = document.getElementById('cartIcon');
const signinButton = document.getElementById('signinButton');
const searchButton = document.getElementById('searchButton');
const searchInput = document.getElementById('searchInput');
const searchIcon = document.querySelector('.search-icon');
const searchForm = document.querySelector('.search-form');
const hamburger = document.querySelector('.hamburger');
const chatHamburger = document.querySelector('.chat-hamburger');

const chatUser = document.querySelectorAll('.user-chat-element');
const usersBlock = document.querySelector('.chat-users');
const mainChat = document.querySelector('.main-chat');

const accountName = document.getElementById('accountName');
const accountEmail = document.getElementById('accountEmail');
const adsContainer = document.getElementById('adsContainer');

window.onload = () => {
	accountName.value = localStorage.user_name;
	accountEmail.value = localStorage.user_email;
};

// Show product modal on click
product[0].addEventListener('click', () => {
	productModal.showModal();
	document.body.style.overflow = 'hidden';
	document.body.style.userSelect = 'none';
});

// Close product modal on click
productQuit.addEventListener('click', () => {
	productModal.close();
	document.body.style.overflow = 'auto';
	document.body.style.userSelect = 'auto';
});

// Show voucher modal
sendVoucher.addEventListener('click', () => {
	voucherModal.showModal();
	document.body.style.overflow = 'hidden';
	document.body.style.userSelect = 'none';
});

// Close voucher modal on click
voucherQuit.addEventListener('click', () => {
	voucherModal.close();
	document.body.style.overflow = 'auto';
	document.body.style.userSelect = 'auto';
});

// New items slider
let slider = tns({
	container: '.new-products',
	slideBy: 1,
	speed: 400,
	nav: false,
	controlsContainer: '#newProductsControls',
	prevButton: '.product-right',
	nextButton: '.product-left',
	gutter: 10,
	responsive: {
		1480: {
			items: 5
		},
		1200: {
			items: 4
		},
		930: {
			items: 3
		},
		670: {
			items: 2
		},
		250: {
			items: 1
		}
	}
});

// Top selling slider
let topSellingSlider = tns({
	container: '.top-products',
	slideBy: 1,
	speed: 400,
	nav: false,
	controlsContainer: '#topSellingControl',
	prevButton: '.top-product-right',
	nextButton: '.top-product-left',
	gutter: 10,
	responsive: {
		1480: {
			items: 5
		},
		1200: {
			items: 4
		},
		930: {
			items: 3
		},
		670: {
			items: 2
		},
		250: {
			items: 1
		}
	}
});

// Ads slider
currentIndex = 1;
function setSlides(num) {
	displaySlides((currentIndex += num));
}

function displaySlides(num) {
	let x;
	const slides = document.getElementsByClassName('ad-slides');
	if (num > slides.length) {
		currentIndex = 1;
	}
	if (num < 1) {
		currentIndex = slides.length;
	}
	for (x = 0; x < slides.length; x++) {
		slides[x].style.display = 'none';
	}
	slides[currentIndex - 1].style.display = 'block';
}

// Home
navItems[0].addEventListener('click', () => {
	navItems.forEach((element) => element.classList.remove('current'));
	navItems[0].classList.add('current');
	sections.forEach((element) => element.classList.add('display'));
	sections[0].classList.remove('display');
	footer.classList.remove('display');
});

// Categories
navItems[1].addEventListener('click', () => {
	navItems.forEach((element) => element.classList.remove('current'));
	navItems[1].classList.add('current');
	sections.forEach((element) => element.classList.add('display'));
	sections[1].classList.remove('display');
	footer.classList.remove('display');
});

// Wishlist
navItems[2].addEventListener('click', () => {
	navItems.forEach((element) => element.classList.remove('current'));
	navItems[2].classList.add('current');
	sections.forEach((element) => element.classList.add('display'));
	sections[2].classList.remove('display');
	footer.classList.remove('display');
});

// Favourites
navItems[3].addEventListener('click', () => {
	navItems.forEach((element) => element.classList.remove('current'));
	navItems[3].classList.add('current');
	sections.forEach((element) => element.classList.add('display'));
	sections[3].classList.remove('display');
	footer.classList.remove('display');
});

// Cart
navItems[4].addEventListener('click', () => {
	navItems.forEach((element) => element.classList.remove('current'));
	navItems[4].classList.add('current');
	sections.forEach((element) => element.classList.add('display'));
	sections[4].classList.remove('display');
	footer.classList.remove('display');
});

// Chat Page
navItems[5].addEventListener('click', () => {
	navItems.forEach((element) => element.classList.remove('current'));
	navItems[5].classList.add('current');
	sections.forEach((element) => element.classList.add('display'));
	sections[5].classList.remove('display');
	chatContainer.scrollTop = chatContainer.scrollHeight;
	footer.classList.add('display');
});

// Account
navItems[6].addEventListener('click', () => {
	navItems.forEach((element) => element.classList.remove('current'));
	navItems[6].classList.add('current');
	sections.forEach((element) => element.classList.add('display'));
	sections[6].classList.remove('display');
	footer.classList.remove('display');
});

// Wishlist header icon
wishlistIcon.addEventListener('click', () => {
	navItems.forEach((element) => element.classList.remove('current'));
	navItems[2].classList.add('current');
	sections.forEach((element) => element.classList.add('display'));
	sections[2].classList.remove('display');
	footer.classList.remove('display');
});

// Cart header icon
cartIcon.addEventListener('click', () => {
	navItems.forEach((element) => element.classList.remove('current'));
	navItems[4].classList.add('current');
	sections.forEach((element) => element.classList.add('display'));
	sections[4].classList.remove('display');
	footer.classList.remove('display');
});

// Search button
searchButton.addEventListener('click', () => {
	if (searchInput.value) {
		navItems.forEach((element) => element.classList.remove('current'));
		sections.forEach((element) => element.classList.add('display'));
		sections[7].classList.remove('display');
		footer.classList.remove('display');
	}
});

// Sign in Button
signinButton.addEventListener('click', () => {
	window.location.href = 'signin.html';
});

// Search icon on small screens
searchIcon.addEventListener('click', () => {
	wishlistIcon.classList.toggle('display');
	cartIcon.classList.toggle('display');
	if (searchForm.style.display != 'flex') {
		searchForm.style.display = 'flex';
	} else if (searchForm.style.display == 'flex') {
		searchForm.style.display = 'none';
	}
	searchButton.classList.toggle('display');
});

// Hamburger menu
hamburger.addEventListener('click', () => {
	nav.classList.toggle('active');
	sendVoucher.classList.toggle('active');
});

// Chat hamburger
chatHamburger.addEventListener('click', () => {
	chatUser.forEach((user) => user.classList.toggle('active'));
	usersBlock.classList.toggle('active');
	mainChat.classList.toggle('active');
});

// Fetch ads
axios.get('http://localhost/client-backend/ads.php').then((res) => {
	res.data.forEach((ad) => {
		adsContainer.innerHTML += `
			<div class="ad-slides fade">
				<img src="${ad.ad_image}" class="ad">
			</div>`;
	});
	let currentIndex = 1;
	displaySlides(currentIndex);

	function displaySlides(num) {
		let x;
		const slides = document.getElementsByClassName('ad-slides');
		if (num > slides.length) {
			currentIndex = 1;
		}
		if (num < 1) {
			currentIndex = slides.length;
		}
		for (x = 0; x < slides.length; x++) {
			slides[x].style.display = 'none';
		}
		slides[currentIndex - 1].style.display = 'block';
	}
});
