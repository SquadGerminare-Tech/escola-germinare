import { styled } from '@mui/system'


const StyleFooter = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#2E3092',
    color: 'white',
    padding: '30px 100px',

    '& .footerLogo': {
        display: 'flex',
        marginRight: '40px',
        '& > p': {
            fontWeight: '500',
            fontSize: '20px',
            width: '130px'
        },
        '& > hr': {
            border: 'none',
            width: '2px',
            height: '90px',
            backgroundColor: 'white',
            margin: '0 38px'
        },
        '& > img': {
            width: '160px',
            height: '55px',
        },
    },

    '& .footerTag': {
        display: 'flex',
        flexDirection: 'column',
        marginRight: '40px',
        margin: '18px 0 0 0',
        '& > p': {
            margin: '18px 0 0 0',
            fontWeight: '400',
            fontSize: '12px',
        },
        '& > img': {
            width: '122px',
            height: '20px',
        },
    },

    '& .footerLinks': {
        display: 'flex',
        flexDirection: 'column',
        margin: '0 40px',
        '& > h1': {
            textTransform: 'capitalize',
            fontWeight: '700',
            fontSize: '14px',
        },
        '& > p': {
            margin: '10px 0 0 0',
            fontWeight: '400',
            fontSize: '12px',
            cursor: 'pointer',
            transition: '0.3s linear',
            borderBottom: '2px solid #2E3092',

            ':hover': {
                borderBottom: '2px solid white'
            },
        },
    },

    '& .footerContact': {
        display: 'flex',
        flexDirection: 'column',
        margin: '0',
        marginLeft: '40px',

        '& .footerTalk': {
            '& > h1': {
                textTransform: 'capitalize',
                fontWeight: '700',
                fontSize: '14px',
            },
            '& p': {
                margin: '10px 0 0 0',
                fontWeight: '400',
                fontSize: '12px',
                cursor: 'pointer',
                transition: '0.3s linear',
                borderBottom: '2px solid #2E3092',
            }
        },
        '& .footerTalk:last-of-type': {
            marginTop: '10px'
        },
    }
})

export default StyleFooter
