import { styled } from '@mui/system'

const StyleEco = styled('div')({
    display: 'flex',
    "& .stick": {
        position: 'sticky',
        top: '100px',
        bottom: '10px',
        height: '200px',
    }
})

export default StyleEco
