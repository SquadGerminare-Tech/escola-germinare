import ComponentCarrossel from '../../../components/Carrossel/index'
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
        backgroundSize: '250px'
      }}
    >
      <span style={{ display: 'none' }}>
        Em seu primeiro ano de funcionamento, a Germinare recebeu um grande
        sinal de reconhecimento de seu projeto educativo, pois passou a integrar
        o Programa das Escolas Associadas da UNESCO no Brasil.
      </span>
    </Certificados>,
    <Certificados
      id={CEBAS}
      style={{
        backgroundImage: `url(${CEBAS})`,
        backgroundColor: '#88C268',
        backgroundSize: '400px'
      }}
    >
      <span style={{ display: 'none' }}>
        Contribuimos de uma maneira efetiva para o sucesso de inclusão social de
        país por meio de bolsa de estudos integrais para os jovens brasileiros.
      </span>
    </Certificados>,
    <Certificados
      id={UPF}
      style={{
        backgroundImage: `url(${UPF})`,
        backgroundSize: '350px',
        backgroundColor: '#ED923A'
      }}
    >
      <span style={{ display: 'none' }}>
        A escola Germinare pode ser considerada pelas imprensas apoiadoras como
        despesa operacional e consequentemente reduz a base de cálculo do
        imposto de renda e da CSLL.
      </span>
    </Certificados>,
    <Certificados
      id={CMDCA}
      style={{
        backgroundImage: `url(${CMDCA})`,
        backgroundColor: '#C51D26',
        backgroundSize: '400px'
      }}
    >
      <span style={{ display: 'none' }}>
        A Escola Germinare faz parte do CMDCA desde 2014.
      </span>
    </Certificados>
  ]

  return (
    <StyleCertificados>
      <h2>Nossos Certificados</h2>
      <ComponentCarrossel
        lista={certificados}
        classe={'certificados'}
        direcao='x'
      ></ComponentCarrossel>
    </StyleCertificados>
  )
}

export default NossosCertificados
