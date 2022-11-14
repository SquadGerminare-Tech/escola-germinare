import React from 'react';
import logo from '../../../assets/logo.png'
import StyleInicio from './style';

const Inicio = () => {
    return(
        <>
            <StyleInicio>
                <div className='borrao'></div>
                <div className='content'>
                    <img className='logo' src={logo} alt='Logo'></img>
                    <h1  className='letter' style={{/*marginLeft: "20px", fontWeight: '600'*/}}>Transformar o Brasil através da educação</h1>
                </div>
            </StyleInicio>
        </>
    )
}

export default Inicio