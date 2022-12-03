import { styled } from '@mui/system'

const StyleButtonOneAlt = styled('button')({
  backgroundColor: '#387BBD',
  border: 'solid 3px #387BBD',
  borderRadius: '4px',
  padding: '8px 20px',
  ':hover': {
    backgroundColor: 'Transparent',
    border: 'solid 3px #387BBD',
    padding: '8px 20px',
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
