window.addEventListener('load', () => {

//Capturando os campos do formulário
let campoEmailLogin = document.getElementById('inputEmail');
let campoSenhaLogin = document.getElementById('inputSenha');
let botaoSalvar = document.getElementById('botaoSalvar');

let campoEmailLoginNormalizado;
let campoSenhaLoginNormalizado;

let emailEValido = false;
let senhaEValido = false;

//Desabilita o botão ao iniciar a página
botaoSalvar.setAttribute('disabled', true);
botaoSalvar.innerText = "Acessar"

//Cria o objeto que representa o login do usuário
const usuarioObjeto = {
    email: "",
    password: ""
}

//Executa ao clicar no botão de Acessar
botaoSalvar.addEventListener('click', function (evento) {

    //Se a validação passar, se for true o retorno da função....
    if (validaTelaDeLogin()) {
        //Normalizando - Retirando os espaços em branco
        evento.preventDefault();
        campoEmailLoginNormalizado = retiraEspacosDeUmValorInformado(campoEmailLogin.value);
        campoSenhaLoginNormalizado = retiraEspacosDeUmValorInformado(campoSenhaLogin.value);

        campoEmailLoginNormalizado = converteValorRecebidoEmMinusculo(campoEmailLoginNormalizado);

        //Atribui as variáveis normalizadas ao objeto do login
        usuarioObjeto.email = campoEmailLoginNormalizado;
        usuarioObjeto.password = campoSenhaLoginNormalizado;
        let loginUsuarioJson = JSON.stringify(usuarioObjeto);
        login(loginUsuarioJson);
    } else {
        evento.preventDefault();
        alert("Ambas as informações devem ser preenchidas");
        
    }
});


function login(loginUsuarioJson) {
    //Funcao do Spinner
    setTimeout(spinner.showSpinner(), 1000);
    //Executar o acesso a API com o login
    let urlEndPointLogin = "https://ctd-todo-api.herokuapp.com/v1/users/login";
    let configDaRequisicao = {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: loginUsuarioJson
    }

    fetch(urlEndPointLogin, configDaRequisicao)
    .then(
        resultado => {
            if (resultado.status == 201) {
            return resultado.json();
        } else {
            spinner.removeSpinner();
        }
        throw resultado;
    }).then(
        resultado => {
            console.log(resultado.jwt);
            sessionStorage.setItem("jwt", resultado.jwt);
            location.href = "tarefas.html";
    }).catch(
        erro => {
        console.log(erro);
        alert("Senha ou e-mail incorreto, por gentileza verifique suas credenciais e tente novamente!");
    });

}
// TO-DO criar funções para sucesso e erro de login


//Ao clicar e interagir com o campo de "email" no formulário
campoEmailLogin.addEventListener('blur', function () {
    //Capturando o elemento <Small> do html
    let emailValidacao = document.getElementById('emailValidacao');

    if (campoEmailLogin.value != "") {
        //Email tem informação
        emailValidacao.innerText = ""
        campoEmailLogin.style.border = ``
        emailEValido = true;
    } else {
        //Email está vazio
        emailValidacao.innerText = "Campo obrigatório"
        emailValidacao.style.color = "#E01E1E"
        emailValidacao.style.fontSize = "8"
        emailValidacao.style.fontWeight = "bold"
        campoEmailLogin.style.border = `1px solid #E01E1E`
        emailEValido = false;
    }
    validaTelaDeLogin();
});

campoSenhaLogin.addEventListener('blur', function() {
    let senhaValidacao = document.getElementById('senhaValidacao');

    if (campoSenhaLogin.value != "") {
        //Senha tem informação
        senhaValidacao.innerText = ""
        campoSenhaLogin.style.border = ``
        senhaEValido = true;
    } else {
        //Senha está vazio
        senhaValidacao.innerText = "Campo obrigatório"
        senhaValidacao.style.color = "#E01E1E"
        senhaValidacao.style.fontSize = "8"
        senhaValidacao.style.fontWeight = "bold"
        campoSenhaLogin.style.border = `1px solid #E01E1E`
        senhaEValido = false;
    }
    validaTelaDeLogin();
});

function validaTelaDeLogin() {
    if (emailEValido && senhaEValido) {
        botaoSalvar.removeAttribute('disabled');
        botaoSalvar.innerText = "Acessar"
        return true
    } else {
        botaoSalvar.setAttribute('disabled', true);
        botaoSalvar.innerText = "Acessar"
        return false
    }
}
})


