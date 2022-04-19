function delTarefa(tarefaId) {
  Swal.fire({
<<<<<<< HEAD
    title: 'Excluir tarefa?',
    text: 'Esta ação não pode ser desfeita!',
    width: 'fit-content',
    background: '#8E64C5',
    color: 'white',
    showCancelButton: true,
    confirmButtonColor: '#be98f0',
    cancelButtonColor: '#be98f0',
    confirmButtonText: 'Sim',
    cancelButtonText: 'Cancelar'
=======
    title: 'A tarefa foi removida com sucesso!',
    icon: 'success',
    showConfirmButton: true
>>>>>>> 9d357239f4a67295a6e6efca03edee2e98027b9e
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
