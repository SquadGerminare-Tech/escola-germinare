import { styled } from '@mui/system'

const StyleHero = styled('section')({
  marginTop: '5rem',
  color: '#E8E7E7',
  position: 'relative',
  height: '44rem',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '95rem',
  backgroundPosition: 'center',
  backgroundColor: 'black',
  '& .content': {
    zIndex: '1',
    gap: '3rem',
    marginBottom: '8rem'
  },
  '& .letter': {
    fontSize: '3em',
    fontWeight: '700',
    width: '46rem'
  },
  '& .black': {
    display: 'flex',
    alignItems: 'end',
    backgroundColor:'black',
    height: '100%',
    width: '100%',
    paddingLeft: '5rem',
    opacity: '0.7',
  }
})

export default StyleHero
