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