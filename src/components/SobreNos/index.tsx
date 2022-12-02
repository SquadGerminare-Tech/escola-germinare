import Hero from '../Hero/index'
import background from '../../assets/background-inicio.png'
import GerminareMudancas from './GerminareMudancas/index'
import NossosValores from './NossosValores'
import Ecossistema from './Ecossistema'
import React from 'react'
import Header from '../Header/index'
import SobreGerminare from './SobreGerminare/index'
import NossosCertificados from './NossosCertificados/index'

const SobreNos = () => {
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
      <GerminareMudancas />
      <NossosValores />
      {/* <Ecossistema />
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
