import { styled } from '@mui/system'

const Certificados = styled('div')({
  cursor: 'pointer',
  width: '100%',
  height: '100%',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  borderRadius: '15px',
  textAlign: 'center',
  color: 'rgb(232, 231, 231)'
})

const AboutGerminare = styled('section')({
  backgroundColor: '#E8E7E7',
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
    fontSize: '1.125em'
  }
})

export { Certificados }
export default AboutGerminare
