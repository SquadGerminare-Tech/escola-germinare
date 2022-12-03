import StyleBigNumbers from './style'
import icon1 from '../../../assets/pessoas.png'
import icon2 from '../../../assets/dinheiro.png'
import icon3 from '../../../assets/relogio.png'

const BigNumbers = () => {
  return (
    <StyleBigNumbers>
      <h2 className='h2'>"Não subestimamos nosso alunos"</h2>
      <div className='container'>
        <div className='contentContainer'>
          <img src={icon1} alt='' style={{width: '33.12px'}}/>
          <h4 className='h4'>+ 500 alunos</h4>
          <p>atualmente estão construindo seu futuro na Germinare</p>
        </div>
        <div className='contentContainer'>
          <img src={icon2} alt='' style={{width: '18px'}}/>
          <h4 className='h4'>R$5.000,00</h4>
          <p>é a média salarial dos alunos recém formados</p>
        </div>
        <div className='contentContainer'>
          <img src={icon3} alt='' style={{width:'30px'}}/>
          <h4 className='h4'>12 anos</h4>
          <p>mudando vidas e fazendo história na educação</p>
        </div>
      </div>
    </StyleBigNumbers>
  )
}

export default BigNumbers
