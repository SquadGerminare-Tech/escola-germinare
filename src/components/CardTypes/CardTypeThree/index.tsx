import CardTypeThree from "./style"
import Button from '../../Buttons/ButtonOneAlt/index'

interface cardNovidades {
    title: string,
    image: string,
    subtitle: string,
}

const Card3 = (props: cardNovidades) => {
    return(
        <CardTypeThree>
            <div style={{width: '320px', height: '200px', backgroundImage: `url(${props.image})`, backgroundSize: '320px'}}/>
            <h2>{props.title}</h2>
            <div id="conteudo">
                <p>{props.subtitle}</p>
            </div>
            <Button content="SAIBA MAIS" link=''/>
        </CardTypeThree>
    )
}

export default Card3