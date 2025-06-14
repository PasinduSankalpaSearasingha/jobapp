const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
  container.classList.remove("right-panel-active");
});

// Optional: Form handling (basic)
document.getElementById('signUpForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Signed Up Successfully!');
});

document.getElementById('signInForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Signed In Successfully!');
});
