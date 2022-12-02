import * as React from 'react';
import {BackgroundSection, ContainerTxt, ContainerCelular} from './style'
// import $ from 'jquery'

interface Section {
    title: string,
    children: React.ReactNode,
    
}

const Section_Celular = (props: Section) => {
    return(
        <>
            <BackgroundSection>

                <div>

                <ContainerTxt>
                    <p className='titleSection' >{props.title}</p>
                    <p>{props.children}</p>
                </ContainerTxt>

                <ContainerCelular>

                </ContainerCelular>
                    
                </div>
                

            </BackgroundSection>

        </>
    )
}

export default Section_Celular