import { styled } from '@mui/system'
import { transform } from 'typescript'

const StyleButtonOneAlt = styled('button')({
  backgroundColor: '#387BBD',
  border: 'none',
  borderRadius: '4px',
  padding: '8px 20px',
  ':hover': {
    backgroundColor: '#2E3092',
    border: 'solid 3px #387BBD',
    padding: '5px 17px',
    cursor: 'pointer'
  },
  '& .buttonContent': {
    color: '#EFEFEF',
    textTransform: 'uppercase',
    textDecoration: 'none',
    fontWeight: '500'
  }
})

export default StyleButtonOneAlt
