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
      <SectionCelular title='Nossas redes sociais'>
        <p>Para ficar por dentro das novidades da escola siga:</p>
        <a href=''>@escolagerminare</a>
        <p>Para saber mais sobre o dia-a-dia dos alunos siga:</p>
        <a href=''>academiasgerminare</a>
        <p>
          Estamos sempre atualizando nossas redes sociais. Não deixe de nos
          seguir no Instagram e no TikTok.
        </p>
      </SectionCelular>
    </>
  )
}

export default Home
