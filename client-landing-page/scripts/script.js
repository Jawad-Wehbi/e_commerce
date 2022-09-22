const product = document.querySelectorAll('.product');
const productModal = document.getElementById('productModal');
const quit = document.getElementById('quit');

// Show product modal on click
product[0].addEventListener('click', () => {
	productModal.showModal();
	document.body.style.overflow = 'hidden';
	document.body.style.userSelect = 'none';
});

// Close product modal on click
quit.addEventListener('click', () => {
	productModal.close();
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
	autoWidth: true,
	gutter: 60
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
	autoWidth: true,
	gutter: 60
});

// Ads slider
let currentIndex = 1;
displaySlides(currentIndex);

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
