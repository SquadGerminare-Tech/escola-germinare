import { styled } from '@mui/system'

const CardTypeOne = styled('div')({
    display: 'flex',
    backgroundColor: '#40429B',
    maxWidth:'500px',
    height:'220px',
    borderRadius: '10px', 
    color: 'white',
    margin: '10px',
    '& div':{
        padding: '20px',
        width: '50%',
        '& h2':{
            fontWeight: '100'
        },
        '& p':{
            marginTop: '10px',
            width: '210px',
            wordWrap: 'break-word'
        }
    },
    '& .imgCard': {
        height: '100%',
        width: '50%',
        borderRadius: '10px 0 0 10px',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '20rem',
        backgroundPosition: 'center',
    }
})

const CardTypeTwo = styled('div')({
    display: 'flex',
    backgroundColor: '#40429B',
    width:'500px',
    height:'220px',
    borderRadius: '10px',
    color: 'white',
    margin: '10px',
    '& div':{
        padding: '20px',
        '& h2':{
            fontWeight: '100'
        },
        '& p':{
            marginTop: '10px',
            width: '210px',
            wordWrap: 'break-word'
        }
    },
    '& .imgCard': {
        padding: '0',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '20rem',
        height: '100%',
        width: '50%',
        borderRadius: '0 10px 10px 0',
        backgroundPosition: 'center',
    }
})

export {CardTypeOne, CardTypeTwo}