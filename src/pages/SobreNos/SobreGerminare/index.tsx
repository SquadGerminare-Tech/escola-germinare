import AboutGerminare from './style'
import Window from '../../../components/Window'
import windowImage from '../../../assets/fotoinstitucional-01.png'

const SobreGerminare = () => {
  return (
    <AboutGerminare>
      <div className='text' style={{ width: '40rem' }}>
        <h2 className='h2'>Sobre a Germinare</h2>
        <p className='p'>
          Nossa história começa em 2010, onde admitimos nossas primeiras turmas
          e desde então, trabalhamos arduamente para garantir que nossa missão
          seja cumprida com êxito.
        </p>
        <p className='p'>
          <strong>Nossa missão</strong> <br /> Formar, efetivamente, jovens
          administradores de empresas que tenham total aderência aos valores,
          alta capacidade de liderança e competência para produzir resultados
          superlativos.
        </p>
      </div>
      <Window
        image={windowImage}
      ></Window>
    </AboutGerminare>
  )
}

export default SobreGerminare
