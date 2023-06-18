localStorage.setItem(
    'tarefasLS', `[
        {"tarefaProp":"Lavar Louça","completa":false},
        {"tarefaProp":"Limpar Banheiro","completa":false},
        {"tarefaProp":"Colar Fotos no mural da Família","completa":false}
    ]`);

// Declaração de variaveis
let listaDeTarefas = document.querySelector('.listaDeTarefas');
let botaoLixo = document.querySelectorAll('.fi-rr-trash');
const botaoMais = document.querySelector('.fi-rr-plus');
const iconeLixeira = '<i class="icon fi fi-rr-trash"></i>'


//Carrega as Tarefas do Json
function carregarTarefas() {
    //Lopp nas tarefas do Local Storage para o DOM
    if(localStorage.getItem("tarefasLS") != null) {
        let tarefasVar = JSON.parse(localStorage.getItem("tarefasLS"));
        tarefasVar.forEach(tarefaElemento => {
            console.log(tarefaElemento);
            let li = document.createElement("li");
            li.classList.add('tarefa');
            li.innerHTML = `${tarefaElemento.tarefaProp}` + iconeLixeira;
            listaDeTarefas.appendChild(li);
        });
    } else {
        console.log('Primeira vez');
    }
}
carregarTarefas();

// Ativa a funcionalidade das lixeiras caso hajam
// tarefas previamente na lista
if (listaDeTarefas.innerText == '') {
    console.log('Não tem tarefas salvas');
} else {
    console.log('Tem tarefas salvas');
    ativarLixeira();
}






// Adicionar uma tarefa na lista
function adcionarTarefa() {
    let inputVal = document.querySelector(".listInput").value
    let novaTarefa = document.createElement('li');
    novaTarefa.classList.add('tarefa');
    novaTarefa.innerHTML = inputVal + iconeLixeira;
    listaDeTarefas.appendChild(novaTarefa);
    limparInput();
    ativarLixeira();
    if(inputVal == '') {
       document.querySelector(".listInput").placeholder ;
        console.log('Escreva uma tarefa'); 
       
    }
};

botaoMais.addEventListener('click', adcionarTarefa);







// Remover uma tarefa da Lista
function ativarLixeira() {
    botaoLixo = document.querySelectorAll('.fi-rr-trash');
    for(let i = 0; i < botaoLixo.length; i++) {
        botaoLixo[i].addEventListener('click', () => {
            botaoLixo[i].parentElement.remove();
        });
    }
}

// Limpa o value do campo input
function limparInput() {
    document.querySelector('.listInput').value = "";
}
