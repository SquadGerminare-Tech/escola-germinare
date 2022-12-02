import { styled } from '@mui/system'

const StyleUmDeNos = styled('section')({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '40px',
    color: 'white',
    backgroundColor: '#2E3092',
    '& #umdenos': {
        fontSize: '2.5rem',
        margin: '30px'
    },
    "& span": {
        color: '#00AEEF'
    }
})

export default StyleUmDeNos