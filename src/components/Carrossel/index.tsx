import './style.css'
import React from 'react'
import { motion } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

interface tipo {
    lista: Array<{}>,
    classe?: string,
    direcao: any
}

const ComponentCarrossel = (props: tipo) => {
    const carrosselVertical: any = useRef()
    const carrosselHorizontal: any = useRef()
    const [tamanho, setTamanho] = useState(0)
    const [tamanho2, setTamanho2] = useState(0)

    useEffect(() => {
        setTamanho(carrosselVertical.current?.scrollWidth - carrosselVertical.current?.offsetWidth)
    }, [])

    useEffect(() => {
        setTamanho2(carrosselHorizontal.current?.scrollHeight - carrosselHorizontal.current?.offsetHeight)
    }, [])

    return(
        <>
            {props.direcao == 'x' ? 
            <div className='container'>
            <motion.div ref={carrosselVertical} className='carrossel' whileTap={{ cursor: 'grabbing' }}>
                <motion.div 
                className='inner'
                drag='x'
                dragConstraints={{ right: 0, left:-tamanho}}>
                    {props.lista.map((item: any) => (
                        <motion.div className={props.classe} style={{display: "flex", alignItems: "center"}}  key={props.lista.indexOf(item)}>
                            {item}
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div> 
            </div>
            :  
            <div className='container2'>
            <motion.div ref={carrosselHorizontal} className='carrossel' whileTap={{ cursor: 'grabbing' }}>
                <motion.div 
                drag='y'
                dragConstraints={{ top: -tamanho2, bottom: 0}}>
                    {props.lista.map((item: any) => (
                        <motion.div className={props.classe} style={{display: "flex", alignItems: "center"}}  key={props.lista.indexOf(item)}>
                            {item}
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
            </div>    
        }
        </>
    )
}

export default ComponentCarrossel