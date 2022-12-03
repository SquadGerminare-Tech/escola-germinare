import StyleNossaEquipe from './style'
import CardNossaEquipe from '../../../components/CardTypes/CardNossaEquipe'
import odete from '../../../assets/odete.png'
import raul from '../../../assets/raul.png'
import cintia from '../../../assets/cintia.png'
import paulo from '../../../assets/paulo.png'
import giroto from '../../../assets/giroto.png'
import audi from '../../../assets/audi.png'
import gualtieri from '../../../assets/gualtieri.png'
import ComponentCarrossel from '../../../components/Carrossel'
import StyleEquipe from './style'

const NossaEquipe = () => {
  const listaEquipe = [
    <CardNossaEquipe
    imagePath={odete}
    name='Maria Odete'
    office='Diretora'
    bg='#83D1DA'
  ></CardNossaEquipe>,
  <CardNossaEquipe
    imagePath={raul}
    name='Raul Moreira'
    office='Diretor - Academia PicPay'
    bg='#32B5E2'
  ></CardNossaEquipe>,
  <CardNossaEquipe
    imagePath={cintia}
    name='Cintia Moura'
    office='Coordenadora'
    bg='#00AEEF'
  ></CardNossaEquipe>,
  <CardNossaEquipe
    imagePath={paulo}
    
    name='Paulo Vaz'
    office='Coordenador - GerminaTech'
    bg='#387BBD'
  ></CardNossaEquipe>,
  <CardNossaEquipe
    imagePath={giroto}
    name='Carlos Giroto'
    office='Coordenador - PicPay'
    bg='#00AEEF'
  ></CardNossaEquipe>,
  <CardNossaEquipe
    imagePath={audi}
    
    name='João Audi'
    office='Coordenador - popp'
    bg='#32B5E2'
  ></CardNossaEquipe>,
  <CardNossaEquipe
    imagePath={gualtieri}
    name='Paulo Gualtieri'
    office='Coordenador - popop'
    bg='#83D1DA'
  ></CardNossaEquipe>
  ]
  return (
    <StyleEquipe>
      <h2>Nossa <span>equipe</span></h2>
      <ComponentCarrossel lista={listaEquipe} direcao='x'/>
    </StyleEquipe>
  )
}

export default NossaEquipe
