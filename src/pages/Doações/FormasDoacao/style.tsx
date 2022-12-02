import { styled } from '@mui/system'

const StyleDoacao = styled('section')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '60px 100px',
    backgroundColor: '#2E3092',
    height: '380px',

    '& .text': {
        display: 'flex',
        flexDirection: 'column',
        '& .h1': {
            textAlign: 'left',
            fontSize: '48px',
            width: '500px',
            color: 'white'
        },
        '& .p': {
            marginTop: '30px',
            textAlign: 'left',
            fontSize: '18px',
            color: 'white',
            width: '320px',
        },
    }
})

export default StyleDoacao
