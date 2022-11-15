import { styled } from "@mui/system"

const StyleInicio = styled('main')({
    display: 'flex',
    color: '#E8E7E7',
    justifyContent: 'center',
    backgroundColor: '#2E3092',
    width: 'calc(100vw - 16px)',
    height: '100vh', 
    padding: '60px 100px',
    "& .borrao": {
        position: 'absolute',
        left: '16rem',
        top: '5rem',
        filter: 'blur(64px)',
        opacity: '0.3',
        backgroundColor: '#00AEEF',
        width: '34rem',
        height: '35rem',
        borderRadius: '500px',
        zIndex: '0',
    },
    "& .content": {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: '1',
        gap: '3rem',
    },
    "& .letter": {
        fontSize: '3.5rem'
    },
    "& .logo": {
        opacity: '0.4',
    }
})  

export default StyleInicio