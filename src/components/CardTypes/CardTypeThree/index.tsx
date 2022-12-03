import CardTypeThree from './style'
import Button from '../../Buttons/ButtonOneAlt/index'
import seta from '../../../assets/seta.png'

interface cardNovidades {
  title: string
  image: string
  content: string
}

const Card3 = (props: cardNovidades) => {
  return (
    <CardTypeThree>
      <div
        style={{
          width: '100%',
          minHeight: '12rem',
          backgroundImage: `url(${props.image})`,
          overflow:'hidden',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      />
      <h2>{props.title}</h2>
      <div className='conteudo'>
        <p>{props.content}</p>
      </div>
      <button style={{}}>
        <img style={{ width: '100%' }} src={seta} alt='Seta' />
      </button>
    </CardTypeThree>
  )
}

export default Card3