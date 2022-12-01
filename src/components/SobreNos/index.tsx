import Hero from '../Hero/index'
import background from '../../assets/background-inicio.png'
import Instituto from './Instituto/index'
import NossosValores from './NossosValores'
import ComponentCarrossel from '../Carrossel/index'
import { Certificados } from './style'
import CEBAS from '../../assets/CEBAS.png'
import CMDCA from '../../assets/CMDCA.png'
import UNESCO from '../../assets/UNESCO.png'
import UPF from '../../assets/UPF.png'
import Ecossistema from './Ecossistema'
import React from 'react'
import Header from '../Header/index'
import SobreGerminare from './SobreGerminare/index'

const SobreNos = () => {
  let certificados = [
    <Certificados
      id={UNESCO}
      style={{
        backgroundImage: `url(${UNESCO})`,
        backgroundColor: '#1583B2',
        backgroundSize: '250px'
      }}
    >
      <span style={{ display: 'none' }}>
        Em seu primeiro ano de funcionamento, a Germinare recebeu um grande
        sinal de reconhecimento de seu projeto educativo, pois passou a integrar
        o Programa das Escolas Associadas da UNESCO no Brasil.
      </span>
    </Certificados>,
    <Certificados
      id={CEBAS}
      style={{
        backgroundImage: `url(${CEBAS})`,
        backgroundColor: '#88C268',
        backgroundSize: '400px'
      }}
    >
      <span style={{ display: 'none' }}>
        Contribuimos de uma maneira efetiva para o sucesso de inclusão social de
        país por meio de bolsa de estudos integrais para os jovens brasileiros.
      </span>
    </Certificados>,
    <Certificados
      id={UPF}
      style={{
        backgroundImage: `url(${UPF})`,
        backgroundSize: '350px',
        backgroundColor: '#ED923A'
      }}
    >
      <span style={{ display: 'none' }}>
        A escola Germinare pode ser considerada pelas imprensas apoiadoras como
        despesa operacional e consequentemente reduz a base de cálculo do
        imposto de renda e da CSLL.
      </span>
    </Certificados>,
    <Certificados
      id={CMDCA}
      style={{
        backgroundImage: `url(${CMDCA})`,
        backgroundColor: '#C51D26',
        backgroundSize: '400px'
      }}
    >
      <span style={{ display: 'none' }}>
        A Escola Germinare faz parte do CMDCA desde 2014.
      </span>
    </Certificados>
  ]

  return (
    <main>
      <Header />
      <Hero
        title={'Transformando o Brasil através da educação'}
        background={background}
        text={
          'Nossa escola se preocupa com a jornada dos alunos desde a relação deles com a família até o seu desempenho no mercado de trabalho.'
        }
      />
      <SobreGerminare />
      {/* <Instituto />
      <NossosValores />
      <Ecossistema />
      <ComponentCarrossel
        lista={certificados}
        classe={'certificados'}
        direcao='x'
      ></ComponentCarrossel>
      <ComponentCarrossel lista={certificados} classe={"certificados"} direcao='y'></ComponentCarrossel> */}
    </main>
  )
}

export default SobreNos
