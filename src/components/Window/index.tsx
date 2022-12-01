import React from 'react'
import StyleWindow from './style'

interface window {
  image: string
  imageAlt: string
}

const Window = (props: window) => {
  return (
    <StyleWindow>
      <div className='top'>
        <svg
          width='16'
          height='15'
          viewBox='0 0 16 15'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <circle cx='8' cy='7.5' r='7.5' fill='#387BBD' />
        </svg>
        <svg
          width='16'
          height='15'
          viewBox='0 0 16 15'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <circle cx='8' cy='7.5' r='7.5' fill='#387BBD' />
        </svg>
        <svg
          width='16'
          height='15'
          viewBox='0 0 16 15'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <circle cx='8' cy='7.5' r='7.5' fill='#387BBD' />
        </svg>
      </div>
      <img src={props.image} alt={props.imageAlt} />
    </StyleWindow>
  )
}

export default Window
