import InfoCard from "../../../components/InfoCard"
import imageAlunos from '../../../assets/alunosFt1.png'

const Germinatech = () => {
    return (
        <>
            <InfoCard title="Escola" titleColorWord="Germinatech" subtitle="Um novo modelo de formação, já iniciado pela Escola da Família é o uso da tecnologia por meio das lives, uma estratégia que se tornou popular durante a pandemia da Covid-19. " right={true} image={imageAlunos} link='/germinatech' />
        </>
    )
}

export default Germinatech