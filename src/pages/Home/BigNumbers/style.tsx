import { styled } from '@mui/system'

const StyleBigNumbers = styled('section')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '60px 0',
  gap: '2.5rem',
  '& .h2': {
    fontSize: '2em',
    textTransform: 'uppercase',
    color: '#2E3092'
  },
  '& .h4': {
    fontSize: '1.5rem'
  },
  '& .p': {
    fontSize: '.75em'
  },
  '& .container': {
    display: 'flex',
    gap: '4rem',
  },
  '& .contentContainer': {
    display: 'flex',
    flexDirection: 'column',
    width: '13rem',
    alignItems: 'center',
    textAlign: 'center',
    gap: '.75rem'
  },
  '& .img': {
    width: '2rem'
  }
})

export default StyleBigNumbers
