import React from 'react'
import StyleButtonTwoAlt from './style'

interface button {
  content: string
  link: string
}

const ButtonTwoAlt = (props: button) => {
  return (
    <StyleButtonTwoAlt>
      <a className='buttonContent' href={props.link}>
        {props.content}
      </a>
    </StyleButtonTwoAlt>
  )
}

export default ButtonTwoAlt
