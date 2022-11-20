import Hero from './Hero/index'
import Instituto from './Instituto/index'
import ProjetoAcedmico from './ProjetoAcademico'
import ComponentCarrossel from '../Carrossel/index'
import { Valores, Certificados } from './style'
import CEBAS from '../../assets/CEBAS.png'
import CMDCA from '../../assets/CMDCA.png'
import UNESCO from '../../assets/UNESCO.png'
import UPF from '../../assets/UPF.png'
import { url } from 'inspector'

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

let certificados = [
    <Certificados style={{backgroundImage: `url(${UNESCO})`, backgroundColor: '#1583B2', backgroundSize: '250px'}}></Certificados>,
    <Certificados style={{backgroundImage: `url(${CEBAS})`, backgroundColor: '#88C268', backgroundSize: '400px'}}></Certificados>,
    <Certificados style={{backgroundImage: `url(${UPF})`, backgroundSize: '350px', backgroundColor: '#ED923A'}}></Certificados>,
    <Certificados style={{backgroundImage: `url(${CMDCA})`, backgroundColor: '#C51D26', backgroundSize: '400px'}}></Certificados>,
]
  return (
    <>
      <Hero titulo={'Transformando o Brasil através da educação'} />
      <Instituto />
      <ProjetoAcedmico />
      <ComponentCarrossel lista={listaElementos} classe={"valores"}/>
      <ComponentCarrossel lista={certificados} classe={"certificados"}></ComponentCarrossel>
    </>
  )
}

export default SobreNos
