import React from 'react'
import logo from '../../../assets/logo.png'
import StyleHero from './style'

const Hero = () => {
  return (
    <>
      <StyleHero>
        <div className="borrao"></div>
        <div className="content">
          <img className="logo" src={logo} alt="Logo"></img>
          <h1
            className="letter"
            style={
              {
                /*marginLeft: "20px", fontWeight: '600'*/
              }
            }
          >
            Transformar o Brasil <br /> através da educação
          </h1>
        </div>
      </StyleHero>
    </>
  )
}

export default Hero
