# My Programming Journey

<img src="https://media1.giphy.com/media/1qiybA9UIc1NQ77yTe/giphy.gif?cid=ecf05e470fswu2mgx7yvx19ntn4eeo1ea456k1248hmc6c10&rid=giphy.gif&ct=g" />

## Step by step - Stage: Start

1° I followed all the steps in the video: https://www.instagram.com/reel/CeBTbEoDUTM

2° I installed the npm dependencies and ran it in the browser. I followed the commands of this twitter: https://twitter.com/SimaraConceicao/status/1529800875144781825?s=20&t=2KZjH-NL3eMEORI166W79w

3° I analyzed the project and excluded folders that would not be used.

## Step by step - Stage: Index.html
#º I wrote the name of the page in the title of index.html. I wrote the name of the page in the title of the index.html. After that there is no further change in this file.

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Programming Journey</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

## Step by step - Stage: main.jsx
The main.jsx is being called within the script, in module format. He will be responsible for the content shown in the body of the page.


##  Step by step - Stage: Photo, Subtitle and Paragraph**

To assemble the **Bio** you would need a paragraph, a title and a photo.

The `Subtitle.jsx` files were created, for the title that returns the h2 tag; `Paragraph.jsx` which returns the `p` tag and `Photo.jsx` which returns the `img` tag.

Each one uses a property, which refers to the module in question with the **html parameter** that will be assigned a value, that is, in the `Photo` function, it will return an image, uses the semantic name `(photo) )` and calls the image parameters which are `<src>` and `<alt>`, leaving the code like this:

```
function Photo(photo){
     return(
         <img src={photo.src} alt={photo.alt} /> 
```

In order for it to be imported into the `Bio.jsx` file, it must be exported

```html export default Photo
```

The same thing happens for the other files `Subtitle.jsx` and `Paragraph.jsx`, only with the text parameters.

## Step by step - Stage: Bio

To assemble the Bio it is only necessary to call the files created: `Paragraph.jsx`, `Subtitle.jsx` and `Photo.jsx`.

Assign values ​​inside the functions as shown below and import the modules:

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
reprogram student and
instagram content creator @claudiadejesusdantastudy."/>
            <Photo
src="https://avatars.githubusercontent.com/u/101577825?v=4"
alt="Photo for Claudia de Jesus Dantas"/>
        </header>
```

In order for it to be imported into the `App.jsx` file, it must be exported:

```
export default Bio
```

## Step by step - Stage: Footer

Created a `Footer.jsx` file that returns a div, with the footer, &copy and the static value. This file will be exported to be imported into `App.jsx` and displayed on the web page.

```
function Footer(footer){
    return(
        <div>
            <footer>&copy;
                Developed by Claudia de Jesus Dantas
            </footer>
        </div>

export default Footer
```

## Step by step: Card

The Card.jsx module was created to encapsulate the modules with information, making it more visually pleasing to handle the code. Using the same files that were used in Bio.jsx, it imports Subtitle.jsx, Paragraph.jsx and Photo.jsx.

In this case, the property used here is (card), where the html parameters remain the same as seen before. The code will be exported to be imported by your Cards.jsx collection, the final code looks like this:

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
        
export default card
```

## Step by step: Cards

This module was created to include card values, each card here will return a value and display it on the screen. The dynamic is the same as seen above, import the module that will be used, which in this case is Card.jsx, assign the values ​​within the parameters and export the module to be integrated into App.jsx.

## Step by step: App.jsx

Finally, all modules will point to App.jsx.

He will be responsible for showing on the screen everything that has been created so far.

The code looks like this:

```
import '../src/App.css'
import Bio from './Bio'
import Cards from './Cards'
import Footer from './Footer'

function App() {

  return(
    <div className="App">
      <h1>My programming journey</h1>
      <Bio/>
      <Cards/>
      <Footer/>
    </div>

export default App
```

## Study Reference

Repository: [https://github.com/reprograma/on20-tet-s13-react-1](https://github.com/reprograma/on20-tet-s13-react-1)

## Reference of the gifs

Accessed at: [https://giphy.com/](https://giphy.com/)

