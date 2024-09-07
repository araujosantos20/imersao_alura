function pesquisar() {
    // Seleciona a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
  
    // Inicializa uma string vazia para armazenar o HTML dos resultados
    let resultado = "";
  
    // Itera sobre cada dado da pesquisa
    for (dado of dados) {
      // Constrói o HTML para cada item da pesquisa, utilizando template literals para melhor legibilidade
      resultado += `
        <div class="item-resultado">
          <h2><a href="#">${dado.produto}</a></h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href="${dado.link}">Mais informações</a>
        </div>
      `;
    }
  
    // Atribui o HTML gerado para a seção de resultados
    section.innerHTML = resultado;
  }