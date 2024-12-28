function adicionarTarefa() {
  // Recebe valor do input do usuário
  let inputTarefa = document.getElementById("inputTarefa");
  let tarefa = inputTarefa.value;

  //   Cria novo item (li) e insere na (lista ul)
  let listaTarefas = document.getElementById("listaTarefas");
  let novaTarefa = document.createElement("li");
  novaTarefa.textContent = tarefa;
  listaTarefas.appendChild(novaTarefa);

  //   Mensagem de tarefa adicionada com sucesso
  let mensagem = "Tarefa adicionada com sucesso!";
  document.getElementById("mensagem").textContent = mensagem;

  //   limpa o input do usuário
  inputTarefa.value = "";
}