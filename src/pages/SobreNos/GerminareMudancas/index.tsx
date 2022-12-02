import React from 'react'
import StyleGerminareMudancas from './style'

const GerminareMudancas = () => {
  return (
    <StyleGerminareMudancas>
      <h2 style={{ fontSize: '2.5em' }}>A Germinare é feita de mudanças</h2>
      <iframe
        width='854'
        height='480'
        src='https://www.youtube.com/embed/6BMlkTbvGXI?controls=0'
        title='YouTube video player'
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
        style={{ borderRadius: '8px' }}
      ></iframe>
      <p className='paragrafo'>
        Desde de sua fundação, a escola Germinare tem como missão formar jovens gestores de negócios por meio de uma educação única e inteiramente gratuita. E no dia 8 de fevereiro de 2022, completamos 12 anos de Germinare.
        Vem com a gente acompanhar toda a nossa evolução!
      </p>
    </StyleGerminareMudancas>
  )
}

export default GerminareMudancas
