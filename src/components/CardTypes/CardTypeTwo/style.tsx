import { styled } from '@mui/system'

const Cardtwo = styled('div')({
    backgroundColor: '#252675',
    textAlign: 'center',
    width: '400px',
    color: 'white',
    padding: '30px',
    margin: '10px',
    borderRadius: '5px',
    minHeight: '280px',
    '& h2': {
        fontSize: '1.7rem'
    },
    '& *': {
        margin: '12px 0'
    }, 
    '& img':{
        width: '60px'
    },
    '& .subtitle':{
        height: '48px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    '& button': {
        width: '100%',
        height: '40px',
        border: '3px solid #387BBD',
        color: 'white',
        backgroundColor: '#387BBD',
        borderRadius: '5px',
        ':hover': {
            backgroundColor: '#2E3092',
        }
    }

})

export { Cardtwo }