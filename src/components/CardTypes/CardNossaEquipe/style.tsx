import { styled } from '@mui/system'

const StyleCardNossaEquipe = styled('section')({
  width: '20rem',
  backgroundColor: '#375BA9',
  padding: '20px 24px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '.5rem',
  borderRadius: '8px',
  margin: '10px',
  '& .background': {
    height: '13rem',
    borderRadius: '4px',
    width: '100%',
    overflow: 'hidden'
  },
  '& .h4': {
    color: '#E8E7E7',
    fontWeight: '600',
    fontSize: '1.5em '
  },
  '& .badge': {
    backgroundColor: '#387BBD',
    width: 'fit-content',
    fontSize: '.85em',
    padding: '3px 8px',
    textTransform: 'uppercase',
    fontWeight: '600',
    color: '#E8E7E7',
    borderRadius: '4px'
  }
})

export default StyleCardNossaEquipe
