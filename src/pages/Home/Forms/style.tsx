import { styled } from '@mui/system'

const Form = styled('form')({
    width:'458px',
    height:'516px',
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-evenly',
    alignItems:'flex-start'
})

const Input = styled('input')({
    width:'458px',
    height:'50px',
    border:'1px solid #2E3092',
    color:'#2E3092',
    padding:'20px 10px',
    backgroundColor:'#EFEFEF',
})

const InputDif = styled('textarea')({
    width:'458px',
    height:'130px',
    border:'1px solid #2E3092',
    color:'#2E3092',
    padding:'20px 10px',
    backgroundColor:'#EFEFEF',
})

const Label = styled('label')({
    color:'#2E3092',
    margin:'0 0 -40px 10px',
    fontSize:'15px',
    zIndex:'6',
    backgroundColor:'#EFEFEF',
    width: 'min-content',
    padding:'0 5px 0'
})

const Button = styled('button')({
    width:'150px',
    height:"40px",
    backgroundColor:'#2E3092',
    border:'none',
    color:'white',
    borderRadius:'2px',
    fontWeight:'500',
    ':hover':{
        color:'#2E3092',
        backgroundColor:'white',
        border:'2px solid #2E3092'
    }
})

const Title = styled('p')({
    fontSize:'34px',
    fontWeight:'700',
    color:'#2E3092'
})

const BackgroundSection = styled('div')({
    display: 'flex',
    width:'100wv',
    maxHeight: '550px',
    backgroundColor:'#EFEFEF',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:'row',
    '& div': {
        margin: '20px 30px',
        display: 'flex',
        flexDirection: 'column',
        alignItems:'center',
    }
})

export {Input, InputDif, Label, Form, Button, Title, BackgroundSection}