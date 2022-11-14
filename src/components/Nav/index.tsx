import React from 'react';
import logo from '../../assets/logo.png';
import { useRef, useState, useEffect} from 'react'
import Nav from './style'
import console from 'console';

// interface tipo {
//     nome: any
// }

const NavBar = (/*props: tipo*/) => {
    // const [data, setData] = useState('')

    const ouvir = (event: any) => {
        console.log('ola')
    }

    return(
            <Nav>
            <img src={logo} alt='logo' className='logo'></img>
            <div style={{height: "80px"}}>
                <ul className='content'>
                    <li className='list'>Sobre Nós</li>
                    <li className='list'>Admissão</li>
                    <li className='list'>Academias</li>
                    <li className='list'>Governança</li>
                    <li className='list'>GerminaTech</li>
                    <button id='btn'>Botao</button>
                    <input type="text" className='inputt' onChange={ouvir}/>
                    <button className='botao'>Área do Aluno</button>
                </ul>
            </div>
        </Nav>
    )
}

export default NavBar