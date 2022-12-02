import { styled } from '@mui/system'

const StyleDoacao = styled('section')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '60px 100px',
    backgroundColor: '#E8E7E7',
    height: '380px',
    '& .h1': {
        textAlign: 'center',
        fontSize: '40px',
        width: '37.5rem',
        color: '#2E3092'
    },
    '& .p': {
        marginTop: '30px',
        textAlign: 'center',
        fontSize: '14px',
        width: '38rem',
        color: '#4D4EA2',
    },
})

export default StyleDoacao
