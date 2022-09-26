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
const viewCategories = document.getElementById('viewCategories');
const categoryGrid = document.querySelector('.category-grid');
const newProducts = document.getElementById('newProducts');
const topProducts = document.getElementById('topProducts');
const productModalInfo = document.getElementById('productModalInfo');
const productModalButtons = document.querySelector('.product-modal-buttons');
const wishlistItems = document.querySelector('.wishlist-items');
const favouriteItems = document.querySelector('.favourites-items');
const categoryItems = document.querySelector('.category-items-grid');
const categoryElement = document.querySelectorAll('.category-background-container');
const categoriesContainer = document.querySelector('.categories-container');

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

// View all categories
axios.get('http://localhost/client-backend/view_categories.php').then((res) => {
	res.data.forEach((category) => {
		categoryGrid.innerHTML += `
			<div class="category-background-container pointer" onclick="viewCategory(${category.id})">
				<div class="category-background" style="background-image: linear-gradient(rgb(0, 0, 0, 0.3), rgb(0, 0, 0, 0.3)), url(${category.category_image});">
					<div class="category-cover">
						<h3  class="bold white-font">${category.category_name}</h3>
						<div class="shop-now flex white-font">
							<h4>Shop now</h4>
							<span class="material-symbols-outlined md18 pointer">
								arrow_circle_right
							</span>
						</div>
					</div>
				</div>
			</div> `;
	});
});

viewCategories.addEventListener('click', () => {
	navItems.forEach((element) => element.classList.remove('current'));
	navItems[1].classList.add('current');
	sections.forEach((element) => element.classList.add('display'));
	sections[1].classList.remove('display');
});

