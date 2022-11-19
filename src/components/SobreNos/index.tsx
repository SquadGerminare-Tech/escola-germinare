import Hero from './Hero/index'
import Instituto from './Instituto/index'
import ProjetoAcedmico from './ProjetoAcademico'
import ComponentCarrossel from '../Carrossel/index'

const SobreNos = () => {
  let lista: Array<any> = [
  <div>Tetse1</div>, 
  <div>Tetse2</div>, 
  <div>Tetse3</div>, 
  <div>Tetse4</div>, 
  <div>Tetse5</div>,
  <div>Tetse6</div>, 
  <div>Tetse7</div>
]
  return (
    <>
      <Hero titulo={'Transformando o Brasil através da educação'} />
      <Instituto />
      <ProjetoAcedmico />
      <ComponentCarrossel lista={lista}/>
    </>
  )
}

export default SobreNos
