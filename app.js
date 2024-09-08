function pesquisar() {
  // Seleciona a seção HTML onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  let campoPesquisa = document.getElementById("campo-pesquisa").value;
  // Tudo o que estiver escrito dentro do campo de pesquisa, ficará em letra minuscula
  campoPesquisa = campoPesquisa.toLowerCase();
  // Inicializa uma string vazia para armazenar o HTML dos resultados
  let resultado = "";
  let produto = "";
  let descricao = "";
  let tags = "";

  // Itera sobre cada dado da pesquisa
  for (dado of dados) {
    // Condição caso o campo de pesquisa esteja vazio, exibirá uma mensagem
    if (!campoPesquisa) {
      section.innerHTML = `<p>Digite algo para poder encontrar o que voce deseja.</p>`;
      return section.innerHTML;
    }

    // Tudo o que for atribuido a está variáveis ficará em letra minuscula
    produto = dado.produto.toLowerCase();
    descricao = dado.descricao.toLowerCase();
    tags = dado.tags.toLowerCase();

    if (
      // Condição para caso o nome do produto ou descricao ou tag seja
      // Verdadeiro, ele irá executar a tarefa abaixo
      produto.includes(campoPesquisa) ||
      descricao.includes(campoPesquisa) ||
      tags.includes(campoPesquisa)
    ) {
      // Constrói o HTML para cada item da pesquisa, utilizando template literals para melhor legibilidade
      resultado += `
      <div class="item-resultado">
      <h2><a href="#">${dado.produto}</a></h2>
      <p class="descricao-meta">${dado.descricao}</p>
      <a href="${dado.link}">Mais informações</a>
      </div>
      `;
    }
  }

  // Condição para caso o resultado seja falso, exibirá uma mensagem de erro
  if (!resultado) {
    resultado = "<p>Nada foi encontrado</p>";
  }

  // Atribui o HTML gerado para a seção de resultados
  section.innerHTML = resultado;
}
