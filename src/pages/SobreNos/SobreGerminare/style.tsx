import { styled } from '@mui/system'

const AboutGerminare = styled('section')({
  backgroundColor: '#E8E7E7',
  display: 'flex',
  justifyContent: 'center',
  gap: '5rem',
  padding: '60px 100px',
  '& .text': {
    display: 'flex',
    gap: '2rem',
    flexDirection: 'column'
  },
  '& .h2': {
    color: '#2E3092',
    fontSize: '2em'
  },
  '& .p': {
    fontSize: '1.125em',
    color: '#2E3092',
  }
})

export default AboutGerminare
