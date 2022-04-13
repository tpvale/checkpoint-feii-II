let finalizarPaginaTasks = document.getElementById('closeApp')
let nomeMaisSobrenomeUsuario = document.querySelector('.user-info p')
let urlDados = 'https://ctd-todo-api.herokuapp.com/v1/users/getMe'

onload = function () {
  if (!tokenJwt) {
    location.href = 'index.html'
  } else {
    NomeSobrenomeUsuario(tokenJwt)
  }
}

finalizarPaginaTasks.addEventListener('click', function () {
  location.href = 'index.html'
})

function NomeSobrenomeUsuario() {
  let endPointTask = {
    method: 'GET',
    headers: {
      authorization: tokenJwt
    }
  }

  fetch(urlDados, endPointTask)
    .then(resposta => resposta.json())
    .then(resposta2 => {
      nomeMaisSobrenomeUsuario.innerHTML = `${resposta2.firstName} ${resposta2.lastName}`
    })
}
