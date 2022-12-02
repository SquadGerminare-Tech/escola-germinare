import { styled } from '@mui/system'

const StyleValores = styled('section')({
    display: 'flex',
    alignItems: 'center',
    padding:'2rem 14rem',

    '& .conteudoValores':{
        "& h2":{
            marginBottom:'60px',
            fontSize: '3rem',
            color: '#2E3092'
        },
        "& p":{
            marginRight: '30px',
            fontSize: '1.2rem',
            '& span':{
                color: '#2E3092'
            }
        }
    }
})

const Valores = styled('div')({
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '10px',
})

export {Valores, StyleValores}
