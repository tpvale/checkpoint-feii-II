//Capturando os campos do formulário
let campoEmailLogin = document.getElementById('inputEmail')
let campoSenhaLogin = document.getElementById('inputSenha');
let loginValido = [campoEmailLogin,campoSenhaLogin]
let botaoSalvar = document.getElementById('botaoSalvar');
let campoEmailLoginNormalizado;
let campoSenhaLoginNormalizado;

let loginEValido = false;


//Desabilita o botão ao iniciar a página
botaoSalvar.setAttribute('disabled', true);

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
        alert('Login ou senha inválidos')
    });
    
}

//validacao login
loginValido.forEach(validacaoLogin => {
     validacaoLogin.addEventListener('keyup', function(event){
         //pegando o input que esta acontecendo o evento
         const inputAtual = event.target;
         // pegando o elemento small (ta no input, dps vai para o elemento pai --label-- dps small)
         const mensagemError = inputAtual.parentNode.querySelector(`small`)

        if (inputAtual.value != "") {
            mensagemError.innerText = ""
            inputAtual.style.border = ``
            //setando um atributo no input
            inputAtual.setAttribute(`input-valido`, 'true')
        } else {
            mensagemError.innerText = "Campo obrigatório"
            mensagemError.style.color = '#E01E1E';
            mensagemError.style.fontSize = "8"
            mensagemError.style.fontWeight = "bold"
                
            inputAtual.style.border = `1px solid #E01E1E`
            inputAtual.setAttribute(`input-valido`, 'false')
        
            loginEValido = false
        }   
        
        validaTelaDeLogin();
    })
});


function validaTelaDeLogin() {
    //regexSenhaValida = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,15}$/.test(campoSenhaLogin.value)
    const temInputInvalido = loginValido.find(inputAtual => {
        return inputAtual.getAttribute(`input-valido`) === `false`
    })

    if (temInputInvalido) {
        botaoSalvar.setAttribute('disabled', true);

        return false
    } else {
        botaoSalvar.removeAttribute('disabled');
        return true
    }
}
