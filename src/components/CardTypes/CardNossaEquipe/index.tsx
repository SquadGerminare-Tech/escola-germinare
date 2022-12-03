import StyleCardNossaEquipe from './style'

interface card {
  imagePath: string
  name: string
  office: string
  bg: string
}

const CardNossaEquipe = (props: card) => {
  return (
    <StyleCardNossaEquipe>
      <div className='background' style={{backgroundColor: `${props.bg}`}}>
        <div
          style={{ width: '100%', height: '100%',  zIndex:'-1',clipPath:'border-box', backgroundImage: `url(${props.imagePath})`}}
        />
      </div>
      <h4 className='h4'>{props.name}</h4>
      <div className='badge'>{props.office}</div>
    </StyleCardNossaEquipe>
  )
}

export default CardNossaEquipe
