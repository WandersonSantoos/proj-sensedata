document.addEventListener('DOMContentLoaded', function () {
    const usuarioInput = document.getElementById('usuario');
    const senhaInput = document.getElementById('senha');
    const loginButton = document.getElementById('loginButton');
    const inputs = document.querySelectorAll('.input');
    const button = document.querySelector('.login_button')
    let validarLogin = false;

    loginButton.addEventListener('click', fazerLogin);

    function fazerLogin() {
        const usuarios = [
            {
                login: 'Wandersonsantos.ws51@gmail.com',
                pass: 'devsensdata',
            },
            {
                login: 'shayannefideliz.sf17@gmail.com',
                pass: 'loki12345',
            },
            {
                login: 'joao',
                pass: '1234',
            },
            {
                login: 'Arthur',
                pass: '1234',
            },
            {
                login: 'nancy',
                pass: '1234',
            },
            {
                login: 'julia',
                pass: '1234',
            },
            {
                login: 'admin',
                pass: 'admin',
            },
        ];


        for (let i = 0; i < usuarios.length; i++) {
            if (usuarioInput.value === usuarios[i].login && senhaInput.value === usuarios[i].pass) {
                alert('Login bem sucedido!');
                localStorage.setItem('usuarioLogado', 'true'); // Armazena um valor no localStorage
                validarLogin = true;
                window.location.href = 'home.html'; // Redireciona para a página home.html após o login bem-sucedido
                return;
            }
        }

        alert('Usuário ou senha incorretos');
        senhaInput.value = '';
        usuarioInput.value = '';
    }
    
    usuarioInput.addEventListener('input', validarFormulario);
    senhaInput.addEventListener('input', validarFormulario);

    function validarFormulario() {
        const usuario = usuarioInput.value;
        const senha = senhaInput.value;

        if (usuario && senha.length >= 8) {
            loginButton.removeAttribute('disabled');
        } else {
            loginButton.setAttribute('disabled', '');
        }
    }

    const handleFocus = ({ target }) => {
        const span = target.previousElementSibling;
        span.classList.add('span-active');
    }
    
    const handleFocusOut = ({ target }) => {
    
        if(target.value == '') {
            const span = target.previousElementSibling;
            span.classList.remove('span-active');
        }
    }
    
    inputs.forEach((input) => {input.addEventListener('focus', handleFocus)});
    
    inputs.forEach((input) => {input.addEventListener('focusout', handleFocusOut)});
    
    inputs.forEach((input) => {input.addEventListener('input', handleChange)});
    
});
