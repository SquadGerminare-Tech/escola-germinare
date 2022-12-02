import { styled } from '@mui/system'

const CardTypeThree = styled('div')({
    display: 'flex',
    color: '#2E3092',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '380px',
    height: '520px',
    border: '2px solid #2E3092',
    borderRadius: '10px',
    padding: '0 30px',
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
    }
})

export default CardTypeThree    