<script>
  import { MetaTags } from "svelte-meta-tags";
  import { envVariables } from "$lib/envVariables";
  import { blogMetaData } from "$lib/blogMetaData";

  const meta = {
    title: `About | ${blogMetaData.blogTitle}`,
    description: blogMetaData.description,
    url: envVariables.basePath,
    siteName: blogMetaData.blogTitle,
    image: {
      url: `${envVariables.basePath}/background.jpeg`,
      width: 1000,
      height: 523,
      alt: "image",
    },
  };
</script>

<MetaTags
  title={meta.title}
  description={meta.description}
  canonical={meta.url}
  openGraph={{
    description: meta.description,
    images: [
      {
        ...meta.image,
      },
    ],
    site_name: meta.siteName,
    title: meta.title,
    type: "website",
    url: meta.url,
  }}
  twitter={{
    cardType: "summary_large_image",
    title: meta.title,
    description: meta.description,
    image: meta.image.url,
    imageAlt: meta.image.alt,
  }}
/>
<div class="about-container">
  <h1>Perfil</h1>

  <p>Sou um Web designer/_developer_, músico, produtor, DJ e profissional multimédia, mas, acima de tudo, um apaixonado. Uma das minhas grandes paixões é a música. Desde as primeiras aulas de música, e sobretudo desde que a minha mãe me ofereceu um órgão – tinha eu 11 anos –, percebi que o meu destino estava traçado. Aos 16 anos, para além de já sentir um tremendo impulso para a composição e produção de música, trabalhava numa discoteca como _disc jockey_ e fazia um programa diário numa rádio local. Ia para a escola com uma mala cheia, não de livros, mas de discos.</p>

<p>Tinha 19 anos quando editei o meu primeiro disco, que foi gravado num gravador de quatro pistas em cassete. Sincronizei todos os instrumentos manualmente, porque o meu sequenciador era arcaico e só sequenciava um canal MIDI de cada vez. Ver uma música minha impressa num disco de vinil foi um dos momentos mais felizes que já tive. É daquelas coisas que me significam tanto e que, para não correr o risco de cair em lugares-comuns, prefiro não explicar.</p>

<p>Tenho orgulho em poder dizer que tive um papel ativo no arranque da música de dança eletrónica em Portugal e que dei o meu contributo para a sua disseminação. Mas, embora tenha trabalhado muito para isso, também sinto que tive a sorte de ter estado no sítio certo na altura certa. Conheço muitas pessoas com enorme talento, criatividade e capacidade de trabalho que não conseguiram deixar a sua marca, apenas porque a sorte não jogou a favor delas. Relativizar as coisas boas não é humildade ou falsa modéstia; é apenas um exercício de defesa para suportar melhor os momentos menos bons.</p>

<p>Desde então e até 2011, a produção e o _DJing_ foram as minhas grandes paixões e, ao mesmo tempo, os meus principais meios de subsistência. Enquanto DJ, pus música um pouco por todo o País, em vários países europeus e nos EUA, e dei-me ao luxo de recusar uma digressão na América Latina porque desconfiei do empresário que me quis contratar. Também dei um curso de DJ, uma experiência que me despertou a vontade de ensinar e me revelou que os formadores, se quiserem e tiverem humildade suficiente, também podem aprender muito com os seus formandos, porque a atividade educativa é, ou deve ser, um processo bidirecional.</p>

<p>Enquanto produtor, para além da produção de múltiplos singles que rodaram mundialmente e de coproduções com vários artistas nacionais e internacionais, fiquei conhecido por uma incursão pelo universo da música pop, ao produzir o tema <a href="https://open.spotify.com/album/6GbT6fUbXkUKt59oUVgdK8" target="_blank" rel="noopener"><em>Estou na Lua</em></a>, um dos hinos da música portuguesa da década de 90. <a href="http://pt.wikipedia.org/wiki/Alex_Santos" target="_blank" rel="noopener">Um resumo do meu percurso profissional ligado à música pode ser visto na Wikipédia</a>, essa enciclopédia _online_ que desperta tantos amores e tantos ódios.</p>

