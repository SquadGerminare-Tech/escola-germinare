import Hero from '../../components/Hero/index'
import background from '../../assets/background-inicio.png'
import Instituto from './Instituto/index'
import NossosValores from './NossosValores'
import Ecossistema from './Ecossistema'
import React from 'react'
import Header from '../../components/Header/index'
import SobreGerminare from './SobreGerminare/index'
import NossosCertificados from './NossosCertificados/index'
import Germinatech from './Germinatech'
import EscolaDaFamilia from './EscolaFamilia'
import Footer from '../../components/Footer'
import UmDeNos from './UmDeNos/index'
import Novidades from './Novidades'
import CardNossaEquipe from '../../components/CardTypes/CardNossaEquipe'

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
      <Instituto />
      <NossosValores />
      <Ecossistema />
      <NossosCertificados />
      <Germinatech />
      <EscolaDaFamilia />
      <UmDeNos />
      <Novidades />
      <Footer />
      {/* <CardNossaEquipe imagePath='' imageAlt='' name='Raul Moreira' office='sla' bg='#000000' /> */}
    </main>
  )
}

export default SobreNos
