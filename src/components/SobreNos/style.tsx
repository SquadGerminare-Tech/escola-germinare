import { styled } from '@mui/system'

const Valores = styled('div')({
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '10px',
})

const Certificados = styled('div')({
    cursor: 'pointer',
    width: '100%',
    height: '100%',
    backgroundPosition: 'center', 
    backgroundRepeat: 'no-repeat',
    borderRadius: '15px',
    "& span": {
        width: '50%'
    }
})

export {Certificados, Valores}