import { styled } from '@mui/system'

const StyleButtonOne = styled('button')({
  backgroundColor: '#387BBD',
  border: 'solid 3px #387BBD',
  borderRadius: '4px',
  padding: '8px 20px',
  transition: '0.3s',
  ':hover': {
    backgroundColor: 'Transparent',
    border: 'solid 3px #387BBD',
    padding: '8px 20px',
    cursor: 'pointer',
    '& .buttonContent':{
      color: '#387BBD'
    }
  },
  '& .buttonContent': {
    color: '#EFEFEF',
    textTransform: 'uppercase',
    textDecoration: 'none',
    fontWeight: '500'
  }
})

export default StyleButtonOne
