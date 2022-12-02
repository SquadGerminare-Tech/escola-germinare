import CardTypeThree from '../../../components/CardTypes/CardTypeThree/index'
import StyleNovidades from './style'
import criancas from '../../../assets/criancas-cards.png'
import xadrez from '../../../assets/xadrez-cards.png'
import ComponentCarrossel from '../../../components/Carrossel'
import inverno from '../../../assets/inverno-cards.png'

const Novidades = () => {
    const listaNovidades = [
        <CardTypeThree title='Viagem de Verão' subtitle='Veja os planos para nossas viagens de verão, nas quais os alunos terão a oportunidade de conhecer melhor os negócios do grupo!' image={criancas}/>,
        <CardTypeThree title='Campeonato de Xadrez' subtitle='Com o Xadrez sendo um dos jogos mais populares entre os alunos, a Escola realizou pela primeira vez, em 2022, um campeonato de Xadrez. Confira aqui!' image={xadrez}/>,
        <CardTypeThree title='Viagem de Inverno' subtitle='Venha conhecer as Viagens de Inverno! Elas são realizadas no meio do ano, e representam uma grande oportunidade de novas experiências para os estudantes' image={inverno}/>,
        <CardTypeThree title='Ganhadores do Enigma de Halloween' subtitle='O(A) candidato(a) fará um curso de programação de sistemas lorem lorem lorem lorem lorem lorem' image={criancas}/>
    ]

    return(
        <StyleNovidades>
            <h2>Fique por dentro das <span>novidades</span></h2>
            <ComponentCarrossel lista={listaNovidades} direcao='x'/>
        </StyleNovidades>
    )
}

export default Novidades