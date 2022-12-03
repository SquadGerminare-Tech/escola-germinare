import Card from '../../../components/CardTypes/CardTypeOne/index'
import image1 from '../../../assets/img-card1.png'
import image2 from '../../../assets/img-card2.png'
import image3 from '../../../assets/img-valores.png'
import image4 from '../../../assets/img-estrutura.png'
import image5 from '../../../assets/img-escola.png'
import ButtonOneAlt from '../../../components/Buttons/ButtonOneAlt'
import StyleEcossistema from './style'

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
          subtitle='No 9° ano os alunos escolhem sua rota de carreira, o início de uma carreira repleta de conquistas e muito sucesso'
        ></Card>
        <Card
          right={false}
          background={image2}
          title='Mercado'
          subtitle='Os alunos possuem uma carreira acelerada para se tornarem capacitados a enfrentar os desafios de um cargo de liderança.'
        ></Card>
        <Card
          right={true}
          background={image3}
          title='Valores'
          subtitle='Nossos alunos possuem alta aderência aos nossos valores, alta capacidade crítica, analítica e cognitiva
              '
        ></Card>
        <Card
          right={false}
          background={image4}
          title='Estrutura'
          subtitle='Estrutura equipada com materiais altamente tecnológicos e de última geração para o melhor aprendizado'
        ></Card>
        <Card
          right={true}
          background={image5}
          title='Escola da Família'
          subtitle='Foi criada com o afim poderemos aproximar e fortalecer ainda mais a relação escola e família'
        ></Card>
      </div>
    </StyleEcossistema>
  )
}

export default Ecossistema
