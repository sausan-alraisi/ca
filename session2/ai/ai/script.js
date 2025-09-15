function togglePassword() {
  var passwordInput = document.getElementById('passwordInput');
  var toggleButton = document.getElementById('toggleButton');

  if (!passwordInput || !toggleButton) return;

  var isHidden = passwordInput.type === 'password';
  passwordInput.type = isHidden ? 'text' : 'password';
  toggleButton.textContent = isHidden ? 'Hide' : 'Show';
} 