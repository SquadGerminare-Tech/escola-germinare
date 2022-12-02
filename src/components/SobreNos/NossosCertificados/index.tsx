import ComponentCarrossel from '../../Carrossel/index'
import { Certificados, StyleCertificados } from './style'
import CEBAS from '../../../assets/CEBAS.png'
import CMDCA from '../../../assets/CMDCA.png'
import UNESCO from '../../../assets/UNESCO.png'
import UPF from '../../../assets/UPF.png'

const NossosCertificados = () => {
    let certificados = [
        <Certificados
          id={UNESCO}
          style={{
            backgroundImage: `url(${UNESCO})`,
            backgroundColor: '#1583B2',
            backgroundSize: '200px'
          }}
        >
        </Certificados>,
        <Certificados
          id={CEBAS}
          style={{
            backgroundImage: `url(${CEBAS})`,
            backgroundColor: '#88C268',
            backgroundSize: '300px'
          }}
        >
        </Certificados>,
        <Certificados
          id={UPF}
          style={{
            backgroundImage: `url(${UPF})`,
            backgroundSize: '250px',
            backgroundColor: '#ED923A'
          }}
        >
        </Certificados>,
        <Certificados
          id={CMDCA}
          style={{
            backgroundImage: `url(${CMDCA})`,
            backgroundColor: '#C51D26',
            backgroundSize: '300px'
          }}
        >
        </Certificados>
      ]
    
    return(
        <StyleCertificados>
            <h2>Nossos <span>Certificados</span></h2>
            <ComponentCarrossel
            lista={certificados}
            classe={'certificados'}
            direcao='x'
            ></ComponentCarrossel>
        </StyleCertificados>
    )
}


export default NossosCertificados