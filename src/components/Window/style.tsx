import { styled } from '@mui/system'

const StyleWindow = styled('article')({
  width: 'min-content',
  height: 'fit-content',
  boxShadow: '0px 0px 19.207px rgba(46, 48, 146, 0.5)',
  margin: '0 40px',
  borderRadius: '4px',
  overflow: 'hidden',
  '& .top': {
    padding: '9px 20px',
    display: 'flex',
    flexDirection: 'row',
    gap: '.5em',
    backgroundColor: '#2E3092'
  }
})

export default StyleWindow