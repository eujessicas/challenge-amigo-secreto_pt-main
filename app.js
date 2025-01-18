let amigos = [];

function adicionarAmigo() {
  const input = document.getElementById('amigo'); // Captura o campo de entrada
  const nome = input.value.trim(); // Remove espaços em branco

  // Validação da entrada
  if (nome === '') {
    alert('Por favor, insira um nome.'); // Mensagem de erro
    return;
  }

  amigos.push(nome); // Atualiza o array de amigos
  atualizarLista(); // Atualiza a lista exibida na tela
  input.value = ''; // Limpa o campo de entrada
  input.focus(); // Foco no campo de texto
}

function atualizarLista() {
  const ul = document.getElementById('listaAmigos'); // Obtém o elemento da lista HTML
  ul.innerHTML = ""; // Limpa a lista existente

  // Percorre o array de amigos e adiciona cada nome como um <li>
  amigos.forEach((amigo, index) => {
    const li = document.createElement('li'); // Cria um novo elemento <li>
    li.textContent = amigo; // Define o texto do elemento como o nome do amigo
    ul.appendChild(li); // Adiciona o <li> à lista
  });
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert('A lista está vazia! Adicione nomes antes de sortear.');
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indiceAleatorio];

  const ulResultado = document.getElementById('resultado'); // Elemento da lista de resultado
  ulResultado.innerHTML = ""; // Limpa resultados anteriores

  const liResultado = document.createElement('li');
  liResultado.textContent = `O amigo secreto é: ${amigoSorteado}`;
  ulResultado.appendChild(liResultado);
}


