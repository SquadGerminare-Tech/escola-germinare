import './style.css'
import React from 'react'
import { motion } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

interface tipo {
    lista: Array<{}>
}

const ComponentCarrossel = (props: tipo) => {
    const carrossel: any = useRef()
    const [tamanho, setTamanho] = useState(0)

    useEffect(() => {
        setTamanho(carrossel.current?.scrollWidth - carrossel.current?.offsetWidth)
    }, [])

    return(
        <div className='container'>
            <motion.div ref={carrossel}className='carrossel' whileTap={{ cursor: 'grabbing' }}>
                <motion.div 
                className='inner'
                drag={'x'}
                dragConstraints={{ right: 0, left: -tamanho}}>
                    {props.lista.map((item: any) => (
                    <div style={{display: "flex", alignItems: "center"}}  key={props.lista.indexOf(item)}>
                        <motion.div className='item'>
                            {item}
                        </motion.div>
                        <div className='seta'></div>
                        </div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    )
}

export default ComponentCarrossel