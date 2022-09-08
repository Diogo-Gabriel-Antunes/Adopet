import './card.css'
import '../../assets/Logo/Logo.svg'
import { Link } from 'react-router-dom'
import { IAnimais } from '../../interfaces/IAnimais'
import React from 'react'

interface Props {
  animais: IAnimais[]
}

const Card = ({ animais }: Props) => {
  return (

    <div className='card'>
      {animais.map(item => {
        return (
          <React.Fragment key={item.nome}>
            <div>
              <img src={item.imagem} alt="" />
            </div>
            <div>
              <h6 className='card_nome'>{item.nome}</h6>
              <div className='card_informacoes'>
                <p>{item.idade}</p>
                <p>{item.porte}</p>
                <p>{item.temperamento}</p>
              </div>
              <p className='card_local'>{item.local}</p>
              <Link to="/mensagem" className='card_responsavel'>falar com responsavel</Link>
            </div>
          </React.Fragment>
        )
      })}
    </div>

  )
}

export default Card