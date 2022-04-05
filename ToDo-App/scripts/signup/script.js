// VALIDAÇÃO TODOS OS CAMPOS

//Capturando os campos do formulário
var campoNomeCadastro = document.getElementById('inNome')
var campoApelidoCadastro = document.getElementById('inApelido')
var campoEmailCadastro = document.getElementById('inEmail')
var botaoCriarConta = document.getElementById('btSignup')
// var senha = document.getElementById('senha') LA EMBAIXO
// var conferirSenha = document.getElementById('conferirSenha') LA EMBAIXO

// Normalizando campos do formulario
let campoNomeCadastroNormalizado
let campoApelidoCadastroNormalizado
let campoEmailCadastroNormalizado
let campoSenhaCadastroNormalizado
let campoRepetirSenhaCadastroNormalizado

// Criando variaveis definindo como false de inicio para validar
let nomeCadastroEValido = false
let apelidoCadastroEValido = false
let emailCadastroEValido = false
// let senhaCadastroEValido = false
repetirSenhaCadastroEValido = false

//Desabilita o botão ao iniciar a página
botaoCriarConta.setAttribute('disabled', true)
botaoCriarConta.style.background = 'gray'

//Cria o objeto que representa o cadastro do usuário
const criacaoUsuario = {
  nome: '',
  apelido: '',
  email: '',
  senha: '',
  repetirSenha: ''
}

//Executa ao clicar no botão de Cadastrar
botaoCriarConta.addEventListener('click', function (evento) {
  //Se a validação passar, se for true o retorno da função....
  if (validacaoTelaCadastro()) {
    campoNomeCadastroNormalizado = retiraEspacosDeUmValorInformado(
      campoNomeCadastro.value
    )
    campoApelidoCadastroNormalizado = retiraEspacosDeUmValorInformado(
      campoApelidoCadastro.value
    )

    campoEmailCadastroNormalizado = retiraEspacosDeUmValorInformado(
      campoEmailCadastro.value
    )
    campoEmailCadastroNormalizado =
      converteValorRecebidoEmMinusculo(campoEmailCadastro)

    campoSenhaCadastroNormalizado = campoSenhaCadastroNormalizado.value

    campoRepetirSenhaCadastroNormalizado =
      campoRepetirSenhaCadastroNormalizado.value

    //Atribui as variáveis normalizadas ao objeto do login
    criacaoUsuario.nome = campoNomeCadastroNormalizado
    criacaoUsuario.apelido = campoApelidoCadastroNormalizado
    criacaoUsuario.email = campoEmailCadastroNormalizado
    criacaoUsuario.senha = campoRepetirSenhaCadastroNormalizado
    criacaoUsuario.repetirSenha = campoRepetirSenhaCadastroNormalizado

    //Se a validação NÃO passar, se for false o retorno da função....
  } else {
    evento.preventDefault()
    alert('Todas as informações devem ser preenchidas')
  }
})

//Ao clicar e interagir com campo NOME do cadastro
campoNomeCadastro.addEventListener('blur', function () {
  //Capturando o elemento <Small> do html
  var nomeValidacaoCadastro = document.getElementById('nomeValidacaoCadastro')

  if (campoNomeCadastro.value != '') {
    //Nome tem informação
    nomeValidacaoCadastro.innerText = ''
    campoNomeCadastro.style.border = ``
    nomeCadastroEValido = true
  } else {
    //Nome está vazio
    nomeValidacaoCadastro.innerText = 'Campo obrigatório'
    nomeValidacaoCadastro.style.color = 'rgba(255, 0, 0, 0.75)'
    nomeValidacaoCadastro.style.fontSize = '8'
    nomeValidacaoCadastro.style.fontWeight = 'bold'
    campoNomeCadastro.style.border = `1px solid rgba(255, 0, 0, 0.75)`
    nomeCadastroEValido = false
  }
  validacaoTelaCadastro()
})

//Ao clicar e interagir com campo APELIDO do cadastro
campoApelidoCadastro.addEventListener('blur', function () {
  //Capturando o elemento <Small> do html
  var apelidoValidacaoCadastro = document.getElementById(
    'apelidoValidacaoCadastro'
  )

  if (campoApelidoCadastro.value != '') {
    //Apelido tem informação
    apelidoValidacaoCadastro.innerText = ''
    campoApelidoCadastro.style.border = ``
    apelidoCadastroEValido = true
  } else {
    //Apelido está vazio
    apelidoValidacaoCadastro.innerText = 'Campo obrigatório'
    apelidoValidacaoCadastro.style.color = 'rgba(255, 0, 0, 0.75)'
    apelidoValidacaoCadastro.style.fontSize = '8'
    apelidoValidacaoCadastro.style.fontWeight = 'bold'
    campoApelidoCadastro.style.border = `1px solid rgba(255, 0, 0, 0.75)`
    apelidoCadastroEValido = false
  }
  validacaoTelaCadastro()
})

//Ao clicar e interagir com campo EMAIL do cadastro
campoEmailCadastro.addEventListener('blur', function () {
  //Capturando o elemento <Small> do html
  var emailValidacaoCadastro = document.getElementById('emailValidacaoCadastro')

  if (campoEmailCadastro.value != '') {
    //Email tem informação
    emailValidacaoCadastro.innerText = ''
    campoEmailCadastro.style.border = ``
    emailCadastroEValido = true
  } else {
    //Email está vazio
    emailValidacaoCadastro.innerText = 'Campo obrigatório'
    emailValidacaoCadastro.style.color = 'rgba(255, 0, 0, 0.75)'
    emailValidacaoCadastro.style.fontSize = '8'
    emailValidacaoCadastro.style.fontWeight = 'bold'
    campoEmailCadastro.style.border = `1px solid rgba(255, 0, 0, 0.75)`
    emailCadastroEValido = false
  }
  validacaoTelaCadastro()
})

