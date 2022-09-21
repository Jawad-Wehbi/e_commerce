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
