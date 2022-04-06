//Capturando os campos do formulário
let campoEmailLogin = document.getElementById('inputEmail');
let campoSenhaLogin = document.getElementById('inputSenha');
let botaoSalvar = document.getElementById('botaoSalvar');

let campoEmailLoginNormalizado;
let campoSenhaLoginNormalizado;

let emailEValido = false;

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
        campoEmailLoginNormalizado = retiraEspacosDeUmValorInformado(campoEmailLogin.value);
        campoSenhaLoginNormalizado = retiraEspacosDeUmValorInformado(campoSenhaLogin.value);

        campoEmailLoginNormalizado = converteValorRecebidoEmMinusculo(campoEmailLoginNormalizado);

        //Atribui as variáveis normalizadas ao objeto do login
        usuarioObjeto.email = campoEmailLoginNormalizado;
        usuarioObjeto.password = campoSenhaLoginNormalizado;

        console.log(usuarioObjeto);


        let loginUsuarioJson = JSON.stringify(usuarioObjeto);


        //Executar o acesso a API com o login
        let urlEndPointLogin = "https://ctd-todo-api.herokuapp.com/v1/users/login";
        let configDaRequisicao = {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: loginUsuarioJson
        }

        fetch(urlEndPointLogin, configDaRequisicao).then(
            resultado => {
                return resultado.json();
            }

        ).then(
            resultado => {
                console.log(resultado.jwt);
            }


        ).catch(
            erro => {
                console.log(erro);
            }
        );


    // Storage
    // let loginUsuarioEmJson = JSON.stringify(usuarioObjeto);
    // localStorage.setItem(1, loginUsuarioEmJson);
    //Se a validação NÃO passar, se for false o retorno da função....
    } else {
        evento.preventDefault();
        alert("Ambas as informações devem ser preenchidas");
    }

});

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
        botaoSalvar.removeAttribute('disabled')
        botaoSalvar.innerText = "Acessar"
        return true
    } else {
        botaoSalvar.setAttribute('disabled', true);
        botaoSalvar.innerText = "Acessar"
        return false
    }
}











