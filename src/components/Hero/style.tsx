import { styled } from '@mui/system'

const StyleHero = styled('section')({
  color: '#E8E7E7',
  width: '100%',
  height: '80vh',
  padding: '40px 100px',
  marginTop: '5rem',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'top',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  gap: '1.3rem',
  '& .title': {
    fontSize: '3em',
    width: '38rem'
  },
  '& .text': {
    fontSize: '1.125em',
    width: '690px'
  }
})

export default StyleHero
