import React from 'react'
import './Beneficios.css'
import IMG1 from '../../../assets/img/Beneficios/img-Frescos.png'
import IMG2 from '../../../assets/img/Beneficios/img-LibresQuimicos.png'
import IMG3 from '../../../assets/img/Beneficios/img-seleccionados.png'
import IMG4 from '../../../assets/img/Beneficios/imgCalidad.png'
import WAVE1 from '../../../assets/img/Beneficios/onda1-nuestos-beneficios.png'
import WAVE2 from '../../../assets/img/Beneficios/onda2-beneficios.png'


function Beneficios() {
  return (
    <div className='main'>

        <h2>Nuestros alimentos son</h2>
        <div className="Benefits">
            <div className="Benefit">
                <img src={IMG1} alt="" />
                <p>Frescos</p>
            </div>
            <div className="Benefit">
                <img src={IMG2} alt="" />
                <p>Libres de químicos</p>
            </div>
            <div className="Benefit">
                <img src={IMG3} alt="" />
                <p>Seleccionados</p>
            </div>
            <div className="Benefit">
                <img src={IMG4} alt="" />
                <p>Calidad</p>
            </div>
        </div>
        <div className="figure">
          <img src={WAVE1} alt="Wave1" />
        </div>
        <div className="shape2">
          <img src={WAVE2} alt="wave2" />
        </div>
    </div>
  )
}

export default Beneficios