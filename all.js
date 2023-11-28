function showCategoriasDropdown() {
    var dropdown = document.getElementById("categoriasDropdown");
    dropdown.style.display = (dropdown.style.display === "block") ? "none" : "block";
}

function highlightLink(element) {
    var links = document.getElementsByClassName('hotbar')[0].getElementsByTagName('a');
    for (var i = 0; i < links.length; i++) {
        links[i].style.backgroundColor = '';
    }

    element.style.backgroundColor = '#777';
}
var articles = [
    {
        imageUrl: 'https://cdn.aprovadoapp.com.br/blog/midia/artigo4-capa.jpg',
        titleText: '7 dicas para estudar melhor e alcançar os resultados que você espera',
        subtitleText: 'Ter um bom aproveitamento nos estudos pode ser um grande desafio, principalmente quando é necessário conciliar essa atividade com outras responsabilidades do dia a dia. Por isso, é muito importante conhecer algumas dicas para estudar melhor e, assim, conseguir os resultados que você precisa para alcançar as suas metas profissionais e acadêmicas.',
        url: 'https://blogcarreiras.cruzeirodosuleducacional.edu.br/dicas-para-estudar-melhor/' 
    },
    {
        imageUrl: 'https://dhg1h5j42swfq.cloudfront.net/2021/03/22173102/concursos-para-1024x536.jpg',
        titleText: 'Concursos Pará: ATUALIZADO! Novos editais devem sair em 2023',
        subtitleText: 'Concursos Pará: panorama completo das vagas previstas no estado. A região norte teve diversas oportunidades abertas este ano. E se o edital que você esperava ainda não foi publicado, salve esta página nos favoritos e acompanhe as tramitações dos concursos previstos para o estado do Pará em 2023.',
        url: 'https://www.estrategiaconcursos.com.br/blog/concursos-pa/'
    },
    {
        imageUrl: 'https://sitecontent.kumon.com.br/site/general/637828784764607234_image.png?width=100',
        titleText: '10 sites confiáveis para estudar e conseguir boas referências',
        subtitleText: '        No momento do estudo, seja para preparar-se para concursos públicos, vestibulares ou ENEM, é preciso de cuidado na hora de escolher as referências. Mas não se preocupe, existem sites confiáveis para estudar e é isso que mostraremos hoje!. E se você está procurando por eles para conseguir uma boa nota no ENEM e, dessa forma, poder escolher entre cursos e instituições renomadas, a lista que apresentaremos a seguir será bastante útil. Você também deve usar esses sites para aprimorar seus estudos, melhorando a sua qualificação profissional. Quem sabe não consegue um emprego melhor, um emprego estável?',
        url: 'https://censupeg.com.br/blog/posts/10-sites-confiaveis-para-estudar-e-conseguir-boas-referencias'
    },

];

var articleContainer = document.getElementById('blogContainer');

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





var Articles = [
    {
        titleText: 'Governo lança plano para aumentar número de alunos da educação especial em salas comuns',
        subtitleText: 'O governo federal anunciou nesta terça-feira, 21, investimentos de aproximadamente R$ 3 bilhões, ao longo dos próximos quatro anos, para ampliar o acesso, a permanência, a participação e a aprendizagem de estudantes com algum tipo de deficiência em escolas comuns, além da formação de educadores para atender a esse público.',
        url: 'https://exame.com/brasil/governo-lanca-plano-para-aumentar-numero-de-alunos-da-educacao-especial-em-salas-comunsentenda/' 
    },
    {
        titleText: 'Apenas 26% dos brasileiros acreditam que professores são bem valorizados',
        subtitleText: 'A primeira edição do Indicador de Valorização de Professores (IVP), revela que apenas 26% dos brasileiros acreditam que os professores são bem valorizados no país, enquanto somente 20% dos docentes têm essa percepção. Os dados apontam ainda que um em cada três brasileiros (36%) percebe que a carreira docente é pouco valorizada – a mesma percepção de 18% dos professores.',
        url: 'https://exame.com/bussola/apenas-26-dos-brasileiros-acreditam-que-professores-sao-bem-valorizados/'
    },
    {
        titleText: 'Rede Nacional de Ensino e Pesquisa vai destinar R$ 350 mil para projetos de blockchain e metaverso',
        subtitleText: 'A Rede Nacional de Ensino e Pesquisa (RNP) lançou uma chamada pública para o Programa de Pesquisa, Desenvolvimento e Inovação para Serviços Avançados de 2024. Destinado a membros da comunidade acadêmica e startups, o programa oferece uma oportunidade para trabalhar na criação de soluções baseadas em blockchain, metaverso e inteligência artificial.',
        url: 'https://exame.com/future-of-money/rede-nacional-de-ensino-e-pesquisa-vai-destinar-r-350-mil-para-projetos-de-blockchain-e-metaverso/'
    },
    {
        titleText: 'Quando será divulgado o gabarito do Enem 2023? Veja datas e informações sobre a prova',
        subtitleText: 'Segundo o Inep, apenas após o fim da aplicação das provas é que será possível ter acesso ao gabarito oficial e aos cadernos de provas, que serão divulgados na internet, na página do Inep. Já o resultado final será divulgado apenas no dia 16 de janeiro de 2024, conforme o edital do exame, na Página do Participante.',
        url: 'https://exame.com/brasil/quando-sera-divulgado-o-gabarito-do-enem-2023-veja-datas-e-informacoes-sobre-a-prova/'
    },
];

var smallCardContainer = document.getElementById('smallContainer');

Articles.forEach(function(articlesCard) {
    var cardType = 'small';
    
    var card = document.createElement('div');
    card.className = cardType === 'small' ? 'small-card' : 'card';

    var cardContent = document.createElement('div');
    cardContent.className = 'small-card-content';

    if (articlesCard.imageUrl && cardType !== 'small') {
        var image = document.createElement('img');
        image.src = articlesCard.imageUrl;
        cardContent.appendChild(image);
    }

    cardContent.innerHTML += '<h2>' + articlesCard.titleText + '</h2><p>' + articlesCard.subtitleText + '</p>';
    
    card.appendChild(cardContent);
    smallCardContainer.appendChild(card);

    card.addEventListener('click', function() {
        window.location.href = articlesCard.url;
    });
});
