import React from 'react'
import logo from '../../../assets/logo.png'
import StyleHero from './style'

interface hero {
  titulo: string
}

const Hero = (props: hero) => {
  return (
    <>
      <StyleHero>
        <div className="borrao"></div>
        <div className="content">
          <img className="logo" src={logo} alt="Logo"></img>
          <h1 className="letter">{props.titulo}</h1>
        </div>
      </StyleHero>
    </>
  )
}

export default Hero
