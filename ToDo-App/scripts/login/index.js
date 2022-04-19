window.addEventListener('load', () => {
    //Capturando os campos do formulário
    let campoEmailLogin = document.getElementById('inputEmail')
    let campoSenhaLogin = document.getElementById('inputSenha')
    let botaoSalvar = document.getElementById('botaoSalvar')
      //Capturando os campos do formulário
     
      let loginValido = [campoEmailLogin,campoSenhaLogin]
      let campoEmailLoginNormalizado;
      let campoSenhaLoginNormalizado;
  
  
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
              
      fetch(urlEndPointLogin, configDaRequisicao)
        .then(resultado => {
          if (resultado.status == 201) {
            spinner.removeSpinner()
            return resultado.json()
          }
      });
      
      })
  
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
                  if (resultado.status == 200) {
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
                  alert("Senha ou e-mail incorreto, por gentileza verifique suas credenciais e tente novamente!");     
              console.log(erro);
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
                  inputAtual.setAttribute(`data-valido`, 'true')
              } else {
                  mensagemError.innerText = "Campo obrigatório"
                  mensagemError.style.color = '#E01E1E';
                  mensagemError.style.fontSize = "8"
                  mensagemError.style.fontWeight = "bold"
                      
                  inputAtual.style.border = `1px solid #E01E1E`
                  inputAtual.setAttribute(`data-valido`, 'false')
              
                  loginEValido = false
              }   
              
              validaTelaDeLogin();
          })
      });
  
      function validaTelaDeLogin() {
          const temInputInvalido = loginValido.find(inputAtual => {
              return !inputAtual.hasAttribute(`data-valido`) || inputAtual.getAttribute(`data-valido`) === `false`
          })
  
          if (temInputInvalido) {
              botaoSalvar.setAttribute('disabled', true);
  
              return false
          } else {
              botaoSalvar.removeAttribute('disabled');
              return true
          }
      }
  
      validaTelaDeLogin()
  })
  