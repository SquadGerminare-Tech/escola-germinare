import valores from '../../../assets/valores.png'
import ComponentCarrossel from '../../../components/Carrossel/index'
import { Valores, StyleValores } from './style'

const NossosValores = () => {
  let listaValores: Array<any> = [
    ,
    <Valores style={{ backgroundColor: '#88C268' }}>Determinação</Valores>,
    <Valores style={{ backgroundColor: '#ED923A' }}>Disciplina</Valores>,
    <Valores style={{ backgroundColor: '#EB6339' }}>Disponibilidade</Valores>,
    <Valores style={{ backgroundColor: '#46A461' }}>Simplicidade</Valores>,
    <Valores style={{ backgroundColor: '#C51D26' }}>Franqueza</Valores>,
    <Valores style={{ backgroundColor: '#387BBD' }}>Humildade</Valores>,
    <Valores style={{ backgroundColor: '#2E3092' }}>Atitude de Dono</Valores>
  ]
  return (
    <div style={{ backgroundColor: '#E8E7E7', padding: '60px 0' }}>
      <StyleValores>
        <div className='conteudoValores'>
          <h2>Nossos Valores</h2>
          <p>
            Amparados neles, tomamos decisões e trabalhamos para{' '}
            <i>sermos os melhores naquilo que fazemos</i>. <br />
            Por meio deles, nos reconhecemos e nos aproximamos.
          </p>
        </div>
        <img src={valores} alt='valores' style={{ width: '18rem' }} />
      </StyleValores>
      <ComponentCarrossel lista={listaValores} classe={'valores'} direcao='x' />
    </div>
  )
}

export default NossosValores