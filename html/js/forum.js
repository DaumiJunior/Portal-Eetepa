function showCategoriasDropdown() {
  var dropdown = document.getElementById("categoriasDropdown");
  dropdown.style.display = (dropdown.style.display === "block") ? "none" : "block";
}




var articles = [
    {
        imageUrl: 'https://encurtador.com.br/iA259',
        titleText: 'APLICAÇÃO DA INTELIGÊNCIA ARTIFICIAL NA SEGURANÇA DO TRABALHO: UMA REVISÃO SISTEMÁTICA DE LITERATURA',
        subtitleText: 'O artigo discorre sobre as aplicações da inteligência artificial direcionadas para segurança do trabalho na prevenção de acidentes. A pesquisa, de caráter exploratório, descritivo e de abordagem qualit...',
        url: 'https://www.nucleodoconhecimento.com.br/tecnologia/aplicacao-da-inteligencia' 
    },
    {
        imageUrl: 'https://encurtador.com.br/fvAEP',
        titleText: 'Nova Economia da Amazônia',
        subtitleText: 'A Nova Economia da Amazônia é um estudo desenvolvido pelo WRI Brasil em parceria com 76 especialistas de instituições científicas de diversas regiões do país. O trabalho mostra que manter a flores...',
        url: 'https://www.wribrasil.org.br/nova-economia-da-amazonia?utm_source=google&utm' 
    },
    {
        imageUrl: 'https://encurtador.com.br/krEK8',
        titleText: 'A mineração em Minas Gerais: uma análise de sua expansão e os impactos ambientais e sociais causados por décadas de exploração',
        subtitleText: 'O estado de Minas Gerais vem sofrendo com a exploração de minério desde o começo da colonização no Brasil. Apesar disso, ainda hoje é o estado que mais possui reservas minerais, o que gera um embate entre produção mineral e conservação ambiental, uma vez que a extração do minério gera desmatamento e outros impactos ambien...',
        url: 'https://www.scielo.br/j/sn/a/t88hDp8F66Rpt5FjQBDQFdn/?lang=pt' 
        
    },
    {
        imageUrl: 'https://blog.scielo.org/wp-content/uploads/2023/11/google-deepmind-ggeXPf_ykAU-unsplash-300x231.jpg',
        titleText: 'ChatGPT e outras IAs transformarão toda a pesquisa científica: reflexões iniciais sobre usos e consequências ',
        subtitleText: 'Na primeira parte deste ensaio,1 apresentamos seis usos principais de Inteligência Artificial (IA) para ajudar em diversas etapas do fazer científico',
        url: 'https://encurtador.com.br/jops8' 
        
    },
    {
      imageUrl: 'https://blog.scielo.org/wp-content/uploads/2023/11/pyramid_7F5843E5-9386-8052-931F5C4E98C6E5F2_75757-300x187.jpg',
      titleText: 'Pesquisa e comunicação científica, IA e legislação iminente',
      subtitleText: 'Foi feito e funcionou: “Em menos de 6 horas após o seu lançamento no nosso servidor interno, o modelo gerou 40.000 moléculas que obtiveram resultados dentro do limiar desejado.',
      url: 'https://blog.scielo.org/blog/2023/11/24/pesquisa-e-comunicacao-cientifica-ia-e-legislacao-iminente/' 
      
  },{
    imageUrl: 'https://www.embrapa.br/image/journal/article?img_id=65650649&t=1634825881267&width=880',
    titleText: 'A dinâmica da agricultura em Mato Grosso do Sul',
    subtitleText: 'O ambiente de produção agropecuária de Mato Grosso do Sul passa por significativas transformações, tanto sob o ponto de vista quantitativo quanto pela diversificação de espécies vegetais e animais',
    url: 'https://encurtador.com.br/fwXZ7' 
    
},{
  imageUrl: 'https://www.nucleodoconhecimento.com.br/wp-content/uploads/2020/10/descolamento-de-pastilha.png',
  titleText: 'O IMPACTO DA PERÍCIA JUDICIAL NOS CASOS DE MANIFESTAÇÕES PATOLÓGICAS EM REVESTIMENTOS CERÂMICOS',
  subtitleText: 'O presente trabalho tem como objetivo apresentar aos profissionais que atuam na área da construção civil o impacto da perícia judicial na análise das causas das manifestações patológicas em revestimentos cerâmicos.',
  url: 'https://www.nucleodoconhecimento.com.br/engenharia-civil/revestimentos-ceramicos' 
  
},{
  imageUrl: 'https://encurtador.com.br/lqBPR',
  titleText: 'O USO DO GEOPROCESSAMENTO: SISTEMA DE INFORMAÇÕES GEOGRÁFICAS NA MINERAÇÃO',
  subtitleText: 'A sociedade e os meios produtivos têm vivenciado nos últimos anos um grande avanço tecnológico por meio da disponibilização de variados equipamentos e sistemas informatizados que ampliaram a capacidade de comunicação e soluções de problemas através de acesso a dados e informações',
  url: 'https://www.nucleodoconhecimento.com.br/tecnologia/geoprocessamento' 
  
},{
  imageUrl: 'https://encurtador.com.br/fIMX0',
  titleText: 'As redes de comunicação no mundo globalizado',
  subtitleText: 'As redes de comunicação tem papel fundamental para o mundo globalizado, mas o seu uso não garante mudanças na realidade socioespacial.',
  url: 'https://mundoeducacao.uol.com.br/geografia/as-redes-comunicacao-no-mundo-globalizado.htm' 
  
},
    {
        imageUrl: 'https://encurtador.com.br/u4589',
        titleText: 'Tecnologia VoIP, você sabe o que é?',
        subtitleText: 'VoIP - Voz sobre IP - é uma tecnologia em franco crescimento no mercado da telefonia. Trata-se de um sistema que altera a forma com que nos comunicamos com o mundo, reduzindo custos e melhorando as maneiras utilizadas para a troca de informações. A grosso modo, o sistema VoIP de comunicação nada mais é que uma maneira de se fazer chamad...',
        url: 'https://www.cpt.com.br/cursos-informatica-redesdecomputadores/artigos/tecnologia-voip-voce-sabe-o-que-e-confira' 
       },
];

