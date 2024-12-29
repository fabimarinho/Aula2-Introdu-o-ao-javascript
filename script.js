function adicionarTarefa() {
  // Recebe valor do input do usuário
  const inputTarefa = document.getElementById("inputTarefa");
  let tarefa = inputTarefa.value.trim();

  const mensagem = document.getElementById("mensagem");

  //  Se o valor do input for vazio então mostra uma mensagem de erro para o usuário
  if (tarefa == "") {
    // mostre uma mensagem de erro
    let mensagemErro = "Por favor, insira uma tarefa!";
    mensagem.textContent = mensagemErro;
    mensagem.style.color = "#A34743";
  } else {
    //   Mensagem de tarefa adicionada com sucesso
    let mensagemSucesso = "Tarefa adicionada com sucesso!";
    mensagem.textContent = mensagemSucesso;
    mensagem.style.color = "#28A745";

    //   Cria novo item (li) e insere na (lista ul)
    const listaTarefas = document.getElementById("listaTarefas");
    let novaTarefa = document.createElement("li");
    novaTarefa.textContent = tarefa;
    listaTarefas.appendChild(novaTarefa);
  }

  //   limpa o input do usuário
  inputTarefa.value = "";
}
