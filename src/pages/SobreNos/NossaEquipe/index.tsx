import StyleNossaEquipe from './style'
import CardNossaEquipe from '../../../components/Cards/CardNossaEquipe'
import odete from '../../../assets/odete.png'
import raul from '../../../assets/raul.png'
import cintia from '../../../assets/cintia.png'
import paulo from '../../../assets/paulo.png'
import giroto from '../../../assets/giroto.png'
import audi from '../../../assets/audi.png'
import gualtieri from '../../../assets/gualtieri.png'

const NossaEquipe = () => {
  return (
    <StyleNossaEquipe>
      <CardNossaEquipe
        imagePath={odete}
        imageAlt='Foto: Maria Odette'
        name='Maria Odete'
        office='Diretora'
        bg='#83D1DA'
      ></CardNossaEquipe>
      <CardNossaEquipe
        imagePath={raul}
        imageAlt='Foto: Raul Moreira'
        name='Raul Moreira'
        office='Diretor - Academia PicPay'
        bg='#32B5E2'
      ></CardNossaEquipe>
      <CardNossaEquipe
        imagePath={cintia}
        imageAlt='Foto: Cintia Moura'
        name='Cintia Moura'
        office='Coordenadora'
        bg='#00AEEF'
      ></CardNossaEquipe>
      <CardNossaEquipe
        imagePath={paulo}
        imageAlt='Foto: Paulo Vaz'
        name='Paulo Vaz'
        office='Coordenador - GerminaTech'
        bg='#387BBD'
      ></CardNossaEquipe>
      <CardNossaEquipe
        imagePath={giroto}
        imageAlt='Foto: Carlos Giroto'
        name='Carlos Giroto'
        office='Coordenador - PicPay'
        bg='#00AEEF'
      ></CardNossaEquipe>
      <CardNossaEquipe
        imagePath={audi}
        imageAlt='Foto: João Audi'
        name='João Audi'
        office='Coordenador - popp'
        bg='#32B5E2'
      ></CardNossaEquipe>
      <CardNossaEquipe
        imagePath={gualtieri}
        imageAlt='Foto: Paulo Gualtieri'
        name='Paulo Gualtieri'
        office='Coordenador - popop'
        bg='#83D1DA'
      ></CardNossaEquipe>
    </StyleNossaEquipe>
  )
}

export default NossaEquipe
