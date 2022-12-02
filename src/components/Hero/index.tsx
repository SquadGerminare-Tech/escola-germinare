import React from 'react'
import StyleHero from './style'

interface hero {
  title: string
  background: string
  text: string
}

const Hero = (props: hero) => {
  return (
    <StyleHero style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)), url(${props.background})` }}>
      <h1 className='title'>{props.title}</h1>
      <p className='text'>{props.text}</p>
    </StyleHero>
  )
}

export default Hero
