const product = document.querySelectorAll('.product');
const productModal = document.getElementById('productModal');
const quit = document.getElementById('quit');

product[0].addEventListener('click', () => {
	productModal.showModal();
	document.body.style.overflow = 'hidden';
	document.body.style.userSelect = 'none';
});

quit.addEventListener('click', () => {
	productModal.close();
	document.body.style.overflow = 'auto';
	document.body.style.userSelect = 'auto';
});

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
