import Window from '../Window/index'
import StyleInfoCard from './style'
import ButtonOneAlt from '../Buttons/ButtonOneAlt/index'

interface card {
    title: string,
    image: string,
    titleColorWord?: string,
    subtitle: string,
    right: boolean
}

const InfoCard = (props: card) => {
    return (
        <>
        {props.right == true ? 
         <StyleInfoCard>
         <div className='InfoCardLttr'>
             <h2>{props.title} <span>{props.titleColorWord}</span></h2>
             <p>{props.subtitle}</p>
             <ButtonOneAlt content='Saiba Mais' link=''/>
         </div>
         <Window image={props.image}/>
        </StyleInfoCard>
        :
        <StyleInfoCard>
        <Window image={props.image}/>
        <div className='InfoCardLttr'>
            <h2>{props.title} <span>{props.titleColorWord}</span></h2>
            <p>{props.subtitle}</p>
            <ButtonOneAlt content='Saiba Mais' link=''/>
        </div>
        </StyleInfoCard>
    }
    
        </>
    )
}

export default InfoCard