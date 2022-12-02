import { styled } from '@mui/system'

const StyleValores = styled('section')({
  backgroundColor: '#E8E7E7',
  display: 'flex',
  alignItems: 'center',
  padding: '2rem 14rem',

  '& .conteudoValores': {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.75rem',
    '& h2': {
      fontSize: '3rem',
      color: '#2E3092'
    },
    '& p': {
      marginRight: '30px',
      fontSize: '1.2rem',
      '& i': {
        color: '#2E3092',
        fontWeight: '700',
        textStyle: 'italic'
      }
    }
  }
})

const Valores = styled('div')({
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '10px'
})

export { Valores, StyleValores }
