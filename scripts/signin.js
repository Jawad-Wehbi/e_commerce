const signupLink = document.querySelector('.signup-link');
const signinBlock = document.querySelector('.signin-block');
const signupBlock = document.querySelector('.signup-block');
const signupBack = document.querySelector('.signup-back');
const signinPageButton = document.getElementById('signinPageButton');
const signinEmailInput = document.querySelector('.signin-email');
const signinPasswordInput = document.querySelector('.signin-password');

// Sign up link
signupLink.addEventListener('click', () => {
	signinBlock.classList.add('display');
	signupBlock.classList.remove('display');
});

// Back arrow svg in sign up block
signupBack.addEventListener('click', () => {
	signinBlock.classList.remove('display');
	signupBlock.classList.add('display');
});

// Linking

signinPageButton.addEventListener('click', () => {
	let signinInput = { email: signinEmailInput.value, password: signinPasswordInput.value };

	axios
		.post('http://localhost/client-backend/login.php', signinInput)
		.then((res) => {
			if (res.data[0].user_type == 'client') {
				axios.post('http://localhost/client-backend/client.php', { user_id: res.data[0].id }).then((result) => {
					localStorage.setItem('userId', result.data[0].id);
					localStorage.setItem('user_name', result.data[0].client_name);
					localStorage.setItem('user_email', result.data[0].client_email);
					localStorage.setItem('user_picture', result.data[0].img);
					localStorage.setItem('carts', result.data[0].carts_id);
					window.location.href = 'index.html';
				});
			}
		})
		.catch((err) => console.log(err));
});
