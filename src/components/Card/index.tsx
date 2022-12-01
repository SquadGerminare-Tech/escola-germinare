import {CardTypeOne, CardTypeTwo} from './style'

interface cardType {
    background?: string,
    right: boolean,
    title: string,
    subtitle?: string
}

const Card = (props: cardType) => {
    return(
        <>
            {props.right == true ? 
                <CardTypeOne>
                <img src={props.background} className='imgCard' alt="imgCard" />
                <div>
                    <h2>{props.title}</h2>
                    <p>{props.subtitle}</p>
                </div>
                </CardTypeOne>
             : 
             <CardTypeTwo>
             <div>
                 <h2>{props.title}</h2>
                 <p>{props.subtitle}</p>
             </div>
             <img src={props.background} className='imgCard' alt="imgCard" />
             </CardTypeTwo>
            }
        </>
    )
}

export default Card 