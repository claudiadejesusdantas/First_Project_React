# README.md Passo a passo do projeto
## Minha jornada de programação

<img width="400" src="https://media3.giphy.com/media/QW9Oe9EY1o2zE649Cc/giphy.gif?cid=ecf05e47v2n8e4d0gmhj7wpzg5uzok9kkju9d2j1d9s4u4k6&rid=giphy.gif&ct=g" />

## Passo a passo - Etapa: Iniciar

1° Segui todos os passos do vídeo: [reels](https://www.instagram.com/reel/CeBTbEoDUTM)

2° Instalei as dependências do npm e executei no navegador. Eu segui os comandos deste twitter: [twitter](https://twitter.com/SimaraConceicao/status/1529800875144781825?s=20&t=2KZjH-NL3eMEORI166W79w)

3° Analisei o projeto e excluí pastas que não seriam utilizadas.

## Passo a passo - Etapa: Index.html

4° Escrevi o nome da página no título do `index.html`. Eu escrevi o nome da página no título do `index.html`. Depois disso, não há mais nenhuma alteração neste arquivo.

```
<!DOCTYPEhtml>
<html lang="pt">
  <cabeça>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Minha jornada de programação</title>
  </head>
  <corpo>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

## Passo a passo - Etapa: main.jsx

5° O `main.jsx` está sendo chamado dentro do script, em formato de módulo. Ele será responsável pelo conteúdo mostrado no corpo da página.

## Step by step - Stage: Photo, Subtitle and Paragraph

6° Para montar a **Bio** seria necessário um parágrafo, um título e uma foto. 
7° Foi criado os arquivos `Subtitle.jsx`, para o título que retornar a tag h2;  
`Paragraph.jsx` que retorna a tag `p` e o `Photo.jsx` que retorna a tag `img`. 

Cada um utiliza uma **propriedade**, que remete ao módulo em questão. Com o **parâmetro do html** que será atribuído um valor, ou seja, na função `Photo`, retornará uma imagem, que utiliza como propriedade o nome semântico `(photo)` e chama os parâmetros de imagem que são `<src>` e `<alt>`, deixando o código assim:

```
function Photo(photo){
    return(
        <img src={photo.src} alt={photo.alt} />
    )
}
```

Para que ele possa ser importado dentro do arquivo `Bio.jsx` é preciso exportá-lo

```
export default Photo
```

A mesma coisa acontece para os outros arquivos `Subtitle.jsx` e `Paragraph.jsx`, só que com os parâmetros de texto.

## Step by step - Stage: Bio

8° Para montagem da Bio só é preciso chamar os arquivos criados: `Paragraph.jsx`, `Subtitle.jsx` e `Photo.jsx`.
Atribuir valores dentro das funções, como mostrado abaixo e importar os módulos:

```
import Paragraph from "./Paragraph"
import Photo from "./Photo"
import Subtitle from "./Subtitle"

function Bio(){
    return(
        <header>
            <Subtitle 
							text="Nice to meet you, I'm Claudia DJ Dantas"/>
            <Paragraph 
							text="I have a degree in Human Resources, currently studying technology. 
							Passionate about front-end, video games, romance books and horror movies. 
							Reprograma student and 
							instagram content creator @claudiadejesusdantastudy."/>
            <Photo 
							src="https://avatars.githubusercontent.com/u/101577825?v=4" 
							alt="Photo for Claudia de Jesus Dantas"/>
        </header>
    )
}
```

Para que ele possa ser importado dentro do arquivo `App.jsx` é preciso exportá-lo:

```
export default Bio
```

## Step by step - Stage: Footer

9° Criado um arquivo `Footer.jsx` que retorna uma div, com o `footer`, `&copy` e o valor. Esse arquivo será exportado para ser importando dentro do `App.jsx` e mostrado na página web.

```
function Footer(rodape){
    return(
        <div>
            <footer >&copy; 
                Desenvolvido por Claudia de Jesus Dantas
            </footer>
        </div>
    )
}

export default Footer
```

## Step by step: Card

10° O módulo `Card.jsx` foi criado para encapsular os módulos com informações, deixando mais visualmente agradável para manejar o código. Utilizando os mesmos arquivos que foram utilizados na `Bio.jsx`, ele importa o `Subtitle.jsx`, `Paragraph.jsx` e `Photo.jsx`.

No caso a propriedade aqui utilizada é o (card), onde o os parâmetros html continuam os mesmo que visto antes. O código será exportado para ser importado pela sua coleção `Cards.jsx`, o código final fica assim:

```
import Paragraph from "./Paragraph"
import Photo from "./Photo"
import Subtitle from "./Subtitle"

function Card(card){
    return(
        <section>
            <Subtitle text={card.title}/>
            <Paragraph text={card.paragraph}/>
            <Photo src={card.link} alt={card.alt}/>
        </section>
    )
}

export default Card
```

## Step by step: Cards

11° Esse módulo foi criado para incluir os valores dos cards, cada card aqui retornará um valor e exibirá na tela. A dinâmica é a mesma vista acima, importar o módulo que será utilizado, que no caso é o `Card.jsx`, atribuir os valores dentro dos parâmetros e exportar o módulo para ser integrado no `App.jsx`.

## Step by step: App.jsx

12° Finalizando, todos os módulos apontarão para o App.jsx.

Ele será o responsável por mostrar na tela tudo que foi criado até o momento. 

O código `App.jsx` fica dessa forma:

```
import '../src/App.css'
import Bio from './Bio'
import Cards from './Cards'
import Footer from './Footer'

function App() {

  return (
    <div className="App">
      <h1>My programming journey</h1>
      <Bio/>
      <Cards/>
      <Footer/>
    </div>
  )
}

export default App
```

## Referência de Estudo

Repositório: [Semana 13 - Turma on20 Front-End 2022](https://github.com/reprograma/on20-tet-s13-react-1)

## Referência dos gifs

Acessado em: [Giphy](https://giphy.com/) <img src="https://media4.giphy.com/media/QxZEtFE02ofY00gJ71/giphy.gif" width="15" />
