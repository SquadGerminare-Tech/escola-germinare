import React from 'react'
import StyleButtonTwo from './style'

interface button {
  content: string
  link: string
}

const ButtonTwo = (props: button) => {
  return (
    <StyleButtonTwo>
      <a className='buttonContent' href={props.link}>
        {props.content}
      </a>
    </StyleButtonTwo>
  )
}

export default ButtonTwo
