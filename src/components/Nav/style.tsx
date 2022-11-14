import { styled } from "@mui/system"

const Nav = styled('nav')({
    position: 'fixed',
    top: '0',
    width: '100vw',
    backgroundColor: '#2E3092',
    color: '#e8e7e7',
    fontWeight: '500',
    padding: '0 100px',
    justifyContent: 'space-between',
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
    "& .inputt": {
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
})

export default Nav