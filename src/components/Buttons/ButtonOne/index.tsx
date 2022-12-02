import React from 'react'
import StyleButtonOne from './style'

interface button {
  content: string
  link: string
}

const ButtonOne = (props: button) => {
  return (
    <StyleButtonOne>
      <a className='buttonContent' href={props.link}>
        {props.content}
      </a>
    </StyleButtonOne>
  )
}

export default ButtonOne
