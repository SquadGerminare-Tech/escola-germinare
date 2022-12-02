import StyleCardNossaEquipe from './style'

interface card {
  imagePath: string
  imageAlt: string
  name: string
  office: string
  bg: string
}

const CardNossaEquipe = (props: card) => {
  return (
    <StyleCardNossaEquipe>
      <div className='background' style={{backgroundColor: `${props.bg}`}}>
        <img
          style={{ width: '100%', zIndex:'-1',clipPath:'border-box'}}
          src={props.imagePath}
          alt={props.imageAlt}
        />
      </div>
      <h4 className='h4'>{props.name}</h4>
      <div className='badge'>{props.office}</div>
    </StyleCardNossaEquipe>
  )
}

export default CardNossaEquipe
