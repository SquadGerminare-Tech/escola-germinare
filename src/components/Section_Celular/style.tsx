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
        backgroundColor: 'pink',
        display: 'flex',
        justifyContent:'space-around'
    }
})

const ContainerTxt = styled('div')({
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    width: '48%',
    '& .titleSection': {
        color: '#2E3092',
        fontSize:'40px',
        fontWeight:'700'    
    }

})

const ContainerCelular = styled('div')({
    display:'flex',
    border:' 8px solid #2E3092',
    borderRadius:'20px',
    width:'244px',
    height:'464px'
})

export { BackgroundSection, ContainerTxt, ContainerCelular}