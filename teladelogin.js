document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const nicknameInput = document.getElementById('nickname');
    const passwordInput = document.getElementById('password');
    const connectedMessage = document.getElementById('connectedMessage');
    const disconnectedMessage = document.getElementById('disconnectedMessage');
    const loadingOverlay = document.getElementById('loading-overlay');

    // Oculta o overlay de carregamento
    window.addEventListener('load', function () {
        if (loadingOverlay) {
            loadingOverlay.style.display = 'none';
        }
    });

    function showConnectedMessage() {
        connectedMessage.classList.add('show');
        disconnectedMessage.classList.remove('show');
    }

    function showDisconnectedMessage() {
        disconnectedMessage.classList.add('show');
        connectedMessage.classList.remove('show');
    }

    loginForm.addEventListener('input', function () {
        if (nicknameInput.value && passwordInput.value) {
            showConnectedMessage();
        } else {
            showDisconnectedMessage();
        }
    });

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        
        // Simular autenticação (substitua pela lógica real)
        setTimeout(() => {
            connectedMessage.classList.add('show');
            setTimeout(() => {
                connectedMessage.classList.remove('show');
            }, 2000); // Duração da mensagem de conexão
        }, 500); // Simulação de tempo de carregamento

        // Simular desconexão após 5 segundos
        setTimeout(() => {
            disconnectedMessage.classList.add('show');
            setTimeout(() => {
                disconnectedMessage.classList.remove('show');
            }, 2000); // Duração da mensagem de desconexão
        }, 5000); // Tempo até a desconexão
    });
});