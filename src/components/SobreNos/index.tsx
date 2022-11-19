import Hero from './Hero/index'
import Instituto from './Instituto/index'
import ProjetoAcedmico from './ProjetoAcademico'
import ComponentCarrossel from '../Carrossel/index'
import Valores from './style'

const SobreNos = () => {
  let listaElementos: Array<any> = [, 
  <Valores style={{backgroundColor: "#88C268"}}>Determinação</Valores>, 
  <Valores style={{backgroundColor: "#ED923A"}}>Disciplina</Valores>, 
  <Valores style={{backgroundColor: "#EB6339"}}>Disponibilidade</Valores>, 
  <Valores style={{backgroundColor: "#46A461"}}>Simplicidade</Valores>, 
  <Valores style={{backgroundColor: "#C51D26"}}>Franqueza</Valores>, 
  <Valores style={{backgroundColor: "#387BBD"}}>Humildade</Valores>, 
  <Valores style={{backgroundColor: "#2E3092"}}>Atitude de Dono</Valores>, 
]
  return (
    <>
      <Hero titulo={'Transformando o Brasil através da educação'} />
      <Instituto />
      <ProjetoAcedmico />
      <ComponentCarrossel lista={listaElementos} classe={"valores"}/>
    </>
  )
}

export default SobreNos
