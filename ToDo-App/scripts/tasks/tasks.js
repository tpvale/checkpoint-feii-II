let tokenJwt = sessionStorage.getItem("jwt");

const taskObjeto = {
  description: "teste",
  completed: false
}

let TaskJson = JSON.stringify(taskObjeto);


let btAddTask = document.getElementById("btAddTask");

//Executa ao clicar no botão de Acessar


function addTask(taskJson) {

  //Executar o acesso a API com o login
  let urlEndPointAddTask = "https://ctd-todo-api.herokuapp.com/v1/tasks";
  let configDaRequisicao = {
      method: 'POST',
      headers: {
          'content-type': 'application/json',
          'authorization': tokenJwt
      },
      body: taskJson
  }

  fetch(urlEndPointAddTask, configDaRequisicao)
  .then(
      resultado => {
          if (resultado.status == 201) {
          return resultado.json();
      }
      throw resultado;
  }).then(
      resultado => {
          console.log(resultado);
  }).catch(
      erro => {
      console.log(erro);
  });

}

btAddTask.addEventListener('click', addTask());