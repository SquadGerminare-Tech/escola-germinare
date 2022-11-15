import React from 'react'
import logo from '../../assets/logo.png'
import lupa from '../../assets/lupa.png'
import { useRef, useState, useEffect } from 'react'
import Nav from './style'

// interface tipo {
//     nome: any
// }

const NavBar = (/*props: tipo*/) => {
  const [data, setData] = useState('')
  const esconder: any = useRef()

  const ouvirInput = (event: any) => {
    setData(event.target.value)
  }

  const showItem = () => {
    if (esconder.current.style.visibility == 'hidden') {
      esconder.current.style.marginLeft = '0'
      esconder.current.style.transition =
        ' visibility 2s, opacity 1s linear, margin-left 0.7s'
      esconder.current.style.opacity = '1'
      esconder.current.style.visibility = 'visible'
    } else {
      esconder.current.style.visibility = 'hidden'
      esconder.current.style.opacity = '0'
      esconder.current.style.transition =
        ' visibility 1s, opacity 0.2s linear, margin-left 1s'
      esconder.current.style.marginLeft = '-180px'
    }
  }

  return (
    <Nav>
      <img src={logo} alt="logo" className="logo"></img>
      <div style={{ height: '80px' }}>
        <ul className="content">
          <li className="list">Sobre Nós</li>
          <li className="list">Admissão</li>
          <li className="list">Academias</li>
          <li className="list">Governança</li>
          <li className="list">GerminaTech</li>
          <button id="btn" onClick={showItem} className="btnLupa">
            <img src={lupa} alt="lupa" style={{ width: '20px' }} />
          </button>
          <input
            type="text"
            className="inputStyle"
            ref={esconder}
            onChange={ouvirInput}
            id="hiddenInput"
            placeholder="Search..."
            onKeyPress={e => {
              if (e.key.toLowerCase() == 'enter') {
                console.log(data)
              }
            }}
          />
          <button className="botao">Área do Aluno</button>
        </ul>
      </div>
    </Nav>
  )
}

export default NavBar
