import { styled } from '@mui/system'

const Certificados = styled('div')({
  cursor: 'pointer',
  width: '90%',
  height: '100%',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  borderRadius: '15px',
  textAlign: 'center',
  color: 'rgb(232, 231, 231)'
})

const StyleCertificados = styled('div')({
    textAlign: 'center',
    color: '#2E3092',
    backgroundColor: '#E8E7E7',
    paddingBottom: '40px',
    "& h2": {
        padding: '40px',
        fontSize: '2rem',
        "& span": {
          color: '#375BA9'
        }
    }
})

export { Certificados, StyleCertificados }