<p>No início da década de 2000, uma nova paixão surgiu na minha vida: o Web design. Fiz os primeiros _sites_ para mim e para as empresas onde trabalhava, primeiro em linguagem HTML, depois em Flash. Os _sites_ dinâmicos e as ligações a bases de dados vieram mais tarde e o grau de complexidade aumentou, tornando mais difícil o meu autodidatismo. Por isso, e especialmente porque me sentia desencantado com o rumo que a música de dança e o _DJing_ estavam a tomar, decidi regressar à escola convencional e fazer uma licenciatura em Comunicação Social e Multimédia e um mestrado em Novos _Media_ e Práticas Web. Durante esse tempo, redescobri uma paixão adormecida, a escrita, que vou explorando pontualmente neste _site_. Escrevo sobretudo sobre a [indústria musical](http://alexsantos.com/topico/industria-musical), a [indústria discográfica](http://alexsantos.com/topico/industria-discografica), o [_DJing_](http://alexsantos.com/topico/djing), a [comunicação social](http://alexsantos.com/topico/comunicacao-social), a [Internet](http://alexsantos.com/topico/internet) e a [tecnologia](http://alexsantos.com/topico/tecnologia). Hoje, integro a equipa Web do jornal _online_ <a href="http://observador.pt/" target="_blank" rel="noopener">Observador</a>, como Web designer e _front-end developer_.</p>

<p>Sempre me considerei um otimista tecnológico. A tecnologia, particularmente a Internet, proporcionou-me oportunidades extraordinárias. Mas, com o tempo, o meu otimismo tem vindo a moderar-se. As oportunidades e os empregos que a Internet tem criado têm sido insuficientes para compensar o desemprego que está a gerar. E a robotização que se vislumbra no horizonte – com carros autónomos e escrita automática, por exemplo – terá efeitos ainda mais nefastos e preocupantes, porque aponta para um processo longo e doloroso de transição de modelo económico. A pergunta de Moshe Vardi é elucidativa e resume bem o problema que as sociedades assentes na tecnologia terão de enfrentar: <a href="http://bigstory.ap.org/article/will-smart-machines-create-world-without-work" target="_blank" rel="noopener">“Estaremos preparados para uma economia em que 50 por cento das pessoas não estão a trabalhar?”</a></p>

<p>Ao longo dos anos, para além do _DJing_ e da produção de música, tenho desenvolvido trabalhos em múltiplas áreas de _media_: do _web design_ à sonorização de documentários, da composição de bandas sonoras à produção de vídeos e de _jingles_ para rádio. Em muitas destas áreas, tenho a tendência para sobrevalorizar o conteúdo em detrimento da forma – ou do esplendor da produção –, tantas vezes repleta de elementos obstrutivos, supérfluos e inócuos. Na sociedade pós-moderna em que vivemos, cada vez mais atomizada e tribalizada, o consumo é sobretudo estimulado pela procura de sentido. Por isso, costumo dizer que nada é pior para uma marca ou um produto do que pregar o vazio.</p>

<p>Comecei por dizer que sou um apaixonado. Não concebo a possibilidade de viver bem comigo mesmo sem fazer o que gosto. Chamem-me um idealista. Passamos uma boa parte da nossa vida a trabalhar e a vida é demasiado curta para perdermos tempo com coisas inúteis e que nos dão cabo da saúde. Claro que em todos os trabalhos há coisas que gostamos menos de fazer do que outras. Nada é perfeito. Mas sem a libertação de uma boa dose de adrenalina, ou de ‘febre criativa’ – como lhe chamou García Márquez –, a minha motivação esvai-se e o trabalho torna-se demasiado penoso. Infelizmente, o contexto de crise atual tem-me obrigado a hesitar cada vez mais entre o coração e a razão, entre o que gosto de fazer e a impiedosa necessidade de sobreviver, numa área profissional cada vez mais saturada e precarizada. Mas não estaremos todos assim?</p>
</div>

<style>
  p {
    color: #333;
    margin-top: 25px;
  }
</style>