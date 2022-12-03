import { styled } from '@mui/system'

const StyleEquipe = styled('div')({
    textAlign: 'center',
    padding: '20px 0',
    backgroundColor: '#2E3092',
    color: 'white',
    "& h2": {
        fontSize: '2rem',
        margin: '15px',
        '& span': {
            color: '#00AEEF'
        }
    }
})

export default StyleEquipe
