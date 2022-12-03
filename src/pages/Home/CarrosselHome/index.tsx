import CardTypeFour from "../../../components/CardTypes/CardTypeFour"
import image1 from '../../../assets/background-inicio.png'
import StyleCarrosselHome from "./style"
import ComponentCarrossel from "../../../components/Carrossel"

const CarrosselHome = () => {
    const listaHome = [
        <CardTypeFour title="Adimissão" content="Clique no botão abaixo para saber o resultado de cada etapa do processo de admissão da nossa escola" image={image1}/>,
        <CardTypeFour title="Adimissão" content="Clique no botão abaixo para saber o resultado de cada etapa do processo de admissão da nossa escola" image={image1}/>,
        <CardTypeFour title="Adimissão" content="Clique no botão abaixo para saber o resultado de cada etapa do processo de admissão da nossa escola" image={image1}/>,
        <CardTypeFour title="Adimissão" content="Clique no botão abaixo para saber o resultado de cada etapa do processo de admissão da nossa escola" image={image1}/>,
        <CardTypeFour title="Adimissão" content="Clique no botão abaixo para saber o resultado de cada etapa do processo de admissão da nossa escola" image={image1}/>
    ]

    return(
        <StyleCarrosselHome>
            <ComponentCarrossel lista={listaHome} direcao='x'/>
        </StyleCarrosselHome>
    )
}

export default CarrosselHome