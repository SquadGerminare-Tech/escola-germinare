import { styled } from '@mui/system'
import { transform } from 'typescript'

const Nav = styled('nav')({
  position: 'fixed',
  top: '0',
  width: '100vw',
  height: '5rem',
  backgroundColor: '#2E3092',
  color: '#E8E7E7',
  fontWeight: '500',
  padding: '0 100px',
  justifyContent: 'space-between',
  display: 'flex',
  alignItems: 'center',
  zIndex: '2',
  '& .logo': {
    height: '3.25rem'
  },
  '& .content': {
    display: 'flex',
    alignItems: 'center',
    zIndex: "2",
    "& .logo": {
        height: '3.25rem',
    },
    "& .content": {
        display: 'flex',
        alignItems: "center",
        flexWrap: 'wrap',
        listStyleType: 'none',
        height: "100%",
        justifyContent: "space-between",
        gap: '1.625rem' 
    },
    "& .list": {
        height: '100%',
        fontSize: '0.89rem',
        display: 'flex',
        alignItems: 'center',
        ":hover": {
                borderBottom: 'solid 1px white',
                color: "#e8e7e7",
                justifyContent: "center",
                paddingTop: '1px'
        }
    },
    "& .inputStyle": {
        visibility: 'hidden',
        opacity: "0",
        marginLeft: '-180px',
        background: 'none',
        border: 'none',
        borderBottom: '2px solid white',
        color: 'white',
        ":focus": {
            outline: 'none',
        }
    },
    "& .btnLupa": {
        background: 'none',
        cursor: 'pointer',
        border: 'none',
    },
    "& .botao": {
        padding: '8px 20px',
        backgroundColor: '#387BBD',
        border: 'none',
        color: '#EFEFEF',
        textTransform: 'uppercase',
        fontWeight: '500',
        borderRadius: '4px'
    }
  }
})

export default Nav
