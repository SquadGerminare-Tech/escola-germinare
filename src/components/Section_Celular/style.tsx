import { styled } from '@mui/system'

const BackgroundSection = styled('div')({
    display: 'flex',
    width:'100wv',
    maxHeight: '550px',
    backgroundColor:'#E8E7E7',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:'row',
    '& div': {
        margin: 'auto 100px',
        //backgroundColor: 'pink'
    }
})

const ContainerTxt = styled('div')({
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    width: '45%',
    '& .titleSection': {
        color: '#2E3092',
        fontSize:'40px',
        fontWeight:'700'    
    }

})

// const CardTypeOne = styled('div')({
//     display: 'flex',
//     backgroundColor: '#40429B',
//     maxWidth:'500px',
//     height:'220px',
//     borderRadius: '10px',
//     color: 'white',
//     marginLeft: '500px',
//     '& div':{
//         padding: '20px',
//         width: '50%',
//         '& h2':{
//             fontWeight: '100'
//         },
//         '& p':{
//             marginTop: '10px',
//             width: '20px',
//         }
//     },
//     '& .imgCard': {
//         height: '100%',
//         width: '50%',
//         borderRadius: '10px 0 0 10px'
//     }
// })

export { BackgroundSection,ContainerTxt}