import React from 'react'
import './App.css'

import Header from './components/Header/index'
import Section_Celular from './components/Section_Celular'
import SobreNos from './components/SobreNos/index'

function App() {
  return (
    <>
      <Header />
      <Section_Celular 
      title='Nossas redes sociais'>
        <p>Para ficar por dentro das novidades da escola siga:</p>
        <a href="">@escolagerminare</a>
        <p>Para saber mais sobre o dia-a-dia dos alunos siga:</p>
        <a href="">academiasgerminare</a>
        <p>Estamos sempre atualizando nossas redes sociais. Não deixe de nos seguir no Instagram e no TikTok.</p>
      </Section_Celular>
    </>
  )
}

export default App
