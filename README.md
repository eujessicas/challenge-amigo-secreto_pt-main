Amigo Secreto - Aplicação Web
Descrição
Esta aplicação web simples permite que os usuários organizem um sorteio de Amigo Secreto. Os usuários podem adicionar os nomes dos participantes a uma lista, visualizar os nomes adicionados e realizar um sorteio aleatório para determinar quem será o "amigo secreto".

Funcionalidades
Adicionar Nomes:

O usuário pode inserir o nome de um participante no campo de texto e adicioná-lo à lista ao clicar no botão "Adicionar".
Entradas inválidas (campo vazio) são rejeitadas com um alerta.
Exibir a Lista de Participantes:

Os nomes inseridos aparecem em uma lista visível na página.
Sorteio Aleatório:

Um botão permite realizar o sorteio, selecionando aleatoriamente um dos nomes da lista e exibindo o resultado na tela.
Estrutura do Projeto
O projeto é composto pelos seguintes arquivos:

index.html: Estrutura HTML principal da página.
style.css: Estilização da página.
app.js: Lógica e interatividade da aplicação.
Como Usar
Abra o arquivo index.html em qualquer navegador moderno.
Na interface exibida:
Insira o nome de um participante no campo de texto.
Clique no botão "Adicionar" para incluí-lo na lista.
Após adicionar todos os nomes desejados, clique no botão "Sortear amigo" para realizar o sorteio.
O resultado do sorteio será exibido abaixo do botão.
Código Principal
O JavaScript da aplicação contém três funções principais:

1. adicionarAmigo()
Captura o nome inserido no campo de texto.
Valida se o nome não está vazio.
Adiciona o nome ao array amigos.
Atualiza a lista de nomes exibida na página.
2. atualizarLista()
Percorre o array amigos.
Cria um elemento <li> para cada nome.
Adiciona os elementos à lista exibida na página.
3. sortearAmigo()
Verifica se há nomes na lista.
Seleciona um nome aleatório do array amigos.
Exibe o resultado do sorteio na tela.
Requisitos
Um navegador moderno (Google Chrome, Mozilla Firefox, Microsoft Edge, etc.).
Customização
Adicionar estilos: Modifique o arquivo style.css para alterar o design da aplicação.
Melhorar interatividade: Expanda o arquivo app.js para incluir novas funcionalidades, como remover nomes ou salvar a lista localmente.
Tecnologias Utilizadas
HTML5
CSS3
JavaScript (ES6+)
Licença
Este projeto é de uso livre para fins educacionais e pessoais.
