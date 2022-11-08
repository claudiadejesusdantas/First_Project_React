import Paragraph from "./Paragraph"
import Photo from "./Photo"
import Subtitle from "./Subtitle"

function Bio(){
    return(
        <header>
            <Subtitle text="Nice to meet you, I'm Claudia de Jesus Dantas"/>
            <Paragraph text="I have a degree in Human Resources, currently studying technology. Passionate about the front-end area, Reprograma student and instagram content creator @claudiadejesusdantastudy."/>
            <Photo src="https://avatars.githubusercontent.com/u/101577825?v=4" alt="Photo for Claudia de Jesus Dantas"/>
        </header>
    )
}

export default Bio