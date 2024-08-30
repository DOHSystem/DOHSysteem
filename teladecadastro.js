document.addEventListener('DOMContentLoaded', function() {
    // Implement any JavaScript functionality you need here
    // For example, handling the password visibility toggle

    const passwordInput = document.querySelector('input[name="cadastro[senha]"]');
    const showPasswordBtn = document.querySelector('.show-password-btn');

    if (showPasswordBtn) {
        showPasswordBtn.addEventListener('click', function() {
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                showPasswordBtn.textContent = 'Esconder';
            } else {
                passwordInput.type = 'password';
                showPasswordBtn.textContent = 'Mostrar';
            }
        });
    }
});