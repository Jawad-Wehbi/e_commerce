const signupLink = document.querySelector('.signup-link');
const signinBlock = document.querySelector('.signin-block');
const signupBlock = document.querySelector('.signup-block');
const signupBack = document.querySelector('.signup-back');

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
