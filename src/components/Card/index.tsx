import {CardTypeOne} from './style'

interface cardType {
    background?: string,
    right: boolean,
    title: string,
    subtitle?: string
}

const Card = (props: cardType) => {
    return(
        <>
            {/* {props.right == true ?  */}
                <CardTypeOne>
                <img src={props.background} className='imgCard' alt="imgCard" />
                <div>
                    <h2>{props.title}</h2>
                    <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                </div>
                </CardTypeOne>
            {/* : */}

            {/* } */}
        </>
    )
}

export default Card 