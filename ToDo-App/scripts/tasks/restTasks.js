function restTarefa(tarefaId) {
  let urlEndpoint = 'https://ctd-todo-api.herokuapp.com/v1/tasks/' + tarefaId

  let headerToken = new Headers()
  headerToken.append('Authorization', tokenJwt)

  const objetoTarefa = {
    completed: ''
  }

  objetoTarefa.completed = false

  const objetoTarefaEmJson = JSON.stringify(objetoTarefa)

  const configuracaoRequisicao = {
    method: 'PUT',
    headers: {
      Authorization: tokenJwt,
      'Content-Type': 'application/json'
    },
    body: objetoTarefaEmJson
  }

  fetch(urlEndpoint, configuracaoRequisicao)
    .then(resultado => {
      if (resultado.status == 200) {
        return resultado.json()
      }
      throw resultado
    })
    .then(resultado => {
      console.log(resultado)
      window.location.reload()
    })
    .catch(erro => {
      console.log(erro)
    })
}
