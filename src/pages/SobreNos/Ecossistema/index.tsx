import Card from '../../../components/Cards/Card0ne/index'
import image1 from '../../../assets/img-card1.png'
import StyleEcossistema from './style'
import ButtonOneAlt from '../../../components/Buttons/ButtonOneAlt/index'

const Ecossistema = () => {
  return (
    <StyleEcossistema>
      <div className='stick'>
        <h2 style={{ fontSize: '2.5em' }}>
          Como nosso ecossistema está conectado?
        </h2>
        <p style={{ margin: '1.5rem 0' }}>
          Tudo que trabalha em conjunto para a conquista do nosso objetivo:
          formar efetivamente jovens tocadores de negócios
        </p>
        <ButtonOneAlt content='SAIBA MAIS' link='#'></ButtonOneAlt>
      </div>
      <div>
        <Card
          right={true}
          background={image1}
          title='Estágio'
          subtitle='popopo'
        ></Card>
        <Card
          right={false}
          background={image1}
          title='Estágio'
          subtitle='popopo'
        ></Card>
        <Card
          right={true}
          background={image1}
          title='Estágio'
          subtitle='popopo'
        ></Card>
        <Card
          right={false}
          background={image1}
          title='Estágio'
          subtitle='popopo'
        ></Card>
        <Card
          right={true}
          background={image1}
          title='Estágio'
          subtitle='popopo'
        ></Card>
        <Card
          right={false}
          background={image1}
          title='Estágio'
          subtitle='popopo'
        ></Card>
      </div>
    </StyleEcossistema>
  )
}

export default Ecossistema
