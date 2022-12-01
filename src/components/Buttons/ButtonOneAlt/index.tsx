import React from 'react'
import StyleButtonOneAlt from './style'

interface button {
  content: string
  link: string
}

const ButtonOneAlt = (props: button) => {
  return (
    <StyleButtonOneAlt>
      <a className='buttonContent' href={props.link}>
        {props.content}
      </a>
    </StyleButtonOneAlt>
  )
}

export default ButtonOneAlt
