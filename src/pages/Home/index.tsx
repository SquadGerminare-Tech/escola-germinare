import Header from '../../components/Header'
import Hero from '../../components/Hero'
import SectionCelular from './SectionCelular'
import heroHeader from '../../assets/hero-home.png'

const Home = () => {
  return (
    <>
      <Header />
      <Hero
        title='Formamos líderes e gestores de negócios'
        background={heroHeader}
        text='Estamos a 12 anos fornecendo ensino de qualidade e despertando o grande líder que há dentro de cada um. Venha fazer parte dessa jornada!'
      ></Hero>
      <SectionCelular
        title='Nossas redes sociais' video='' type='' >
          <p>Estamos sempre atualizando nossas <i>redes sociais</i>. Não deixe de nos seguir no <strong>Instagram</strong> e no <strong>TikTok</strong>.</p>
          <br/>
          <p>Para ficar por dentro das novidades da escola siga:</p>
          <a href="https://www.instagram.com/escolagerminare/" style={{fontWeight: '700', color: 'black'}} >@escolagerminare</a>
          <br/><br/>
          <p>Para saber mais sobre o dia-a-dia dos alunos siga:</p>
          <a href="https://www.instagram.com/academiasgerminare/" style={{fontWeight: '700', color: 'black'}}>academiasgerminare</a>
      </SectionCelular>
    </>
  )
}

export default Home
