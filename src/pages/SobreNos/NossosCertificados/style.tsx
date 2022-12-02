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

const StyleCertificados = styled('div')({
  padding: '40px 0',
  textAlign: 'center',
  '& h2': {
    marginBottom:'1.5rem',
    fontSize: '2em',
    color: '#2E3092'
  }
})

export { Certificados, StyleCertificados }
