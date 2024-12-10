const sectionFilmes = document.querySelector("#filmes>div");
const sectionSeries = document.querySelector("#series>div");

let midia = [
    {
        genero: ["Ação", "Comédia"],
        titulo: "Bad Boys: Até o Fim",
        midia: "filme",
        poster: "badboys.webp",
    },
    {
        genero: ["Ação", "Thriller"],
        titulo: "Bastardos Inglórios",
        midia: "filme",
        poster: "bastardos.svg",
    },
    {
        genero: ["Ação", "Drama"],
        titulo: "Django Livre",
        midia: "filme",
        poster: "Django.svg",
    },
    {
        genero: ["Thriller", "Mistério", "Crime"],
        titulo: "Batman",
        midia: "filme",
        poster: "batman.svg",
    },
    {
        genero: ["Ação", "Sci-fi", "Aventura"],
        titulo: "Furiosa: Uma Saga Mad Max",
        midia: "filme",
        poster: "furiosa.svg",
    },
    {
        genero: ["Sci-fi", "Aventura"],
        titulo: "Duna: Parte Dois",
        midia: "filme",
        poster: "duna.svg",
    },
    {
        genero: ["Drama", "Comédia"],
        titulo: "O Lobo de Wall Street",
        midia: "filme",
        poster: "lobodewallstreet.svg",
    },
    {
        genero: ["Sci-fi", "terror", "Thriller"],
        titulo: "Um Lugar silencioso: Dia um",
        midia: "filme",
        poster: "umlugarsilencioso.webp",
    },
    {
        genero: ["Sci-fi", "Ação", "Aventura"],
        titulo: "Venom: A Última Rodada",
        midia: "filme",
        poster: "venom.webp",
    },
    {
        genero: ["Comédia", "Aventura", "animação", "Drama"],
        titulo: "Divertidamente 2",
        midia: "filme",
        poster: "divertidamente.webp",
    },





    // series



    {
        genero: ["Drama", "sci-fi", "fantasia", "Mistério"],
        titulo: "Stranger Things",
        midia: "serie",
        poster: "posterstranger.webp",
    },
    {
        genero: ["Drama"],
        titulo: "Anne com um 'e'",
        midia: "serie",
        poster: "anne.svg",
    },
    {
        genero: ["Drama", "sci-fi", "fantasia", "Ação"],
        titulo: "House of the Dragon",
        midia: "serie",
        poster: "house of the dragon.svg",
    },
    {
        genero: ["Drama", "Ação", "Aventura"],
        titulo: "Game of Thrones",
        midia: "serie",
        poster: "gameofthrones.webp",
    },
    {
        genero: ["Drama"],
        titulo: "Euphoria",
        midia: "serie",
        poster: "euphoria.svg",
    },
    {
        genero: ["Drama", "Crime"],
        titulo: "Breaking Bad: A Química do Mal",
        midia: "serie",
        poster: "Breaking_Bad 1.svg",
    },
    {
        genero: ["Drama"],
        titulo: "Grey's Anatomy",
        midia: "serie",
        poster: "greysanatomy.webp",
    },
    {
        genero: ["Drama", "Crime", "Ação"],
        titulo: "Prision Break",
        midia: "serie",
        poster: "prisonbreak.webp",
    },
    {
        genero: ["Comédia", "animação", "fantasia", "sci-fi"],
        titulo: "Hotel Hazbin",
        midia: "serie",
        poster: "hotel.svg",
    },
    {
        genero: ["Drama", "fantasia", "Mistério", "Ação", "Aventura"],
        titulo: "sobrenatural",
        midia: "serie",
        poster: "sobrenatural.webp",
    },
    {
        genero: ["Drama", "Mistério", "Ação", "Aventura"],
        titulo: "O segredo Do Rio",
        midia: "serie",
        poster: "osegredodorio.webp",
    },
    {
        genero: ["Drama", "fantasia", "Ação", "Aventura", "sci-fi"],
        titulo: "O Senhor dos Anéis: Os Anéis de Poder",
        midia: "serie",
        poster: "osenhordosaneis.webp",
    },
];

// console.log(midia);
// alert("Olá Mundo em javascript");

addEventListener("load", () => {
    // filtrar por series
    const series = midia.filter(serie => serie.midia === "serie");
    // filtrar por filme
    const filmes = midia.filter(filme => filme.midia === "filme");

    adicionarOuAtualizarMidia("filme", filmes);
    adicionarOuAtualizarMidia("serie", series);
})

function filtrarMidiaPorTituloOuGenero() {
    const tituloPesquisado = document.getElementById("input_filtro_nome").value.toLowerCase();
    const generoSelecionado = document.getElementById("select_filtro_genero").value.toLowerCase();

    let midiaFiltrada;

    // console.log(tituloPesquisado);
    // console.log(generoSelecionado);


    if (tituloPesquisado.length > 2 || generoSelecionado != "") {
        midiaFiltrada = midia.filter(item =>
            item.titulo.toLowerCase().includes(tituloPesquisado)
            &&
            item.genero.some(genero => genero.toLowerCase().includes(generoSelecionado))
        )

    } else {
        midiaFiltrada = midia;
    }

    // filtro da midiaFiltrada

    const midiaFiltradaFilmes = midiaFiltrada.filter(filme => filme.midia === "filme");
    const midiaFiltradaSeries = midiaFiltrada.filter(serie => serie.midia === "serie");

    adicionarOuAtualizarMidia("filme", midiaFiltradaFilmes);
    adicionarOuAtualizarMidia("serie", midiaFiltradaSeries)
}

function adicionarOuAtualizarMidia(tipo, midiaFiltrada) {
    const nomeDaSecao = tipo + "s"
    const secaoElemento = document.querySelector(`#${nomeDaSecao}>div`);

    secaoElemento.innerHTML = "";

    if (midiaFiltrada.length > 0) {
        midiaFiltrada.forEach(midia => {
            secaoElemento.innerHTML += `
                            <img class="card_poster" 
                            src="../assets/images/${tipo}/${midia.poster}" 
                            alt="Postêr do ${tipo === "filme" ? "filme" : "serie"}">

            `;
        });
    } else {
        secaoElemento.innerHTML = `
        <p class="mensagem_sem_resultados">Nenhum(a) ${tipo === "filme" ? "filme" : "serie"} encontrado com este Título e/ou gênero</p>
        `;
    }
}