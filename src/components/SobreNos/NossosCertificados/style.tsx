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
    textAlign: 'center',
    "& h2": {
        padding: '40px',
        fontSize: '2rem'
    }
})

export { Certificados, StyleCertificados }
