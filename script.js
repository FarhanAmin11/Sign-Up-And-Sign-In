const signupForm = document.getElementById('signupForm');
const loginForm = document.getElementById('loginForm');
const login = document.getElementById('login');
const signup = document.getElementById('signup');

login.addEventListener('click', function(event) {
  event.preventDefault();
  signupForm.style.display = 'none';
  loginForm.style.display = 'block';
});

signup.addEventListener('click', function(event) {
  event.preventDefault();
  loginForm.style.display = 'none';
  signupForm.style.display = 'block';
});