// Fetch new products
axios.get('http://localhost/client-backend/new_products.php').then((res) => {
	res.data.forEach((product) => {
		newProducts.innerHTML += `
			<!-- Product -->
			<div class="product-container" >
				<div class="product pointer">
				    <div  onclick="showProduct(${product.id})">
					    <!-- Product image -->
					    <div class="product-image-container flex">
					    	<img src="${product.image}" alt="product" class="product-image">
					    </div>
					    <!-- Product category -->
					    <h4 class="product-category">${product.category_name}</h4>
					    <!-- Product name -->
					    <h3 class="product-name">${product.product_name}</h3>
					    <!-- Product price -->
					    <h3 class="price">${product.price}</h3>
					</div>
					
					<!-- Product favourites / wishlist icons -->
					<div class="product-icons flex">
						<!-- Favourites -->
						<div onclick="addFavourite(${product.id})">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="favourites pointer"><path fill="#001743" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
						</div>
						
						<!-- Wishlist -->
						<div onclick="addWishlist(${product.id})">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="wishlist-product" ><path fill="#001743" d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>
						</div>
					</div>
				</div>
			</div>`;
	});
	// New items slider
	const slider = tns({
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
});

// Fetch top selling products
axios.get('http://localhost/client-backend/top-selling.php').then((res) => {
	res.data.forEach((product) => {
		topProducts.innerHTML += `
		<!-- Product -->
		<div class="product-container" >
			<div class="product pointer">
				<div  onclick="showProduct(${product.id})">
					<!-- Product image -->
					<div class="product-image-container flex">
						<img src="${product.image}" alt="product" class="product-image">
					</div>
					<!-- Product category -->
					<h4 class="product-category">${product.category_name}</h4>
					<!-- Product name -->
					<h3 class="product-name">${product.product_name}</h3>
					<!-- Product price -->
					<h3 class="price">${product.price}</h3>
				</div>
				
				<!-- Product favourites / wishlist icons -->
				<div class="product-icons flex">
					<!-- Favourites -->
					<div onclick="addFavourite(${product.id})">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="favourites pointer"><path fill="#001743" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
					</div>
					
					<!-- Wishlist -->
					<div onclick="addWishlist(${product.id})">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="wishlist-product" ><path fill="#001743" d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>
					</div>
				</div>
			</div>
		</div>`;
	});
	// Top selling slider
	const topSellingSlider = tns({
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
});

// Show product info
function showProduct(id) {
	let productId = { product_id: id };
	axios.post('http://localhost/client-backend/view_product.php', productId).then((res) => {
		productModalInfo.innerHTML = `<img src="${res.data[0].image}" alt="product image" class="product-modal-image">
		<div class="product-details">
			<p class="product-modal-name bold">${res.data[0].product_name}</p>
			<p class="product-modal-category">${res.data[0].category_name}</p>
			<p class="product-modal-price bold">${res.data[0].price}</p>
			<p class="product-modal-description">${res.data[0].description}</p>
		</div>`;
		productModalButtons.innerHTML = `
            <button type="button" class="wishlist-modal-button button" onclick="addWishlist(${id})">Add to wishlist</button>
            <button type="button" class="contact-modal-button button">
                Contact seller
            </button>
			<button type="button" class="cart-modal-button button" onclick="addToCart(${id})">Add to cart</button>`;
		productModal.showModal();
		document.body.style.overflow = 'hidden';
		document.body.style.userSelect = 'none';
	});
}

// Add wishlist from product
function addWishlist(id) {
	let user = localStorage.userId;
	let productId = { products_id: id, client_user_id: user };
	axios.post('http://localhost/client-backend/add_to_wishlist.php', productId).then((res) => {
		console.log(res.data);
	});
}

// View Wishlist
axios.post('http://localhost/client-backend/view_wishlist.php', { client_user_id: localStorage.userId }).then((res) => {
	console.log(res.data);
	res.data.forEach((product) => {
		let id = { product_id: product.products_id };
		let id2 = product.products_id;
		axios.post('http://localhost/client-backend/view_product.php', id).then((res2) => {
			console.log(res2.data);
			wishlistItems.innerHTML += `
		<!-- Product -->
		<div class="product-container" >
			<div class="wishlist-body-product pointer">
				<div  onclick="showProduct(${id2})">
					<!-- Product image -->
					<div class="product-image-container flex">
						<img src="${res2.data[0].image}" alt="product" class="product-image">
					</div>
					<!-- Product category -->
					<h4 class="product-category">${res2.data[0].category_name}</h4>
					<!-- Product name -->
					<h3 class="product-name">${res2.data[0].product_name}</h3>
					<!-- Product price -->
					<h3 class="price">${res2.data[0].price}</h3>
				</div>
				
				<!-- Product favourites / wishlist icons -->
				<div class="product-icons flex">
					<!-- Favourites -->
					<div onclick="addFavourite(${id2})">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="favourites pointer"><path fill="#001743" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
					</div>
					
					<!-- Wishlist -->
					<div onclick="addWishlist(${id2})">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="wishlist-product" ><path fill="#001743" d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>
					</div>
				</div>
			</div>
		</div>`;
		});
	});
});

// View Favourites
axios
	.post('http://localhost/client-backend/view_favourite.php', { client_user_id: localStorage.userId })
	.then((res) => {
		console.log(res.data);
		res.data.forEach((product) => {
			let id = { product_id: product.product_id };
			let id2 = product.product_id;
			axios.post('http://localhost/client-backend/view_product.php', id).then((res2) => {
				favouriteItems.innerHTML += `
				<!-- Product -->
				<div class="product-container" >
					<div class="product pointer">
						<div  onclick="showProduct(${id2})">
							<!-- Product image -->
							<div class="product-image-container flex">
								<img src="${res2.data[0].image}" alt="product" class="product-image">
							</div>
							<!-- Product category -->
							<h4 class="product-category">${res2.data[0].category_name}</h4>
							<!-- Product name -->
							<h3 class="product-name">${res2.data[0].product_name}</h3>
							<!-- Product price -->
							<h3 class="price">${res2.data[0].price}</h3>
						</div>

						<!-- Product favourites / wishlist icons -->
						<div class="product-icons flex">
							<!-- Favourites -->
							<div onclick="addFavourite(${id2})">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="favourites pointer"><path fill="#001743" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
							</div>

							<!-- Wishlist -->
							<div onclick="addWishlist(${id2})">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="wishlist-product" ><path fill="#001743" d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>
							</div>
						</div>
					</div>
				</div>`;
			});
		});
	});

// Add favourite
function addFavourite(id) {
	let user = localStorage.userId;
	let productId = { products_id: id, client_user_id: user };
	axios.post('http://localhost/client-backend/add_favourite.php', productId).then((res) => {
		console.log(res.data);
	});
}

// View products inside a category
function viewCategory(id, category1) {
	let categoryId = { categories_id: id };
	axios.post('http://localhost/client-backend/view_category.php', categoryId).then((res) => {
		categoryItems.innerHTML = '';
		res.data.forEach((product) => {
			categoryItems.innerHTML += `
		<!-- Product -->
		<div class="product-container" >
			<div class="wishlist-body-product pointer">
				<div  onclick="showProduct(${product.id})">
					<!-- Product image -->
					<div class="product-image-container flex">
						<img src="${product.image}" alt="product" class="product-image">
					</div>
					<!-- Product name -->
					<h3 class="product-name">${product.product_name}</h3>
					<!-- Product price -->
					<h3 class="price">${product.price}</h3>
				</div>
				
				<!-- Product favourites / wishlist icons -->
				<div class="product-icons flex">
					<!-- Favourites -->
					<div onclick="addFavourite(${product.id})">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="favourites pointer"><path fill="#001743" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
					</div>
					
					<!-- Wishlist -->
					<div onclick="addWishlist(${product.id})">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="wishlist-product" ><path fill="#001743" d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>
					</div>
				</div>
			</div>
		</div>`;
		});
		navItems.forEach((element) => element.classList.remove('current'));
		sections.forEach((element) => element.classList.add('display'));
		sections[8].classList.remove('display');
	});
}

// Add to cart
function addToCart(id) {
	let cart = { cart_id: localStorage.carts, product_id: id };
	axios.post('http://localhost/client-backend/add_to_cart.php', cart).then((res) => {
		console.log(localStorage.carts);
		console.log(res.data);
	});
}

// Main page categories
axios.get('http://localhost/client-backend/view_categories.php').then((res) => {
	for (i = 0; i < 3; i++) {
		let category = res.data[i];
		categoriesContainer.innerHTML += `
			<div class="category-background-container pointer" onclick="viewCategory(${category.id})">
				<div class="category-background" style="background-image: linear-gradient(rgb(0, 0, 0, 0.3), rgb(0, 0, 0, 0.3)), url(${category.category_image});">
					<div class="category-cover">
						<h3  class="bold white-font">${category.category_name}</h3>
						<div class="shop-now flex white-font">
							<h4>Shop now</h4>
							<span class="material-symbols-outlined md18 pointer">
								arrow_circle_right
							</span>
						</div>
					</div>
				</div>
			</div> `;
	}
});
