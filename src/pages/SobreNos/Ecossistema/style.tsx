import { styled } from '@mui/system'

const StyleEcossistema = styled('section')({
  display: 'flex',
  color: '#E8E7E7',
  justifyContent: 'center',
  padding: '60px 100px',
  backgroundColor: '#2E3092',
  '& .stick': {
    width: '37.5rem',
    position: 'sticky',
    top: '100px',
    bottom: '10px',
    height: '200px',
    marginBottom: '60px'
  }
})

export default StyleEcossistema
