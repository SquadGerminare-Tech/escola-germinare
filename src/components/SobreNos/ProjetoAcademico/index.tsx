import React from 'react'
import StyleProjetoAcademico from './style'
import foto from '../../../assets/criancas.png'

const ProjetoAcedmico = () => {
  return (
    <>
      <StyleProjetoAcademico>
        <h1 className="title">
          Projeto <span style={{ color: '#00AEEF' }}>Acadêmico</span>
        </h1>
        <div className="content">
          <div className="window">
            <div className="header">
              <div className="bolinha"></div>
              <div className="bolinha"></div>
              <div className="bolinha"></div>
            </div>
            <div className="main">
              <h2>Jovem Executivo</h2>
              <p>
                Formar de maneira efetiva jovens gestores e líderes para o
                mercado de trabalho.
              </p>
              <button className="button">Saiba Mais</button>
            </div>
          </div>
          <img src={foto} alt="" />
        </div>
      </StyleProjetoAcademico>
    </>
  )
}

export default ProjetoAcedmico
