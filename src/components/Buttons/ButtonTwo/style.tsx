import { styled } from '@mui/system'

const StyleButtonTwo = styled('button')({
  backgroundColor: '#2E3092',
  border: 'solid 3px #2E3092',
  borderRadius: '4px',
  padding: '8px 20px',
  ':hover': {
    backgroundColor: 'Transparent',
    border: 'solid 3px #2E3092',
    padding: '8px 20px',
    cursor: 'pointer',
    '& .buttoContent':{
      color: '#2E3092',
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
