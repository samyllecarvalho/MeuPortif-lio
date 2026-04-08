// lista de projetos
const MeusProjetos =[
    {
        titulo: "Portifólio Pessoal",
        descricao: "Este é o meu portifólio pessoal, onde apresento uma breve descrição minha,lista com meus projetos e contatos.",
        link:"https://github.com/SamylleCarvalho/MeuPortif-lio",
    },
    {
        titulo: "Projeto Integrador 1 - AgendJá",
        descricao: "Aplicativo de agendamento de serviços,desenvolvido em equipe,para a disciplina Projeto Integrador 1.",
        link: "https://github.com/SamylleCarvalho/Aplicativo-AgendJa",
    },
    {
        titulo: "Em breve mais projetos",
        descricao: "Estou trabalhando em novos projetos e em breve eles estarão disponíveis para visualização.",
        link: "#"
    }
];
// Gerar os cards(caixinhas) dos projetos dinamicamente
const container =document.querySelector(".container-meus-projetos");
//laço de repetição para criar os cards dos projetos sem precisar escrever o código HTML para cada um deles, tornando o processo mais eficiente e organizado.
MeusProjetos.forEach(projeto => {
//cria o elemento para cada projeto, adiciona as informações do projeto e o link para visualização dos projetos.    
    const projetoElement = document.createElement("div");
//adiciona a classe de estilização css.   
    projetoElement.classList.add("projeto-card");
//adiciona o conteudo html para cada projeto, utilizando as informações do objeto projeto.    
    projetoElement.innerHTML = `
        <h3>${projeto.titulo}</h3>
        <p>${projeto.descricao}</p>
        <a href="${projeto.link}"
        class="ver-projeto" target="_blank">Ver Projeto</a>
        `;
//adiciona o card pronto para o container dos projetos.        
        container.appendChild(projetoElement);
    });
// lista de contatos
    const Contatos =[
        {
            titulo: "WhatsApp",
            link: "https://wa.me/5586981774652"
        },
        {
            titulo: "E-mail",
            link: "mailto:samylliribeiro2018@gmail.com"
        },
        {
            titulo: "GitHub",
            link: "https://github.com/SamylleCarvalho"
        }
    ]
// Gerar os botões de contato dinamicamente.    
    const containerContato = document.querySelector(".container-contato");
//laço de repetição para criar os botões de contato sem precisar escrever o código HTML para cada um deles.    
    Contatos.forEach(item => {
//cria o elemento para cada contato, adiciona as informações do contato e o link para visualização dos contatos.        
        const botao = document.createElement("a");
        botao.href = item.link;
        botao.target = "_blank";
        botao.textContent = item.titulo;
        botao.classList.add("botao-contato");
        containerContato.appendChild(botao);
    });