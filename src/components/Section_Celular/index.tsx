import * as React from 'react';
import {BackgroundSection, ContainerTxt} from './style'

interface Section {
    title: string,
    children: React.ReactNode
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

                
                    
                </div>



                

            </BackgroundSection>

        </>
    )
}

export default Section_Celular