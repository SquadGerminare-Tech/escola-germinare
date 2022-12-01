import { styled } from '@mui/system'

const CardTypeOne = styled('div')({
    display: 'flex',
    backgroundColor: '#40429B',
    maxWidth:'500px',
    height:'220px',
    borderRadius: '10px',
    color: 'white',
    marginLeft: '500px',
    '& div':{
        padding: '20px',
        width: '50%',
        '& h2':{
            fontWeight: '100'
        },
        '& p':{
            marginTop: '10px',
            width: '20px',
            wordWrap: 'break-word'
        }
    },
    '& .imgCard': {
        height: '100%',
        width: '50%',
        borderRadius: '10px 0 0 10px'
    }
})

// const CardTypeTwo = styled('div')({
//     display: 'flex',
//     backgroundColor: '#40429B',
//     width:'500px',
//     height:'220px',
//     borderRadius: '10px',
//     color: 'white',
//     '& div':{
//         padding: '20px',
//         '& h2':{
//             fontWeight: '100'
//         },
//         '& p':{
//             marginTop: '10px',
//         }
//     },
//     '& .imgCard': {
//         padding: '0',
//         backgroundRepeat: 'no-repeat',
//         backgroundSize: '15rem',
//         height: '100%',
//         width: '50%',
//         borderRadius: '10px 10px'
//     }
// })

export {CardTypeOne, /*CardTypeTwo*/}