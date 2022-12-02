import Header from "../../components/Header"
import Section_Celular from "./Section_Celular"

const Home = () => {
    return(
        <>
        <Header />
        <Section_Celular 
        title='Nossas redes sociais' video='' type='' >
          <p>Estamos sempre atualizando nossas <i>redes sociais</i>. Não deixe de nos seguir no <strong>Instagram</strong> e no <strong>TikTok</strong>.</p>
          <br/>
          <p>Para ficar por dentro das novidades da escola siga:</p>
          <a href="https://www.instagram.com/escolagerminare/" style={{fontWeight: '700', color: 'black'}} >@escolagerminare</a>
          <br/><br/>
          <p>Para saber mais sobre o dia-a-dia dos alunos siga:</p>
          <a href="https://www.instagram.com/academiasgerminare/" style={{fontWeight: '700', color: 'black'}}>academiasgerminare</a>
        </Section_Celular>
        </>
    )
}

export default Home