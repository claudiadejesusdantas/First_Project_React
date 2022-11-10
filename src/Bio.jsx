import Paragraph from "./Paragraph"
import Photo from "./Photo"
import Subtitle from "./Subtitle"

function Bio(){
    return(
        <header>
            <Subtitle text="Nice to meet you, I'm Claudia DJ Dantas"/>
            <Paragraph text="I have a degree in Human Resources, currently studying technology. Passionate about front-end, video games, romance books and horror movies. Reprograma student and instagram content creator @claudiadejesusdantastudy."/>
            <Photo src="https://avatars.githubusercontent.com/u/101577825?v=4" alt="Photo for Claudia de Jesus Dantas"/>
        </header>
    )
}

export default Bio