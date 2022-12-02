import { styled } from '@mui/system'

const StyleButtonTwo = styled('button')({
  backgroundColor: '#387BBD',
  border: 'none',
  borderRadius: '4px',
  padding: '8px 20px',
  ':hover': {
    backgroundColor: 'Transparent',
    border: 'solid 3px #387BBD',
    padding: '5px 17px',
    cursor: 'pointer',
    '& .buttoContent':{
      color: '#387BBD',
    }
  },
  '& .buttonContent': {
    color: '#EFEFEF',
    textTransform: 'uppercase',
    textDecoration: 'none',
    fontWeight: '500'
  }
})

export default StyleButtonTwo
