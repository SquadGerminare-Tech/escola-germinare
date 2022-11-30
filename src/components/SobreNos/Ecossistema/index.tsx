import Card from "../../Card/index"
import image1 from '../../../assets/img-card1.png'

const Ecossistema = () => {
    return(
        <>
            <div>
                <h2>Como nosso ecossistema está conectado?</h2>
                <p>Tudo que trabalha em conjunto para a conquista do nosso objetivo: formar efetivamente jovens tocadores de negócios</p>
                <button>SAIBA MAIS</button>
            </div>
            <div>
                <Card right={true} background={image1} title="Estágio" subtitle="popopo"></Card>
                <Card right={false} background={image1} title="Estágio" subtitle="popopo"></Card>
            </div>
        </>
    )
}

export default Ecossistema