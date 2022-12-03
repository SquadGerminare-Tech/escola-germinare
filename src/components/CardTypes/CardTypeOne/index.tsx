import { CardTypeOne, CardTypeTwo } from './style'

interface cardType {
    background?: string,
    right: boolean,
    title: string,
    subtitle?: string
}

const Card = (props: cardType) => {
    return (
        <>
            {props.right == true ?
                <CardTypeOne>
                    <div style={{ backgroundImage: `url(${props.background})` }} className='imgCard' />
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
                    <div style={{ backgroundImage: `url(${props.background})` }} className='imgCard' />
                </CardTypeTwo>
            }
        </>
    )
}

export default Card 