var articleContainer = document.getElementById('articleContainer');

articles.forEach(function(article) {
    var card = document.createElement('div');
    card.className = 'card';

    var image = document.createElement('img');
    image.src = article.imageUrl;
    image.alt = 'Imagem do Artigo';

    var cardContent = document.createElement('div');
    cardContent.className = 'card-content';

    var title = document.createElement('div');
    title.className = 'card-title';
    title.textContent = article.titleText;

    var subtitle = document.createElement('div');
    subtitle.className = 'card-subtitle';
    subtitle.textContent = article.subtitleText;

    card.appendChild(image);
    cardContent.appendChild(title);
    cardContent.appendChild(subtitle);
    card.appendChild(cardContent);

  
    card.addEventListener('click', function() {
        window.location.href = article.url;
    });

    articleContainer.appendChild(card);
});

          function searchArticles() {
            var searchInput = document.getElementById('searchInput').value.toLowerCase();
            var resultsContainer = document.getElementById('results');
            resultsContainer.innerHTML = ''; // Clear previous results
      
            var matchingArticles = articles.filter(function(article) {
              return (
                article.titleText.toLowerCase().includes(searchInput) ||
                article.subtitleText.toLowerCase().includes(searchInput)
              );
            });
      
            if (matchingArticles.length === 0) {
              resultsContainer.innerHTML = '<p>Artigo não encontrado</p>';
            } else {
              matchingArticles.forEach(function(article) {
                var articleElement = document.createElement('div');
                articleElement.innerHTML = `
                  <img src="${article.imageUrl}" alt="${article.titleText}" style="max-width: 100px; max-height: 100px;">
                  <h3>${article.titleText}</h3>
                  <p>${article.subtitleText}</p>
                  <a href="${article.url}" target="_blank">Leia mais </a>
                  <hr>
                `;
                resultsContainer.appendChild(articleElement);
              });
            }
          }
          function clearSearch() {
            var searchInput = document.getElementById('searchInput');
            var resultsContainer = document.getElementById('results');
        
            // Limpar o campo de pesquisa
            searchInput.value = '';
        
            // Limpar os resultados anteriores
            resultsContainer.innerHTML = '';
        }

        var articlesPerPage = 3; // Defina o número de artigos por página
        var currentPage = 1;
        
        function showPage(pageNumber) {
            var start = (pageNumber - 1) * articlesPerPage;
            var end = start + articlesPerPage;
            var currentArticles = articles.slice(start, end);
        
            // Limpar o container de artigos
            articleContainer.innerHTML = '';
        
            // Adicionar os artigos da página atual ao container
            currentArticles.forEach(function (article) {
                var card = document.createElement('div');
                card.className = 'card';
        
                var image = document.createElement('img');
                image.src = article.imageUrl;
                image.alt = 'Imagem do Artigo';
        
                var cardContent = document.createElement('div');
                cardContent.className = 'card-content';
        
                var title = document.createElement('div');
                title.className = 'card-title';
                title.textContent = article.titleText;
        
                var subtitle = document.createElement('div');
                subtitle.className = 'card-subtitle';
                subtitle.textContent = article.subtitleText;
        
                card.appendChild(image);
                cardContent.appendChild(title);
                cardContent.appendChild(subtitle);
                card.appendChild(cardContent);
        
                card.addEventListener('click', function () {
                    window.location.href = article.url;
                });
        
                articleContainer.appendChild(card);
            });
        }
        
        // Mostrar a primeira página ao carregar a página
        showPage(currentPage);
        
        // Adicionar botões de navegação para a paginação
        var paginationContainer = document.getElementById('paginationContainer');
        
        for (var i = 1; i <= Math.ceil(articles.length / articlesPerPage); i++) {
            var button = document.createElement('button');
            button.textContent = i;
            button.addEventListener('click', function () {
                currentPage = parseInt(this.textContent);
                showPage(currentPage);
            });
            paginationContainer.appendChild(button);
        }
        

        const dadosCarrossel = [
          { titulo: 'Avisos', conteudo: 'No dia 29 de novenbro havera a Feitec (Feira de tecnologia da Eetepa)' },
          { titulo: 'Avisos', conteudo: 'No dia 24 do 11, ouve um evento na eetepa para comemorar do dia da conciencia negra' },
          { titulo: 'Avisos', conteudo: 'No dia 22 do 11, ouve um evento no centro cultural para homenagear o dia da conciencia negra' },
          { titulo: 'Avisos', conteudo: 'Exemplos...' },
          { titulo: 'Avisos', conteudo: 'Exemplos...' },
          { titulo: 'Avisos', conteudo: 'Exemplos...' },
          { titulo: 'Avisos', conteudo: 'Exemplos...' }
          // Adicione mais dados conforme necessário
      ];

      const itensPorPagina = 3; // Número de itens por página
      let paginaAtual = 1;

      function criarCardCarrossel(dados) {
          const card = document.createElement('div');
          card.className = 'card-carrossel';

          const titulo = document.createElement('h3');
          titulo.textContent = dados.titulo;

          const conteudo = document.createElement('p');
          conteudo.textContent = dados.conteudo;

          card.appendChild(titulo);
          card.appendChild(conteudo);

          return card;
      }

      function mostrarItensDaPagina(pagina) {
          const container = document.getElementById('carrossel-container');
          container.innerHTML = '';

          const inicio = (pagina - 1) * itensPorPagina;
          const fim = inicio + itensPorPagina;

          for (let i = inicio; i < fim && i < dadosCarrossel.length; i++) {
              const card = criarCardCarrossel(dadosCarrossel[i]);
              container.appendChild(card);
          }
      }

      function paginaAnterior() {
          if (paginaAtual > 1) {
              paginaAtual--;
              mostrarItensDaPagina(paginaAtual);
          }
      }

      function proximaPagina() {
          const totalPages = Math.ceil(dadosCarrossel.length / itensPorPagina);
          if (paginaAtual < totalPages) {
              paginaAtual++;
              mostrarItensDaPagina(paginaAtual);
          }
      }

      document.getElementById('pagina-anterior').addEventListener('click', paginaAnterior);
      document.getElementById('proxima-pagina').addEventListener('click', proximaPagina);

      // Exibe os itens da primeira página ao carregar a página
      document.addEventListener('DOMContentLoaded', function() {
          mostrarItensDaPagina(paginaAtual);
      });
        // Adicionar os cards do carrossel ao carrossel
        const carrosselContainer = document.getElementById('carrossel-container');
        dadosCarrossel.forEach(dados => {
          const cardCarrossel = criarCardCarrossel(dados);
          carrosselContainer.appendChild(cardCarrossel);
        });
        function gerarCorAleatoria() {
          const letrasHex = '0123456789ABCDEF';
          let cor = '#';
          for (let i = 0; i < 6; i++) {
            cor += letrasHex[Math.floor(Math.random() * 16)];
          }
          return cor;
        }
        
        // Função para criar um card do carrossel com base nos dados e cor aleatória
        function criarCardCarrossel(dados) {
          const card = document.createElement('div');
          card.className = 'card-carrossel';
          card.style.backgroundColor = gerarCorAleatoria();
        
          const titulo = document.createElement('h3');
          titulo.textContent = dados.titulo;
        
          const conteudo = document.createElement('p');
          conteudo.textContent = dados.conteudo;
        
          card.appendChild(titulo);
          card.appendChild(conteudo);
        
          return card;
        }
        const botao = document.getElementById('toggleHud2');
        const divHud2 = document.querySelector('.hud2');
    
        // Adiciona um ouvinte de evento de clique ao botão
        botao.addEventListener('click', function() {
          // Alterna a visibilidade da div hud2
          divHud2.style.display = (divHud2.style.display === 'none' || divHud2.style.display === '') ? 'block' : 'none';
        });