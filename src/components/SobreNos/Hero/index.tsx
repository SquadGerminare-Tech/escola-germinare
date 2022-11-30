import React from 'react'
import StyleHero from './style'

interface hero {
  titulo: string,
  background: string,
  subtitulo: string
}

const Hero = (props: hero) => {
  return (
    <>
      <StyleHero style={{backgroundImage: `url(${props.background})`}}>
        <div className='black'>
          <div className="content">
            <h1 className="letter">{props.titulo}</h1>
            <p style={{width: '40em', fontSize: '1.2em', marginTop: '2rem'}}>{props.subtitulo}</p>
          </div>
        </div>
      </StyleHero>
    </>
  )
}

export default Hero
