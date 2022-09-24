const signupLink = document.querySelector('.signup-link');
const signinBlock = document.querySelector('.signin-block');
const signupBlock = document.querySelector('.signup-block');
const signupBack = document.querySelector('.signup-back');

// Sign up link inside Sign in page
signupLink.addEventListener('click', () => {
	signinBlock.classList.add('display');
	signupBlock.classList.remove('display');
});

signupBack.addEventListener('click', () => {
	signinBlock.classList.remove('display');
	signupBlock.classList.add('display');
});
