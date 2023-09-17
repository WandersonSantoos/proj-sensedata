// Verificar se o usuário está logado
document.addEventListener('DOMContentLoaded', function () {
    const usuarioLogado = localStorage.getItem('usuarioLogado');
    if (!usuarioLogado || usuarioLogado !== 'true') {
        // Se não estiver logado, redireciona para a página de login
        window.location.href = 'login.html'; // Redireciona para a página de login
    }
    
});