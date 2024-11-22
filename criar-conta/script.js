function validatePasswords() {
    const nome = document.querySelector('input[placeholder="Nome Completo"]').value;
    const email = document.querySelector('input[type="email"]').value;
    const senha = document.getElementById('senha').value;
    const confirmeSenha = document.getElementById('confirme-senha').value;
    const errorMessage = document.getElementById('error-message');

    // Verifica se as senhas coincidem
    if (senha !== confirmeSenha) {
        errorMessage.style.display = 'block';
        return false;
    } else {
        errorMessage.style.display = 'none';
    }

    // Verifica se o e-mail já existe no localStorage
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const emailExistente = usuarios.find(usuario => usuario.email === email);

    if (emailExistente) {
        alert('Este e-mail já está cadastrado. Tente outro.');
        return false;
    }

    // Adiciona o novo usuário no localStorage
    usuarios.push({ nome, email, senha });
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    // Redireciona para a página de login
    window.location.href = "/login/login.html";
    return false; // Impede o envio do formulário padrão
}