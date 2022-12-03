import { styled } from '@mui/system'

const CardTypeThree = styled('div')({
    display: 'flex',
    color: '#2E3092',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    width: '21rem',
    height: '28rem',
    border: '2px solid #2E3092',
    borderRadius: '8px',
    padding: '30px 25px',
    textAlign: 'center',
    margin: '0 20px',
    '& h2': {
        margin: '30px',
        fontWeight: '500',
        width: '100%'
    },
    '& #conteudo': {
        display: 'flex',
        maxHeight: '110px',
        marginBottom: '10px',
        alignItems: 'center'
    },
    '& button': {
        width:'2rem',
        background: 'none',
        border:'none'
    }
})

export default CardTypeThree    