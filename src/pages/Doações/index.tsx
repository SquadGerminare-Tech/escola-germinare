import Hero from '../../components/Hero/index'
import React from 'react'
import Header from '../../components/Header/index'
import Footer from '../../components/Footer'
import AjudeGerminare from './AjudeGerminare'
import FormasDoacao from './FormasDoacao'
import background from '../../assets/background-doacao.png'

const Doacao = () => {
    return (
        <main>
            <Header />
            <Hero
                title={'@doegerminare'}
                background={background}
                text={
                    'Seja um amigo Germinare e ajude com uma doação para continuarmos com os projetos que irão revolucionar o futuro das nossas crianças.'
                }
            />
            <AjudeGerminare />
            <FormasDoacao />
            <Footer />
        </main>
    )
}

export default Doacao
