document.addEventListener('DOMContentLoaded', function () {
    // Seleciona os elementos do formulário
    const usuarioInput = document.getElementById('usuario');
    const senhaInput = document.getElementById('senha');
    const loginButton = document.getElementById('loginButton');
    const inputs = document.querySelectorAll('.input');
    const button = document.querySelector('.login_button')
    let validarLogin = false;

    // Exibe um alerta com informações de login
    alert("Para acessar o dashboard, utilize: sensedata@gmail.com e zenvia123")

    // Adiciona um evento de clique ao botão de login
    loginButton.addEventListener('click', fazerLogin);

    // Função para processar o login
    function fazerLogin() {
        // Array de usuários permitidos com login e senha correspondentes
        const usuarios = [
            {
                login: 'wandersonsantos.ws51@gmail.com',
                pass: 'devsensdata',
            },
            {
                login: 'sensedata@gmail.com',
                pass: 'zenvia123',
            },
            {
                login: 'shayannefideliz.sf17@gmail.com',
                pass: 'loki12345',
            },
        ];

        // Verifica se as credenciais fornecidas coincidem com algum usuário
        for (let i = 0; i < usuarios.length; i++) {
            if (usuarioInput.value === usuarios[i].login && senhaInput.value === usuarios[i].pass) {
                localStorage.setItem('usuarioLogado', 'true'); // Armazena um valor no localStorage para indicar que o usuário está logado
                validarLogin = true;
                window.location.href = 'pages/home.html'; // Redireciona para a página home.html após o login bem-sucedido
                return;
            }
        }

        // Exibe uma mensagem de erro se as credenciais estiverem incorretas
        alert('Usuário ou senha incorretos!');
        senhaInput.value = '';
        usuarioInput.value = '';
    }
    
    // Adiciona eventos de input para validar o formulário
    usuarioInput.addEventListener('input', validarFormulario);
    senhaInput.addEventListener('input', validarFormulario);

    // Função para validar o formulário com base nos campos preenchidos
    function validarFormulario() {
        const usuario = usuarioInput.value;
        const senha = senhaInput.value;

        if (usuario && senha.length >= 8) {
            loginButton.removeAttribute('disabled'); // Habilita o botão de login se as condições forem atendidas
        } else {
            loginButton.setAttribute('disabled', ''); // Desabilita o botão de login se as condições não forem atendidas
        }
    }

    // Função para lidar com o foco nos campos de entrada
    const handleFocus = ({ target }) => {
        const span = target.previousElementSibling;
        span.classList.add('span-active'); // Adiciona uma classe para realçar o rótulo quando o campo está em foco
    }
    
    // Função para lidar com a perda de foco nos campos de entrada
    const handleFocusOut = ({ target }) => {
    
        if(target.value == '') {
            const span = target.previousElementSibling;
            span.classList.remove('span-active'); // Remove a classe que realça o rótulo quando o campo perde o foco e está vazio
        }
    }
    
    // Adiciona eventos de foco, foco perdido e entrada para todos os campos de entrada
    inputs.forEach((input) => {input.addEventListener('focus', handleFocus)});
    inputs.forEach((input) => {input.addEventListener('focusout', handleFocusOut)});
    inputs.forEach((input) => {input.addEventListener('input', handleChange)});
});
