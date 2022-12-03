import React from 'react'
import logo from '../../assets/logo.png'
import { Outlet, Link } from "react-router-dom";
import searchIcon from '../../assets/lupa.png'
import { useRef, useState, useEffect } from 'react'
import StyleHeader from './style'
import ButtonOneAlt from '../../components/Buttons/ButtonOneAlt/index'

// interface tipo {
//     nome: any
// }

const Header = (/*props: tipo*/) => {
  const [data, setData] = useState('')
  const hidde: any = useRef()

  const listenInput = (event: any) => {
    setData(event.target.value)
  }

  const showItem = () => {
    if (hidde.current.style.visibility == 'visible') {
      hidde.current.style.visibility = 'hidden'
      hidde.current.style.opacity = '0'
      hidde.current.style.transition =
        ' visibility 1s, opacity 0.2s linear, margin-left 1s'
      hidde.current.style.marginLeft = '-180px'
    } else {
      console.log('ola')
      hidde.current.style.marginLeft = '0'
      hidde.current.style.transition =
        ' visibility 2s, opacity 1s linear, margin-left 0.7s'
      hidde.current.style.opacity = '1'
      hidde.current.style.visibility = 'visible'
    }
  }

  return (
    <StyleHeader>
      <Link to='/'><img src={logo} alt='logo' className='logo'></img></Link>
      <ul className='nav'>
        <li className='navItemContainer'>
          <Link to='/sobrenos' className='navItem'>Sobre Nós</Link>
        </li>
        <li className='navItemContainer'>
          <Link className='navItem' to='/doacao'>
            Admissão
          </Link>
        </li>
        <li className='navItemContainer'>
          <a className='navItem' href=''>
            Academias
          </a>
        </li>
        <li className='navItemContainer'>
          <a className='navItem' href=''>
            Governança
          </a>
        </li>
        <li className='navItemContainer'>
          <a className='navItem' href=''>
            GerminaTech
          </a>
        </li>
        <button onClick={showItem} className='buttonSearch'>
          <img
            src={searchIcon}
            alt='Barra de Pesquisa'
            style={{ width: '20px' }}
          />
        </button>
        <input
          type='text'
          className='inputStyle'
          ref={hidde}
          onChange={listenInput}
          id='hiddenInput'
          placeholder='Search...'
          onKeyPress={e => {
            if (e.key.toLowerCase() == 'enter') {
              console.log(data)
            }
          }}
        />
        <ButtonOneAlt
          link={'https://alunos.igerminare.org.br/'}
          content={'Área Restrita'}
        ></ButtonOneAlt>
        {/* <button className='botao'>Área do Aluno</button> */}
      </ul>
      <Outlet />
    </StyleHeader>
  )
}

export default Header
