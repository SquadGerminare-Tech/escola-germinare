import Hero from './Hero/index'
import { useRef, useState} from 'react'
import Instituto from './Instituto/index'
import ProjetoAcedmico from './ProjetoAcademico'
import ComponentCarrossel from '../Carrossel/index'
import { Valores, Certificados } from './style'
import CEBAS from '../../assets/CEBAS.png'
import CMDCA from '../../assets/CMDCA.png'
import UNESCO from '../../assets/UNESCO.png'
import UPF from '../../assets/UPF.png'
import { text } from 'node:stream/consumers'

const SobreNos = () => {

  function clickCertificados (event: any): void {
    if(event.detail == 2){
    if(event.target.style.color == 'rgba(232, 231, 231, 0)'){
      event.target.style.color = 'rgba(232, 231, 231, 1)'
      event.target.style.backgroundImage = ''      
      
    } else {
      event.target.style.color = 'rgba(232, 231, 231, 0)'
      event.target.style.backgroundImage = `url(${event.target.id})`
    }
    }
  }

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
    <Certificados id={UNESCO} onClick={clickCertificados} style={{backgroundImage: `url(${UNESCO})`, backgroundColor: '#1583B2', backgroundSize: '250px', color: 'rgba(232, 231, 231, 0)'}}><span>Em seu primeiro ano de funcionamento, a Germinare recebeu um grande sinal de reconhecimento de seu projeto educativo, pois passou a integrar o Programa das Escolas Associadas da UNESCO no Brasil.</span></Certificados>, 
    <Certificados id={CEBAS} onClick={clickCertificados} style={{backgroundImage: `url(${CEBAS})`, backgroundColor: '#88C268', backgroundSize: '400px', color: 'rgba(232, 231, 231, 0)'}}><span>Contribuimos de uma maneira efetiva para o sucesso de inclusão social de país por meio de bolsa de estudos integrais para os jovens brasileiros.</span></Certificados>,
    <Certificados id={UPF} onClick={clickCertificados} style={{backgroundImage: `url(${UPF})`, backgroundSize: '350px', backgroundColor: '#ED923A', color: 'rgba(232, 231, 231, 0)'}}><span>A escola Germinare pode ser considerada pelas imprensas apoiadoras como despesa operacional e consequentemente reduz a base de cálculo do imposto de renda e da CSLL.</span></Certificados>,
    <Certificados id={CMDCA} onClick={clickCertificados} style={{backgroundImage: `url(${CMDCA})`, backgroundColor: '#C51D26', backgroundSize: '400px', color: 'rgba(232, 231, 231, 0)'}}><span>A Escola Germinare faz parte do CMDCA desde 2014.</span></Certificados>,
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
