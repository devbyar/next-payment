document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const email = document.getElementById('email').value;
    const senha = document.querySelector('input[type="password"]').value;

    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const usuario = usuarios.find(usuario => usuario.email === email && usuario.senha === senha);

    if (usuario) {
        // Login bem-sucedido, redireciona para uma página de boas-vindas ou home
        alert(`Bem-vindo, ${usuario.nome}!`);
        window.location.href = "/home/byar-cafe/index.html"; // Mude para a URL desejada
    } else {
        // Login falhou
        alert('E-mail ou senha incorretos.');
    }
});
