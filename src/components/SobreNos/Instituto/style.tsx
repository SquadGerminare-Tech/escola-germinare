import { styled } from '@mui/system'

const StyleInstituto = styled('section')({
  padding: '60px 100px',
  position: 'relative',
  textAlign: 'center',
  color: '#2E3092',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '#E8E7E7',
  gap: '1.5rem',
  '& .paragrafo': {
    width: '43rem',
    fontSize: '1.125em',
    fontWeight: '500'
  }
})

export default StyleInstituto