campoEmailCadastro.addEventListener('blur', function () {
  //Capturando o elemento <Small> do html
  var emailValidacaoCadastro = document.getElementById('emailValidacaoCadastro')

  if (campoEmailCadastro.value != '') {
    //Email tem informação
    emailValidacaoCadastro.innerText = ''
    campoEmailCadastro.style.border = ``
    emailCadastroEValido = true
  } else {
    //Email está vazio
    emailValidacaoCadastro.innerText = 'Campo obrigatório'
    emailValidacaoCadastro.style.color = 'rgba(255, 0, 0, 0.75)'
    emailValidacaoCadastro.style.fontSize = '8'
    emailValidacaoCadastro.style.fontWeight = 'bold'
    campoEmailCadastro.style.border = `1px solid rgba(255, 0, 0, 0.75)`
    emailCadastroEValido = false
  }
  validacaoTelaCadastro()
})

/////////////////////////////////////////////////////////////////////////////////////////////////////////

// VALIDAÇÃO SENHA

var campoSenhaCadastro = document.getElementById('senha')
var letraMin = document.getElementById('letraMin')
var letraMai = document.getElementById('letraMai')
var numero = document.getElementById('numero')
var comprimento = document.getElementById('comprimento')

mensagem.style.display = 'none'
// Quando o usuário clicar no campo de campoSenhaCadastro, mostre a caixa de mensagem
campoSenhaCadastro.onfocus = function () {
  document.getElementById('mensagem').style.display = 'flex'
}

// Quando o usuário clicar fora do campo de campoSenhaCadastro, oculte a caixa de mensagem
campoSenhaCadastro.onblur = function () {
  document.getElementById('mensagem').style.display = 'none'
}

// Quando o usuário começa a digitar algo dentro do campo de campoSenhaCadastro
campoSenhaCadastro.onkeyup = function () {
  // Validação Letras Minusculas
  var letrasMinusculas = /[a-z]/g
  if (campoSenhaCadastro.value.match(letrasMinusculas)) {
    letraMin.classList.remove('invalid')
    letraMin.classList.add('valid')
  } else {
    letraMin.classList.remove('valid')
    letraMin.classList.add('invalid')
  }

  // Validação Letras Maiusculas
  var letrasMaiusculas = /[A-Z]/g
  if (campoSenhaCadastro.value.match(letrasMaiusculas)) {
    letraMai.classList.remove('invalid')
    letraMai.classList.add('valid')
  } else {
    letraMai.classList.remove('valid')
    letraMai.classList.add('invalid')
  }

  // Validação Numeros
  var numeros = /\d/g
  if (campoSenhaCadastro.value.match(numeros)) {
    numero.classList.remove('invalid')
    numero.classList.add('valid')
  } else {
    numero.classList.remove('valid')
    numero.classList.add('invalid')
  }

  // Validação Comprimento
  if (campoSenhaCadastro.value.length >= 8) {
    comprimento.classList.remove('invalid')
    comprimento.classList.add('valid')
  } else {
    comprimento.classList.remove('valid')
    comprimento.classList.add('invalid')
  }
}

// VALIDAÇÃO REPETIR SENHA

var campoRepetirSenhaCadastro = document.getElementById('conferirSenha')

campoRepetirSenhaCadastro.addEventListener('blur', function () {
  //Capturando o elemento <Small> do html
  var repetirSenhaValidacaoCadastro = document.getElementById(
    'repetirSenhaValidacaoCadastro'
  )
  if (
    campoRepetirSenhaCadastro.value != '' &&
    campoRepetirSenhaCadastro.value == campoSenhaCadastro.value
  ) {
    //Email tem informação
    repetirSenhaValidacaoCadastro.innerText = ''
    campoRepetirSenhaCadastro.style.border = ``
    repetirSenhaCadastroEValido = true
  } else {
    //Email está vazio
    repetirSenhaValidacaoCadastro.innerText = 'Senhas não coincidem'
    repetirSenhaValidacaoCadastro.style.color = 'rgba(255, 0, 0, 0.75)'
    repetirSenhaValidacaoCadastro.style.fontSize = '8'
    repetirSenhaValidacaoCadastro.style.fontWeight = 'bold'
    campoRepetirSenhaCadastro.style.border = `1px solid rgba(255, 0, 0, 0.75)`
    repetirSenhaCadastroEValido = false
  }
  validacaoTelaCadastro()
})

function validacaoTelaCadastro() {
  if (
    nomeCadastroEValido &&
    apelidoCadastroEValido &&
    emailCadastroEValido &&
    repetirSenhaCadastroEValido
  ) {
    botaoCriarConta.removeAttribute('disabled')
    botaoCriarConta.innerText = 'Criar Conta'
    botaoCriarConta.style.background = 'rgba(24, 142, 106, 0.717)'
    return true
  } else {
    botaoCriarConta.setAttribute('disabled', true)
    botaoCriarConta.innerText = 'Criar Conta'
    return false
  }
}
