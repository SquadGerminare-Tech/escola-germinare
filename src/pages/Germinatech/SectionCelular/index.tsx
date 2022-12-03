import * as React from 'react';
import {BackgroundSection, ContainerTxt, ContainerCelular, ElementCelular} from './style'

interface Section {
    title: string,
    children: React.ReactNode,
    video: any,
    type: string

}

const SectionCelular = (props: Section) => {
    return (
        <>
            <BackgroundSection>
                <div>
                    <ContainerTxt>
                        <p className='titleSection' >{props.title}</p>
                        <p>{props.children}</p>
                    </ContainerTxt>
                </div>

                <div>
                    < ElementCelular />
                    <ContainerCelular>
                        <source className='video' src={props.video} type={props.type} />
                    </ContainerCelular>
                </div>
            </BackgroundSection>
        </>
    )
}

export default SectionCelular