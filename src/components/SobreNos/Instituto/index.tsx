import React from 'react'
import StyleInstituto from './style'

const Instituto = () => {
  return (
    <>
      <StyleInstituto>
        <h1 style={{ fontSize: '2.5em' }}>
          Sobre o <span style={{ color: '#00AEEF' }}>Germinare</span>
        </h1>
        <p className="paragrafo">
          Formamos efetivamente, jovens administradores de empresa que tenham
          total aderência aos valores, alta capacidade de liderança e
          competência para produzir resultados superlativos.
        </p>
        <iframe
          width="854"
          height="480"
          src="https://www.youtube.com/embed/6BMlkTbvGXI?controls=0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ borderRadius: '8px' }}
        ></iframe>
      </StyleInstituto>
    </>
  )
}

export default Instituto
