import StyleCardTypeThree from './style'
import ButtonTwo from '../../Buttons/ButtonTwo/index'
import seta from '../../../assets/seta.png'

interface cardNovidades {
  content: string
  link: string
}

const CardTypeThree = (props: cardNovidades) => {
  return (
    <StyleCardTypeThree>
      <ButtonTwo content={props.content} link={props.link}></ButtonTwo>
    </StyleCardTypeThree>
  )
}

export default CardTypeThree
