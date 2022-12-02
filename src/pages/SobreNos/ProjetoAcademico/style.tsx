import { styled } from '@mui/system'

const StyleProjetoAcademico = styled('section')({
  padding: '60px 100px',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#2E3092',
  '& .title': {
    color: '#E8E7E7',
    fontSize: '2.5em'
  },
  '& .content': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  '& .header': {
    backgroundColor: '#387BBD',
    padding: '9px 20px',
    display: 'flex',
    gap: '10px'
  },
  '& .bolinha': {
    borderRadius: '100%',
    width: '1rem',
    height: '1rem',
    backgroundColor: '#2E3092'
  },
  '& .main': {
    backgroundColor: '#FFF',
    padding: '20px 30px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '.875rem',
    textAlign: 'center',
    fontWeight: '500'
  },
  '& .window': {
    width: '24rem',
    borderRadius: '8px'
  },
  '& .button': {
    width: '100%',
    padding: '8px 20px',
    backgroundColor: '#387BBD',
    border: 'none',
    color: '#EFEFEF',
    textTransform: 'uppercase',
    fontWeight: '500',
    borderRadius: '4px',
    ':hover': {
      cursor: 'pointer',
      border: 'solid 3px #387BBD',
      padding: '5px 17px',
      backgroundColor: '#2E3092'
    }
  }
})

export default StyleProjetoAcademico
