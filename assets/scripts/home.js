// Verificar se o usuário está logado
document.addEventListener('DOMContentLoaded', function () {
    const usuarioLogado = localStorage.getItem('usuarioLogado');
    if (!usuarioLogado || usuarioLogado !== 'true') {
        // Se não estiver logado, redireciona para a página de login
        window.location.href = 'login.html'; // Redireciona para a página de login
    }
});

const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");

// Mostrar a barra lateral ao clicar
menuBtn.addEventListener('click', () => {
    sideMenu.style.display = "block";
})

// esconder a barra lateral ao clicar
closeBtn.addEventListener('click', () => {
    sideMenu.style.display = "none";
})

// Mudar o tema ao clicar
themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables')

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active')
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active')
})