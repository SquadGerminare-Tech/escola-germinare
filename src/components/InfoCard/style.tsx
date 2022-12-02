import { styled } from '@mui/system'

const StyleInfoCard = styled('section')({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '80px 100px',
    backgroundColor: '#E8E7E7',
    '& .InfoCardLttr': {
        width: '50rem'
    },
    '& h2': {
        margin: '20px',
        fontSize: '3rem',
        color: '#2E3092',
        '& span': {
            color: '#08B872'
        }
    },
    '& p': {
        margin: '20px',
        fontSize: '1.3rem'
    },
    '& button': {
        margin: '20px'
    }
})

export default StyleInfoCard