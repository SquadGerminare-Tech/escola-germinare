import React from 'react'
import background from '../../assets/background-inicio.png'
import windowImage from '../../assets/fotoinstitucional-01.png'
import Header from '../Header/index'
import Hero from '../Hero/index'
import AboutGerminare from './style'
import Window from '../Window/index'

const HomePage = () => {
  return (
    <>
      <Header />
      <Hero
        title={'Transformando o Brasil através da educação'}
        background={background}
        text={
          'Nossa escola se preocupa com a jornada dos alunos desde a relação deles com a família até o seu desempenho no mercado de trabalho.'
        }
      />
      <AboutGerminare>
        <div className='text'>
          <h2 className='h2'>Sobre a Germinare</h2>
          <p className='p'>
            Nossa história começa em 2010, onde admitimos nossas primeiras
            turmas e desde então, trabalhamos arduamente para garantir que nossa
            missão seja cumprida com êxito.
          </p>
          <p className='p'>
            <strong>Nossa missão</strong> <br /> Formar, efetivamente, jovens
            administradores de empresas que tenham total aderência aos valores,
            alta capacidade de liderança e competência para produzir resultados
            superlativos.
          </p>
        </div>
        <Window
          image={windowImage}
          imageAlt='3 alunas da germinare sorrindo'
        ></Window>
      </AboutGerminare>
    </>
  )
}

export default HomePage
