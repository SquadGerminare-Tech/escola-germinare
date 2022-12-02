import Card2 from '../../../components/CardTypes/CardTypeTwo/index'
import StyleUmDeNos from './style'
import icone1 from '../../../assets/Icon1.png'
import icone2 from '../../../assets/Icon2.png'

const UmDeNos = () => {
    return(
        <StyleUmDeNos>
            <h2 id='umdenos'>Quer se tornar um de <span>nós</span>?</h2>
            <div style={{display: 'flex'}}>
                <Card2 title="Processo de Adimissão" subtitle='Confira a lista de convocados para a quarta etapa.' icon={icone1}/>
                <Card2 title="Banco de talentos" subtitle='Faça parte da nossa equipe.' icon={icone2}/>
            </div>
        </StyleUmDeNos>
    )
}

export default UmDeNos