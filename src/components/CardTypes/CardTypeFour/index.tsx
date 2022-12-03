import ButtonTwo from '../../Buttons/ButtonTwo'
import StyleCardFour from './styled'

interface cardHome {
    title: string,
    content: string,
    image: string
}

const CardTypeFour = (props: cardHome) => {
    return(
        <StyleCardFour>
            <div style={{backgroundImage: `url(${props.image})`}} className='backCardFour'></div>
            <div className="infoHome">
                <h2>{props.title}</h2>
                <p>{props.content}</p>
                <ButtonTwo content='SAIBA MAIS' link=''/>
            </div>
        </StyleCardFour>
    )
}

export default CardTypeFour