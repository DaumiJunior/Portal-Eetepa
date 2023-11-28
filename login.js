document.addEventListener('DOMContentLoaded', function () {
    // Extrair os parâmetros da URL
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('username');

    if (username) {
        // Atualizar o conteúdo da página com base nos parâmetros da URL
        const messageElement = document.getElementById('message');
        messageElement.textContent = `Bem-vindo: ${username}`;
    }

    console.log('Código JavaScript está sendo executado!');
});

function saveFormData() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username.trim() !== '' && password.trim() !== '') {
        // Verificar se o usuário já está registrado
        const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
        const userExists = existingUsers.some(user => user.username === username);

        if (userExists) {
            const messageElement = document.getElementById('message');
            messageElement.textContent = 'Usuário já registrado. Escolha outro nome.';
        } else {
            // Adicionar novo usuário
            const newUser = { username, password };
            existingUsers.push(newUser);

            // Salvar no localStorage
            localStorage.setItem('users', JSON.stringify([{ username: 'seuNomeDeUsuario', password: 'suaSenha' }]));

            // Exibir mensagem de sucesso
            const messageElement = document.getElementById('message');
            messageElement.textContent = 'Usuário registrado com sucesso! Redirecionando...';

            // Redirecionar para a próxima página após um pequeno intervalo
            setTimeout(() => {
                window.location.href = 'quizP1.html?username=' + encodeURIComponent(username);
            }, 2000); // Redirecionar após 2 segundos (ajuste conforme necessário)
        }
    } else {
        // Exibir mensagem de erro
        const messageElement = document.getElementById('message');
        messageElement.textContent = 'Preencha os campos de login antes de prosseguir.';
    }
}