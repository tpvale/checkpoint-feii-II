function removerTarefa(tarefaId) {
  Swal.fire({
    title: 'A tarefa foi removida com sucesso!',
    icon: 'success',
    showConfirmButton: true
  }).then(result => {
    if (result.isConfirmed) {
      let urlEndpoint =
        'https://ctd-todo-api.herokuapp.com/v1/tasks/' + tarefaId

      let headerToken = new Headers()
      headerToken.append('Authorization', tokenJwt)

      const configuracaoRequisicao = {
        method: 'DELETE',
        headers: {
          Authorization: tokenJwt
        }
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
  })
}
