const spinner = {
    showSpinner: function () {
        // Selecionamos o body. Isto servirá para incorporar nosso spinner dentro do HTML
        const body = document.querySelector("body");

        // Selecionamos os divs do index para poder ocultar durante o carregamento
        const divLeft = document.querySelector('.left');
        const divRight = document.querySelector('.right');

        // Criamos nosso spinner
        const spinnerContainer = document.createElement("div");
        const spinner = document.createElement("div");

        // Atruibuimos os IDs a cada novo elemento, para poder manipular seus estilos
        spinnerContainer.setAttribute("id", "container-load");
        spinner.setAttribute("id", "load");

        // Ocultamos o formulario de registro
        divLeft.classList.add("hidden");
        divRight.classList.add("hidden");


        // Agregamos o Spinner a nosso HTML
        spinnerContainer.appendChild(spinner);
        body.appendChild(spinnerContainer);

        return;
    },
    removeSpinner: function () {
        // Selecionamos o body para poder remover o spinner do HTML
        const body = document.querySelector("body");

        // Selecionamos o formulario de registro para poder mostrar novamente
        const divLeft = document.querySelector('.left');
        const divRight = document.querySelector('.right');

        // Selecionamos o spinner
        const spinnerContainer = document.querySelector("#container-load");

        // Removemos o spinner do HTML
        body.removeChild(spinnerContainer);

        // Removemos a classe que oculta o formulário
        divLeft.classList.remove("hidden");
        divRight.classList.remove("hidden");
        return;
    }
};


/*
 Nossa função receberá dois argumentos:
 
 1) Em primeiro lugar, o número de skeletons que queremos
   mostrar;
  2) Em segundo lugar, o conteiner dentro do qual queremos incluir
 os skeletons
  Por exemplo, se queremos mostrar 5 skeletons dentro
 do seguinte conteiner:
 
   <ul class="tarefas-pendentes"></ul>
 
 ao chamar a função podemos passar os seguintes argumentos:
 
 renderizarSkeletons(5, ".tarefas-pendentes")
 
// */
// function renderizarSkeletons(quantidade, conteiner) {
//  // Selecionamos o conteiner
//  const conteinerTarefas = document.querySelector(conteiner);
 
//  // Criamos um array que terá um lenght igual ao número de
//  //skeletons que queremos renderizar
//  const skeletons = Array.from({ length: quantidade});
 
//  // Iteramos sobre o array acessando cada elemento
//  skeletons.forEach(() => {
//    // Guardamos o HTML de cada skeleton. Adicionamos uma classe com o seletor do conteiner
//    // Isso nos permitirá posteriormente eliminar os skeletons do referido conteiner
//    const template = `
//    <li class="skeleton-conteiner ${conteiner.replace("."=" ")}-child"="">
//      <div class="skeleton-card">
//        <p class="skeleton-text"></p>
//        <p class="skeleton-text"></p>
//      </div>
//    </li>
//  `;
 
//    // Inserimos o HTML dentro do conteiner
//    conteinerTarefas.innerHTML += template;
//  });
// }

/*
 Esta função receberá o nome do conteiner dentro do qual
 se encontram os skeletons que desejamos remover
*/
// function removerSkeleton(conteiner) {
//     // Selecionamos o conteiner
//     const conteinerTarefas = document.querySelector(conteiner);
    
//     // Selecionamos todos os skeletons dentro deste conteiner
//     const skeletons = document.querySelectorAll(`${conteiner}-child`);
    
//     // Iteramos sobre a lista de skeletons e removemos cada um deles
//     // do referido conteiner
//     skeletons.forEach((skeleton) => conteinerTarefas.removeChild(skeleton));
//    }
   