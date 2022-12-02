import icone1 from '../../../assets/Icon1.png'
import { Cardtwo } from './style'

interface card2 {
    icon: string,
    title: string,
    subtitle: string
}

const Card2 = (props: card2) => {
    return(
        <Cardtwo>
            <img src={props.icon} alt="" />
            <h2>{props.title}</h2>
            <div className='subtitle'>
                <p>{props.subtitle}</p>
            </div>
            <button>SAIBA MAIS</button>
        </Cardtwo>
        )
}

export default Card2