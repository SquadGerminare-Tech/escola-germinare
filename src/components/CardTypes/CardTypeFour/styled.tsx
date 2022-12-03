import { styled } from '@mui/system'

const StyleCardFour = styled('div')({
    display: 'flex',
    textAlign: 'left',
    width: '600px',
    height: '15rem',
    backgroundColor: 'white',
    borderRadius: '10px',
    margin: '20px',
    '& .backCardFour': {
        width: '50%',
        height: '100%',
        backgroundSize: '510px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        borderRadius: '10px 0 0 10px'
    },
    '& .infoHome': {
        width: '290px',
        marginLeft: '20px',
        marginTop: '10px',
        '& h2': {
            height: '65px'
        },
        '& p': {
            width: '230px',
            height: '120px'
        },
        '& button': {

        }
    }
})

export default StyleCardFour