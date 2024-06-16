const f_email = document.querySelector("#f_email");
const f_senha = document.querySelector("#f_senha");
const btn_login = document.querySelector("#btn_login");


btn_login.addEventListener('click', function () {

    var email = document.getElementById('f_email').value;
    var senha = document.getElementById('f_senha').value;

    //DADOS DE LOGIN
    
    if (email === 'ads@impacta.com' && senha === 'teste') {
        window.location.href = 'almoxarifado.html';
    } else {
        alert('Email ou senha incorretos. Por favor, tente novamente.');
    }
});
