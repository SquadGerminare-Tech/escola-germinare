import { styled } from '@mui/system'

const StyleButtonTwoAlt = styled('button')({
  backgroundColor: '#2E3092',
  border: 'none',
  borderRadius: '4px',
  padding: '8px 20px',
  ':hover': {
    backgroundColor: 'Transparent',
    border: 'solid 3px #2E3092',
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

export default StyleButtonTwoAlt
