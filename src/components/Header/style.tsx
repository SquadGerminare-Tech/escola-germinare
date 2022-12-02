import { styled } from '@mui/system'
import { transform } from 'typescript'

const StyleHeader = styled('header')({
  backgroundColor: '#2E3092',
  width: '100vw',
  height: '5rem',
  padding: '0 100px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'fixed',
  top: '0',
  zIndex: '2',
  '& .logo': {
    height: '3.25rem'
  },
  '& .navItem': {
    color: '#E8E7E7',
    fontSize: '.875em',
    fontWeight: '400',
    textDecoration: 'none'
  },
  '& .navItemContainer': {
    padding: '12px 0',
    ':hover': {
      paddingBottom: '11px',
      borderBottom: 'solid #E8E7E7 1px'
    }
  },
  '& .nav': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    listStyle: 'none',
    gap: '1.625rem'
  },
  '& .inputStyle': {
    visibility: 'hidden',
    opacity: '0',
    marginLeft: '-180px',
    background: 'none',
    border: 'none',
    borderBottom: '1px solid white',
    color: 'white',
    ':focus': {
      outline: 'none'
    },
    '::placeholder': {
      color: 'white'
    }
  },
  '& .buttonSearch': {
    background: 'none',
    cursor: 'pointer',
    border: 'none'
  }
})

export default StyleHeader
