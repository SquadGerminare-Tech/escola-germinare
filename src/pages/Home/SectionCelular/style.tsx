import { styled } from '@mui/system'

const BackgroundSection = styled('div')({
    display: 'flex',
    width:'100wv',
    maxHeight: '550px',
    backgroundColor:'#E8E7E7',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:'row',
    marginTop:'5rem',
    '& div': {
        margin: '20px 30px',
        display: 'flex',
        flexDirection: 'column',
        alignItems:'center',
    }
})

const ContainerTxt = styled('div')({
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    width: '557px',
    fontWeight:'400',
    '& .titleSection': {
        color: '#2E3092',
        fontSize:'40px',
        fontWeight:'700',
        marginBottom:'24px',
        width: '557px'    
    }

})

const ContainerCelular = styled('div')({
    display:'flex',
    border:' 8px solid #2E3092',
    borderRadius:'20px',
    width:'244px',
    height:'464px',
    '& .video': {
        height: '464px',
        width: '244px'
    }
})

const ElementCelular = styled('p')({
    zIndex:'5',
    width:'116px',
    height:'20px',
    backgroundColor:'#2E3092',
    border:'1px solid #2E3092',
    borderRadius:'0 0 15px 15px',
    margin:'0 auto -40px'
})

export { BackgroundSection, ContainerTxt, ContainerCelular, ElementCelular}